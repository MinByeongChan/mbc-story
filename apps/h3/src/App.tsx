import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { H3HexagonLayer } from '@deck.gl/geo-layers';
import { MapboxOverlay } from '@deck.gl/mapbox';
import maplibregl from 'maplibre-gl';
import { polygonToCells, compactCells } from 'h3-js';
import 'maplibre-gl/dist/maplibre-gl.css';
import geojsonData from './assets/sig_4326.json';
import { MainLayout } from '@/components/ui/MainLayout';
import { Header } from '@/components/ui/Header';
import { ContentLayout } from '@/components/ui/ContentLayout';

const CENTER = { lat: 37.3595704, lng: 127.105399 };
const DEFAULT_H3_RESOLUTION = 8;
// const H3_RING_SIZE = 10;
const DEFAULT_ZOOM = 12;
const VWORLD_KEY = import.meta.env.VITE_VWORLD_KEY as string | undefined;
const VWORLD_TILE_URL = VWORLD_KEY
  ? `https://api.vworld.kr/req/wmts/1.0.0/${VWORLD_KEY}/Base/{z}/{y}/{x}.png`
  : '';

type HoverInfo = {
  id: string;
  latitude: number;
  longitude: number;
} | null;

const toByte = (value: number) => ((Math.round(value) % 256) + 256) % 256;
const getPolygonCentroid = (coordinates: number[][][]) => {
  // Polygon의 외곽선(Outer Ring) 좌표 추출
  const ring = coordinates[0];
  let lngSum = 0;
  let latSum = 0;
  
  ring.forEach(([lng, lat]) => {
    lngSum += lng;
    latSum += lat;
  });
  
  return {
    lng: lngSum / ring.length,
    lat: latSum / ring.length
  };
};


function App() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const resolutionOptions = [5, 6, 7, 8, 9, 10, 11, 12];
  const [resolution, setResolution] = useState(DEFAULT_H3_RESOLUTION);
  const [hoverInfo] = useState<HoverInfo>(null);

  const features = useMemo(() => {
    const data = geojsonData as unknown as GeoJSON.FeatureCollection;
    const features = data.features.filter((feature) => feature.geometry.type === 'Polygon');
    console.log('features', features);
    return features;
  }, []);

  const getSigOptions = useMemo(() => {
    return features.map((feature) => {
      return {
        id: feature.properties?.SIG_CD,
        name: feature.properties?.SIG_ENG_NM,
      };
    });
  }, [features]);

  const handleChangeSigSelectBox = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSigCd = e.target.value;
    const targetFeature = features.find((feature) => feature.properties?.SIG_CD === selectedSigCd);

    if (targetFeature) {
      // @ts-ignore
      const centroid = getPolygonCentroid(targetFeature.geometry.coordinates);
      console.log(`이동: ${selectedSigCd}, 좌표:`, centroid);
      mapRef.current?.flyTo({ center: [centroid.lng, centroid.lat], zoom: 10 });
    }
  };

  const allH3Data = useMemo(() => {
    const slicedFeatures = features
    // const slicedFeatures = features.slice(0, 30);

    return slicedFeatures.flatMap((feature, index) => {
      const base = toByte(index * 37 + 10);
      const color = [base, toByte(base + 85), toByte(base + 170), 140] as const;
      const lineColor = [toByte(base + 20), toByte(base + 20), toByte(base + 20), 200] as const;

      const polygon = feature.geometry as GeoJSON.Polygon;
      const outerRing = polygon.coordinates[0] as unknown as number[][];
      const cells = polygonToCells(outerRing, resolution, true);
      const compacted = compactCells(cells);

      return compacted.map((h3Index) => ({
        h3Index,
        color,
        lineColor,
      }));
    });
  }, [features, resolution]);

  const numberOfCells = useMemo(() => {
    return allH3Data.length;
  }, [allH3Data]);

  const h3Layer = useMemo(() => {
    return new H3HexagonLayer({
      id: 'h3-layer-all',
      data: allH3Data, // 모든 H3 인덱스가 담긴 배열
      getHexagon: (d) => d.h3Index, // 배열 요소 자체가 H3 인덱스임
      pickable: true,
      filled: false,
      extruded: false, // true면 3D로 돌출됨
      lineWidthMinPixels: 1,
      // getFillColor: (d) => d.color,
      // getLineColor: (d) => d.lineColor,
      onHover: (info) => {
        console.log('info', info);
      },
    });
  }, [allH3Data]);

  const handleMapMoveEnd = () => {
    const currentCenter = mapRef.current?.getCenter();
    console.log('현재 센터', currentCenter);
  };

  const handleMapZoom = () => {
    const currentZoom = mapRef.current?.getZoom();
    console.log('현재 줌 레벨:', currentZoom);
  };

  useEffect(() => {
    if (!VWORLD_KEY || !mapRef.current) {
      return;
    }

    const overlay = new MapboxOverlay({
      layers: [h3Layer],
    });

    mapRef.current?.on('load', () => {
      mapRef.current?.addSource('geojson-source', {
        type: 'geojson',
        data: geojsonData as maplibregl.GeoJSONSourceSpecification['data'],
      });
      mapRef.current?.addLayer({
        id: 'geojson-fill',
        type: 'fill',
        source: 'geojson-source',
        paint: {
          'fill-color': '#f97316',
          'fill-opacity': 0.25,
        },
      });
      mapRef.current?.addLayer({
        id: 'geojson-outline',
        type: 'line',
        source: 'geojson-source',
        paint: {
          'line-color': '#ea580c',
          'line-width': 1.5,
        },
      });
    });

    mapRef.current?.on('moveend', handleMapMoveEnd);
    mapRef.current?.on('zoom', handleMapZoom);
    mapRef.current?.on('click', 'geojson-fill', (e) => {
      if (e.features && e.features.length > 0) {
        const feature = e.features[0];
        // 마우스 커서 변경
        mapRef.current!.getCanvas().style.cursor = 'pointer';
        
        // 예: 호버된 지역 이름 로그 출력 (또는 툴팁 표시)
        console.log('Hovered:', feature.properties?.SIG_KOR_NM);
        const base = toByte(feature.properties?.SIG_CD?.charCodeAt(0) * 37 + 10);
        const color = [base, toByte(base + 85), toByte(base + 170), 140] as const;
        const lineColor = [toByte(base + 20), toByte(base + 20), toByte(base + 20), 200] as const;

        const polygon = feature.geometry as GeoJSON.Polygon;
        const outerRing = polygon.coordinates[0] as unknown as number[][];
        const cells = polygonToCells(outerRing, resolution, true);
        const compacted = compactCells(cells);

        const data = compacted.map((h3Index) => ({
          h3Index,
          color,
          lineColor,
        }));


        const hexagonLayer = new H3HexagonLayer({
          id: `h3-additional-layer-${feature.properties?.SIG_CD}`,
          data, // 모든 H3 인덱스가 담긴 배열
          getHexagon: (d) => d.h3Index, // 배열 요소 자체가 H3 인덱스임
          pickable: true,
          filled: false,
          extruded: false, // true면 3D로 돌출됨
          lineWidthMinPixels: 1,
          getFillColor: (d) => d.color,
          getLineColor: (d) => d.lineColor,
        });

        const additionalOverlay = new MapboxOverlay({
          layers: [hexagonLayer],
        });
        mapRef.current?.addControl(additionalOverlay);
      }
    });

    mapRef.current?.addControl(overlay);

    return () => {
      overlay.finalize();
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [mapRef, h3Layer]);

  useLayoutEffect(() => {
    if (!mapContainerRef.current) return;

    mapRef.current = new maplibregl.Map({
      container: mapContainerRef.current,
      style: {
        version: 8,
        sources: {
          vworld: {
            type: 'raster',
            tiles: [VWORLD_TILE_URL],
            tileSize: 256,
            attribution: 'VWorld',
          },
        },
        layers: [
          {
            id: 'vworld-base',
            type: 'raster',
            source: 'vworld',
          },
        ],
      },
      center: [CENTER.lng, CENTER.lat],
      zoom: DEFAULT_ZOOM,
      pitch: 0,
      bearing: 0,
    });
  }, [mapContainerRef]);

  if (!VWORLD_KEY) {
    return <div style={{ color: '#dc2626' }}>VITE_VWORLD_KEY를 .env에 설정해주세요.</div>;
  }

  return (
    <MainLayout>
      <Header />
      <ContentLayout>
        <aside style={{ width: '250px', height: '100%', padding: '16px' }}>
          <div>
            <select onChange={handleChangeSigSelectBox}>
              <option value="">지역 선택</option>
              {getSigOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name || option.id}
                </option>
              ))}
            </select>
          </div>
          <div>
            H3 셀 개수: {numberOfCells}
          </div>
        </aside>
        <section style={{ padding: '16px' }}>
          <div>
            <select value={resolution} onChange={(e) => setResolution(Number(e.target.value))}>
              {resolutionOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div style={{ height: '30px' }}>
            info:
            {hoverInfo
              ? `${hoverInfo?.id} ${hoverInfo?.latitude.toFixed(5)} , ${hoverInfo?.longitude.toFixed(5)}`
              : ''}
          </div>
          <div ref={mapContainerRef} style={{ width: '1000px', height: '500px' }} />
        </section>
      </ContentLayout>
    </MainLayout>
  );
}

export default App;
