import { useEffect, useMemo, useRef, useState } from 'react';
import { H3HexagonLayer } from '@deck.gl/geo-layers';
import { MapboxOverlay } from '@deck.gl/mapbox';
import maplibregl from 'maplibre-gl';
import { polygonToCells, compactCells } from 'h3-js';
import 'maplibre-gl/dist/maplibre-gl.css';
import geojsonData from './assets/sig_4326.json';

const CENTER = { lat: 37.3595704, lng: 127.105399 };
const DEFAULT_H3_RESOLUTION = 8;
const H3_RING_SIZE = 10;
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

function App() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const resolutionOptions = [5,6,7,8,9,10,11,12];
  const [resolution, setResolution] = useState(DEFAULT_H3_RESOLUTION);
  const [hoverInfo, setHoverInfo] = useState<HoverInfo>(null);

  const allH3Data = useMemo(() => {
    const data = geojsonData as unknown as GeoJSON.FeatureCollection;
    const features = data.features.filter((feature) => feature.geometry.type === 'Polygon').slice(0, 30);

    return features.flatMap((feature) => {
      const color = [ Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), 140];
      const lineColor = [ Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), 200];
      // @ts-ignore
      const cells = polygonToCells(feature.geometry.coordinates[0], resolution, true);
      const compacted = compactCells(cells);
      
      return compacted.map(h3Index => ({
        h3Index,
        color,
        lineColor
      }));
    });
  }, [resolution]);

  const h3Layer = useMemo(() => {
    return new H3HexagonLayer({
      id: 'h3-layer-all',
      data: allH3Data,      // 모든 H3 인덱스가 담긴 배열
      getHexagon: (d) => d.h3Index,    // 배열 요소 자체가 H3 인덱스임
      pickable: true,
      filled: true,
      extruded: false,         // true면 3D로 돌출됨
      lineWidthMinPixels: 1,
      getFillColor: (d) => d.color,
      getLineColor: (d) => d.lineColor,
    });
  }, [allH3Data]);
  
  useEffect(() => {
    if (!mapContainerRef.current || !VWORLD_KEY || mapRef.current) {
      return;
    }

    const map = new maplibregl.Map({
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

    const overlay = new MapboxOverlay({
      layers: [h3Layer],
    });

    map.on('load', () => {
      map.addSource('geojson-source', {
        type: 'geojson',
        data: geojsonData as maplibregl.GeoJSONSourceSpecification['data'],
      });
      map.addLayer({
        id: 'geojson-fill',
        type: 'fill',
        source: 'geojson-source',
        paint: {
          'fill-color': '#f97316',
          'fill-opacity': 0.25,
        },
      });
      map.addLayer({
        id: 'geojson-outline',
        type: 'line',
        source: 'geojson-source',
        paint: {
          'line-color': '#ea580c',
          'line-width': 1.5,
        },
      });
    });

    map.on('mouseleave', () => {
      const currentCenter = map.getCenter();
      console.log('현재 센터', currentCenter);
    });
    
    map.on('zoom', () => {
      const currentZoom = map.getZoom();
      // console.log('현재 줌 레벨:', currentZoom);
      
      // 예: 줌 레벨에 따라 H3 해상도를 동적으로 변경하려면?
      // if (currentZoom > 15) setResolution(11);
      // else if (currentZoom > 12) setResolution(9);
    });

    map.addControl(overlay);
    mapRef.current = map;

    return () => {
      overlay.finalize();
      map.remove();
      mapRef.current = null;
    };
  }, [h3Layer]);

  if (!VWORLD_KEY) {
    return <div style={{ color: '#dc2626' }}>VITE_VWORLD_KEY를 .env에 설정해주세요.</div>;
  }

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ padding: '12px 16px' }}>
        <h3>VWorld + H3 WebGL 예제</h3>
        {/* <div>H3 셀 개수: {h3Data.length}</div> */}
        <div>
          <select value={resolution} onChange={(e) => setResolution(Number(e.target.value))}>
            {resolutionOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div style={{ height: '30px' }}>
          info:
          {hoverInfo
            ? `${hoverInfo?.id} ${hoverInfo?.latitude.toFixed(5)} , ${hoverInfo?.longitude.toFixed(5)}`
            : ''}
        </div>
      </header>
      <div ref={mapContainerRef} style={{ width: '1000px', height: '500px' }} />
    </div>
  );
}

export default App;
