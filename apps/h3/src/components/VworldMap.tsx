import { useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import { compactCells, polygonToCells } from 'h3-js';
import { getPolygonCentroid, toByte } from '@/utils/utils';
import { H3HexagonLayer } from '@deck.gl/geo-layers';
import { MapboxOverlay } from '@deck.gl/mapbox';
import geojsonData from '@/assets/sig_4326.json';
import { useAreaInfo } from '@/stores/areaInfo';
import { H3HexagonData } from '@/types';
import { useResolutionInfo } from '@/stores/resolutionInfo';

const CENTER = { lat: 37.3595704, lng: 127.105399 };

const VWORLD_KEY = import.meta.env.VITE_VWORLD_KEY as string | undefined;
const VWORLD_TILE_URL = VWORLD_KEY
  ? `https://api.vworld.kr/req/wmts/1.0.0/${VWORLD_KEY}/Base/{z}/{y}/{x}.png`
  : '';
const DEFAULT_ZOOM = 12;

interface VworldMapProps {
  mapRef: React.RefObject<maplibregl.Map | null>;
  overlayAllH3Data: H3HexagonData[];
}

export const VworldMap = ({ overlayAllH3Data, mapRef }: VworldMapProps) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const additionalOverlayRef = useRef<MapboxOverlay | null>(null);
  const { setSelectedAreaInfo } = useAreaInfo();
  const { resolution, overlayResolution } = useResolutionInfo();

  const overlayH3Layer = useMemo(() => {
    return new H3HexagonLayer({
      id: 'h3-layer-overlay-all',
      data: overlayAllH3Data,
      getHexagon: (d) => d.h3Index,
      pickable: true,
      filled: false,
      extruded: false, // true면 3D로 돌출됨
      lineWidthMinPixels: 1,
      // onHover: (info) => {
      //   console.log('info', info);
      // },
    });
  }, [overlayAllH3Data]);

  const handleMapMoveEnd = () => {
    const currentCenter = mapRef.current?.getCenter();
    console.log('현재 센터', currentCenter);
  };

  const removeAdditionalOverlay = () => {
    if (additionalOverlayRef.current) {
      mapRef.current?.removeControl(additionalOverlayRef.current);
      additionalOverlayRef.current.finalize();
      additionalOverlayRef.current = null;
    }
  };

  const addAdditionalOverlay = (feature: GeoJSON.Feature) => {
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

    const layerId = `h3-additional-layer-${feature.properties?.SIG_CD}`;

    const hexagonLayer = new H3HexagonLayer({
      id: layerId,
      data, // 모든 H3 인덱스가 담긴 배열
      getHexagon: (d) => d.h3Index, // 배열 요소 자체가 H3 인덱스임
      pickable: true,
      filled: true,
      extruded: false, // true면 3D로 돌출됨
      lineWidthMinPixels: 1,
      getFillColor: (d) => d.color,
      getLineColor: (d) => d.lineColor,
    });

    const nextOverlay = new MapboxOverlay({
      layers: [hexagonLayer],
    });
    mapRef.current?.addControl(nextOverlay);
    additionalOverlayRef.current = nextOverlay;
  };

  const handleClickMapArea = (
    e: maplibregl.MapMouseEvent & {
      features?: maplibregl.MapGeoJSONFeature[];
    } & object,
  ) => {
    if (e.features && e.features.length > 0) {
      const feature = e.features[0];
      mapRef.current!.getCanvas().style.cursor = 'pointer';

      removeAdditionalOverlay();

      addAdditionalOverlay(feature);

      const centroid = getPolygonCentroid((feature.geometry as GeoJSON.Polygon).coordinates);
      setSelectedAreaInfo({
        id: feature.properties?.SIG_CD,
        center: [centroid.lng, centroid.lat],
        code: feature.properties?.SIG_CD,
        korName: feature.properties?.SIG_KOR_NM,
        engName: feature.properties?.SIG_ENG_NM,
      });

      const style = mapRef.current?.getStyle();
      if (style?.layers) {
        const layerCount = style.layers.length;
        console.log('레이어 개수:', layerCount);
      }
    }
  };

  useEffect(() => {
    if (!VWORLD_KEY || !mapRef.current) {
      return;
    }

    const overlay = new MapboxOverlay({
      layers: [overlayH3Layer],
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
    mapRef.current?.on('click', 'geojson-fill', handleClickMapArea);

    mapRef.current?.addControl(overlay);

    return () => {
      overlay.finalize();
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, [overlayH3Layer, overlayResolution, resolution]);

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

  return <div ref={mapContainerRef} style={{ width: '1000px', height: '500px' }} />;
};
