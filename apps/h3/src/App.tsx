import { useEffect, useMemo, useRef, useState } from 'react';
import { H3HexagonLayer } from '@deck.gl/geo-layers';
import { MapboxOverlay } from '@deck.gl/mapbox';
import maplibregl from 'maplibre-gl';
import { gridDisk, latLngToCell } from 'h3-js';
import 'maplibre-gl/dist/maplibre-gl.css';
import type { PickingInfo } from '@deck.gl/core';
import geojsonData from './assets/output.json';

const CENTER = { lat: 37.3595704, lng: 127.105399 };
const H3_RESOLUTION = 11;
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
  const [hoverInfo, setHoverInfo] = useState<HoverInfo>(null);

  const h3Data = useMemo(() => {
    const centerIndex = latLngToCell(CENTER.lat, CENTER.lng, H3_RESOLUTION);
    return gridDisk(centerIndex, H3_RING_SIZE);
  }, []);

  const h3Layer = useMemo(() => {
    return new H3HexagonLayer<string>({
      id: 'h3-layer',
      data: h3Data,
      getHexagon: (d: string) => d,
      pickable: true,
      filled: true,
      extruded: false,
      lineWidthMinPixels: 1,
      getFillColor: () => [59, 130, 246, 140],
      getLineColor: () => [29, 78, 216, 200],
      onHover: (info: PickingInfo<string>) => {
        if (!info.object) {
          setHoverInfo(null);
          return;
        }
        const { object, coordinate } = info;
        if (!coordinate || !Array.isArray(coordinate)) {
          setHoverInfo(null);
          return;
        }
        setHoverInfo({
          id: String(object),
          longitude: coordinate[0],
          latitude: coordinate[1],
        });
      },
    });
  }, [h3Data]);

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
        id: 'geojson-line',
        type: 'fill',
        source: 'geojson-source',
        paint: {
          'fill-color': '#088',
          'fill-opacity': 0.8,
        },
      });
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
        <div>H3 셀 개수: {h3Data.length}</div>

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
