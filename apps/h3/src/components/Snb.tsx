import { useAreaInfo } from '@/stores/areaInfo';
import { getPolygonCentroid } from '@/utils/utils';
import { useMemo } from 'react';
import maplibregl from 'maplibre-gl';
import { H3HexagonData } from '@/types';
import { useResolutionInfo } from '@/stores/resolutionInfo';

interface SnbProps {
  features: GeoJSON.Feature[];
  overlayAllH3Data: H3HexagonData[];
  mapRef: React.RefObject<maplibregl.Map | null>;
}

const overlayResolutionOptions = [6, 7];
const resolutionOptions = [7, 8, 9, 10];

export const Snb = ({ features, overlayAllH3Data, mapRef }: SnbProps) => {
  const { selectedAreaInfo } = useAreaInfo();

  const { resolution, overlayResolution, setResolution, setOverlayResolution } =
    useResolutionInfo();

  const getSigOptions = useMemo(() => {
    return features.map((feature) => {
      return {
        id: feature.properties?.SIG_CD,
        name: feature.properties?.SIG_ENG_NM,
      };
    });
  }, [features]);

  const numberOfCells = useMemo(() => {
    return overlayAllH3Data.length;
  }, [overlayAllH3Data]);

  const handleChangeOverlayResolution = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOverlayResolution(Number(e.target.value));
  };

  const handleChangeSelectedResolution = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setResolution(Number(e.target.value));
  };

  const handleChangeSigSelectBox = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSigCd = e.target.value;
    const targetFeature = features.find((feature) => feature.properties?.SIG_CD === selectedSigCd);

    if (targetFeature) {
      const polygon = targetFeature.geometry as GeoJSON.Polygon;
      const centroid = getPolygonCentroid(polygon.coordinates);
      mapRef.current?.flyTo({ center: [centroid.lng, centroid.lat], zoom: 10 });
    }
  };

  return (
    <aside
      style={{
        width: '250px',
        height: '100%',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}
    >
      <div>
        <h4>Overlay H3 셀 Resolution</h4>
        <select value={overlayResolution} onChange={handleChangeOverlayResolution}>
          {overlayResolutionOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h4>시군구 영역 H3 해상도</h4>
        <select value={resolution} onChange={handleChangeSelectedResolution}>
          {resolutionOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h4>선택 영역</h4>
        <div>
          {!selectedAreaInfo && <div>선택 영역이 없습니다.</div>}
          {selectedAreaInfo && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div>
                <div>지역명</div>
                <div>{selectedAreaInfo.engName}</div>
              </div>
              <div>
                <div>중심좌표</div>
                <div>
                  {selectedAreaInfo.center[0].toFixed(5)} , {selectedAreaInfo.center[1].toFixed(5)}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <h4>지역 선택</h4>
      <select onChange={handleChangeSigSelectBox}>
        <option value="">지역 선택</option>
        {getSigOptions.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name || option.id}
          </option>
        ))}
      </select>

      <div>
        <h4>H3 셀 개수</h4>
        <p>{numberOfCells}</p>
      </div>
    </aside>
  );
};
