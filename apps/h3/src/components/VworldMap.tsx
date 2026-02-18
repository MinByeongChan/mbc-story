import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import { compactCells } from 'h3-js';
import { getPolygonCentroid } from '@/utils/utils';
import { H3HexagonLayer } from '@deck.gl/geo-layers';
import { MapboxOverlay } from '@deck.gl/mapbox';
import geojsonData from '@/assets/sig_4326.json';
import { useAreaInfo } from '@/stores/areaInfo';
import { H3HexagonData, VworldAddressResponseBody } from '@/types';
import { useResolutionInfo } from '@/stores/resolutionInfo';
import { buildH3HexagonData, getH3Cells } from '@/utils/h3';
import { getAddress } from '@/api/axios';

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
  const overlayRef = useRef<MapboxOverlay | null>(null);
  const selectedLayerRef = useRef<H3HexagonLayer | null>(null);

  const { setSelectedAreaInfo } = useAreaInfo();
  const { resolution } = useResolutionInfo();
  const [locationInfo, setLocationInfo] = useState<VworldAddressResponseBody | null>(null);
  console.log('locationInfo', locationInfo);

  const overlayH3Layer = useMemo(() => {
    return new H3HexagonLayer<H3HexagonData>({
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

  const updateOverlayLayers = (
    overlayLayer: H3HexagonLayer,
    selectedLayer: H3HexagonLayer | null,
  ) => {
    const layers = selectedLayer ? [overlayLayer, selectedLayer] : [overlayLayer];
    overlayRef.current?.setProps({ layers });
  };

  const handleClickMapArea = async (
    e: maplibregl.MapMouseEvent & {
      features?: maplibregl.MapGeoJSONFeature[];
    } & object,
  ) => {
    if (e.features && e.features.length > 0) {
      const feature = e.features[0];
      mapRef.current!.getCanvas().style.cursor = 'pointer';

      const cells = getH3Cells(feature.geometry, resolution, true);
      const compacted = compactCells(cells || []);
      const data = compacted.map((h3Index) => buildH3HexagonData(h3Index, 0));

      const layerId = `h3-additional-layer-${feature.properties?.SIG_CD}`;
      const hexagonLayer = new H3HexagonLayer({
        id: layerId,
        data,
        getHexagon: (d) => d.h3Index,
        pickable: true,
        filled: true,
        extruded: false,
        lineWidthMinPixels: 1,
        getFillColor: (d) => d.color,
        getLineColor: (d) => d.lineColor,
      });

      selectedLayerRef.current = hexagonLayer;
      updateOverlayLayers(overlayH3Layer, hexagonLayer);

      const centroid = getPolygonCentroid((feature.geometry as GeoJSON.Polygon).coordinates);
      setSelectedAreaInfo({
        id: feature.properties?.SIG_CD,
        center: [centroid.lng, centroid.lat],
        code: feature.properties?.SIG_CD,
        korName: feature.properties?.SIG_KOR_NM,
        engName: feature.properties?.SIG_ENG_NM,
      });

      console.log('centroid', centroid);
      if (centroid.lng && centroid.lat) {
        const response = await getAddress({ lng: centroid.lng, lat: centroid.lat });
        setLocationInfo(response);
      }
    }
  };

  useEffect(() => {
    if (!VWORLD_KEY || !mapRef.current) {
      return;
    }

    const layers = [overlayH3Layer];

    const overlay = new MapboxOverlay({ layers });
    overlayRef.current = overlay;

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
      mapRef.current?.off('moveend', handleMapMoveEnd);
      mapRef.current?.removeControl(overlay);
      overlay.finalize();
      overlayRef.current = null;
    };
  }, [overlayH3Layer]);

  useEffect(() => {
    if (!mapRef.current) return;
    mapRef.current.on('click', 'geojson-fill', handleClickMapArea);

    return () => {
      mapRef.current?.off('click', 'geojson-fill', handleClickMapArea);
    };
  }, [resolution]);

  useEffect(() => {
    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

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
