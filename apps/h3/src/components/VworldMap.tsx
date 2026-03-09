import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import maplibregl from 'maplibre-gl';
import { getPolygonCentroid } from '@/utils/utils';
import { H3HexagonLayer } from '@deck.gl/geo-layers';
import { MapboxOverlay } from '@deck.gl/mapbox';
import geojsonData from '@/assets/sig_4326.json';
import { useAreaInfo } from '@/stores/areaInfo';
import { FeatureProperties, H3HexagonData, H3HoverInfo, VworldAddressResponseBody } from '@/types';
import { useResolutionInfo } from '@/stores/resolutionInfo';
import { buildH3HexagonData, getH3Cells } from '@/utils/h3';
import { getAddress } from '@/api/axios';
import { Tooltip } from '@/components/ui/Tooltip';
import { VWORLD_KEY, VWORLD_BASE_URL } from '@/api/constants';
import { css } from '@styled-system/css';
import { usePolygonTypeInfo } from '@/stores/usePolygonType';

const CENTER = { lat: 37.56302, lng: 126.98071 };

const VWORLD_TILE_URL = VWORLD_BASE_URL
  ? `${VWORLD_BASE_URL}/req/wmts/1.0.0/${VWORLD_KEY}/Base/{z}/{y}/{x}.png`
  : '';
const DEFAULT_ZOOM = 10;

interface VworldMapProps {
  mapRef: React.RefObject<maplibregl.Map | null>;
  overlayAllH3Data: H3HexagonData[];
}

// const MIN_H3_RESOLUTION = 6;
// const MAX_H3_RESOLUTION = 8;

// const ZOOM_TO_H3_RESOLUTION: Record<number, number> = {
//   0: MIN_H3_RESOLUTION,
//   1: MIN_H3_RESOLUTION,
//   2: MIN_H3_RESOLUTION,
//   3: MIN_H3_RESOLUTION,
//   4: MIN_H3_RESOLUTION,
//   5: MIN_H3_RESOLUTION,
//   6: MIN_H3_RESOLUTION,
//   7: MIN_H3_RESOLUTION,
//   8: MIN_H3_RESOLUTION,
//   9: 6,
//   10: 7,
//   11: 8,
//   12: MAX_H3_RESOLUTION,
//   13: MAX_H3_RESOLUTION,
//   14: MAX_H3_RESOLUTION,
//   15: MAX_H3_RESOLUTION,
//   16: MAX_H3_RESOLUTION,
//   17: MAX_H3_RESOLUTION,
//   18: MAX_H3_RESOLUTION,
//   19: MAX_H3_RESOLUTION,
//   20: MAX_H3_RESOLUTION,
//   21: MAX_H3_RESOLUTION,
//   22: MAX_H3_RESOLUTION,
// };

export const VworldMap = ({ overlayAllH3Data, mapRef }: VworldMapProps) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<MapboxOverlay | null>(null);
  const selectedLayerRef = useRef<H3HexagonLayer | null>(null);
  const overlayH3LayerRef = useRef<H3HexagonLayer<H3HexagonData> | null>(null);
  const [selectedHexagonInfo, setSelectedHexagonInfo] = useState<H3HoverInfo | null>(null);
  const [popupPixelPosition, setPopupPixelPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [, setLocationInfo] = useState<VworldAddressResponseBody | null>(null);

  const { selectedAreaInfo, setSelectedAreaInfo } = useAreaInfo();
  const { resolution } = useResolutionInfo();
  const { polygonType } = usePolygonTypeInfo();

  const numberOfH3Cells = useMemo(() => {
    return selectedAreaInfo?.numberOfCells ?? 0;
  }, [selectedAreaInfo]);

  const overlayH3Layer = useMemo(() => {
    return new H3HexagonLayer<H3HexagonData>({
      id: 'h3-layer-overlay-all',
      data: overlayAllH3Data,
      getHexagon: (d) => d.h3Index,
      pickable: true,
      filled: true,
      extruded: false, // true면 3D로 돌출됨
      lineWidthMinPixels: 1,
      getFillColor: [0, 0, 0, 1], // 클릭 피킹용 거의 투명한 fill (시각적으로는 filled: false와 동일)
      onClick: (info) => {
        const data = info?.object as H3HexagonData | undefined;
        const props = data?.feature?.properties as FeatureProperties | undefined;
        if (!data || !props) return;

        setSelectedHexagonInfo({
          h3Index: data.h3Index,
          korName: props?.SIG_KOR_NM ?? '',
          engName: props?.SIG_ENG_NM ?? '',
          position: { lng: info.coordinate?.[0] ?? 0, lat: info.coordinate?.[1] ?? 0 },
        });
      },
    });
  }, [overlayAllH3Data]);

  const handleMapMoveEnd = () => {
    const currentCenter = mapRef.current?.getCenter();
    console.log('현재 센터', currentCenter);
  };

  const updateOverlayLayers = (newLayers: H3HexagonLayer[]) => {
    overlayRef.current?.setProps({ layers: newLayers });
  };

  const handleSetLayer = async (
    feature: maplibregl.MapGeoJSONFeature,
    pointer: [number, number],
  ) => {
    mapRef.current!.getCanvas().style.cursor = 'pointer';

    const cells = getH3Cells(feature.geometry, resolution, true);
    const data = cells.map((h3Index) => buildH3HexagonData(h3Index, feature, 0));

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
    const baseOverlayLayer = overlayH3LayerRef.current ?? overlayH3Layer;
    updateOverlayLayers([baseOverlayLayer, hexagonLayer]);

    const centroid = getPolygonCentroid((feature.geometry as GeoJSON.Polygon).coordinates);
    setSelectedAreaInfo({
      id: feature.properties?.SIG_CD,
      center: [centroid.lng, centroid.lat],
      coordinates: pointer,
      code: feature.properties?.SIG_CD,
      korName: feature.properties?.SIG_KOR_NM,
      engName: feature.properties?.SIG_ENG_NM,
      numberOfCells: data.length,
    });

    if (centroid.lng && centroid.lat) {
      const response = await getAddress({ lng: centroid.lng, lat: centroid.lat });
      setLocationInfo(response);
    }
  };

  const handleClickMapArea = async (
    e: maplibregl.MapMouseEvent & {
      features?: maplibregl.MapGeoJSONFeature[];
    } & object,
  ) => {
    if (e.features && e.features.length > 0) {
      const feature = e.features[0];
      handleSetLayer(feature, [e.lngLat.lng, e.lngLat.lat]);
    }
  };

  // const handleZoomChange = () => {
  //   const zoom = Number(mapRef.current?.getZoom() ?? 0);
  //   const newResolution = ZOOM_TO_H3_RESOLUTION[Math.floor(zoom)];
  //   if (resolution === newResolution) return;
  //   setOverlayResolution(newResolution);
  // };

  useEffect(() => {
    if (!VWORLD_KEY || !mapRef.current) {
      return;
    }

    const overlay = new MapboxOverlay({ layers: [] });
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
    // mapRef.current?.on('zoom', handleZoomChange);
    mapRef.current?.addControl(overlay);

    return () => {
      mapRef.current?.off('moveend', handleMapMoveEnd);
      mapRef.current?.removeControl(overlay);
      overlay.finalize();
      overlayRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!selectedHexagonInfo || !mapRef.current) return;

    const info = selectedHexagonInfo;
    const updatePosition = () => {
      const map = mapRef.current;
      if (!map) return;
      const point = map.project([info.position.lng, info.position.lat]);
      const rect = map.getContainer().getBoundingClientRect();
      setPopupPixelPosition({
        x: rect.left + point.x,
        y: rect.top + point.y,
      });
    };

    updatePosition();
    mapRef.current.on('move', updatePosition);
    return () => {
      mapRef.current?.off('move', updatePosition);
    };
  }, [selectedHexagonInfo]);

  useEffect(() => {
    if (!mapRef.current) return;
    console.log('polygonType', polygonType);
    mapRef.current.off('click', 'geojson-fill', handleClickMapArea);

    if (polygonType === 'h3') {
      mapRef.current.on('click', 'geojson-fill', handleClickMapArea);
      // deck.gl은 제거된 layer 인스턴스를 다시 추가할 때 assertion failed 발생
      // 매번 새 layer 인스턴스를 생성하여 재사용 문제 방지
      const layer = new H3HexagonLayer<H3HexagonData>({
        id: 'h3-layer-overlay-all',
        data: overlayAllH3Data,
        getHexagon: (d) => d.h3Index,
        pickable: true,
        filled: true,
        extruded: false,
        lineWidthMinPixels: 1,
        getFillColor: [0, 0, 0, 1],
        onClick: (info) => {
          const data = info?.object as H3HexagonData | undefined;
          const props = data?.feature?.properties as FeatureProperties | undefined;
          if (!data || !props) return;

          setSelectedHexagonInfo({
            h3Index: data.h3Index,
            korName: props?.SIG_KOR_NM ?? '',
            engName: props?.SIG_ENG_NM ?? '',
            position: { lng: info.coordinate?.[0] ?? 0, lat: info.coordinate?.[1] ?? 0 },
          });
        },
      });
      overlayH3LayerRef.current = layer;
      updateOverlayLayers([layer]);
    } else if (polygonType === 's2') {
      overlayH3LayerRef.current = null;
      updateOverlayLayers([]);
    } else if (polygonType === 'none') {
      overlayH3LayerRef.current = null;
      updateOverlayLayers([]);
    }
  }, [polygonType, overlayAllH3Data]);

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

  return (
    <section style={{ flex: 1, minWidth: 0 }}>
      <div ref={mapContainerRef} style={{ width: '100%', height: '100%' }} />
      <div
        className={css({
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '200px',
          backgroundColor: 'token(colors.white)',
          opacity: 0.8,
          borderRadius: 'md',
          boxShadow: 'lg',
          zIndex: 100,
          p: 4,
        })}
      >
        <div
          className={css({
            display: 'flex',
            flexDirection: 'column',
            gap: '4',
          })}
        >
          <div
            className={css({
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            })}
          >
            {!numberOfH3Cells && <div>선택 영역이 없습니다.</div>}
            {numberOfH3Cells && (
              <>
                <h2>
                  <b>선택 h3 셀 개수:</b>
                </h2>
                <span>{numberOfH3Cells}</span>
              </>
            )}
          </div>
        </div>
      </div>
      {selectedHexagonInfo &&
        popupPixelPosition &&
        createPortal(
          <Tooltip
            selectedHexagonInfo={selectedHexagonInfo}
            popupPixelPosition={popupPixelPosition}
            onClickClose={() => setSelectedHexagonInfo(null)}
          />,
          document.getElementById('modal-root')!,
        )}
    </section>
  );
};
