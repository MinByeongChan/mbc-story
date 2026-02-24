import { css } from '@styled-system/css';

import { useAreaInfo } from '@/stores/areaInfo';
import { getPolygonCentroid } from '@/utils/utils';
import { useMemo } from 'react';
import maplibregl from 'maplibre-gl';
import { useResolutionInfo } from '@/stores/resolutionInfo';
import { latLngToCell } from 'h3-js';

interface SnbProps {
  features: GeoJSON.Feature[];
  mapRef: React.RefObject<maplibregl.Map | null>;
}

const overlayResolutionOptions = [6, 7];
const resolutionOptions = [7, 8, 9, 10];

const snbStyles = css({
  position: 'relative',
  backgroundColor: 'white',
  width: '300px',
  height: '100%',
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '4',
  zIndex: 101,
});

const liStyles = css({
  listStyle: 'none',
  borderBottom: '1px solid #e0e0e0',
  padding: '8px 0',
});

export const Snb = ({ features, mapRef }: SnbProps) => {
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
    return selectedAreaInfo?.numberOfCells ?? 0;
  }, [selectedAreaInfo]);

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

  const handleClickMoveAndHighlight = () => {
    if (!selectedAreaInfo) return;
    mapRef.current?.flyTo({ center: selectedAreaInfo.coordinates, zoom: 12 });
  };

  const handleClickConvertToH3 = () => {
    if (!selectedAreaInfo) return;
    const h3Index = latLngToCell(
      selectedAreaInfo.center[1],
      selectedAreaInfo.center[0],
      resolution,
    );
    alert('변환된 h3Index: ' + h3Index);
  };

  return (
    <aside>
      <ul className={snbStyles}>
        <li className={liStyles}>
          <h4>
            <strong>Resolution</strong>
          </h4>
          <div>
            <h4>Overlay H3 셀</h4>
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
        </li>

        <li className={liStyles}>
          <h4>
            <strong>선택 영역</strong>
          </h4>
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
                    {selectedAreaInfo.center[0].toFixed(5)} ,{' '}
                    {selectedAreaInfo.center[1].toFixed(5)}
                  </div>
                </div>
              </div>
            )}

            <div>
              <span>H3 셀 개수 : </span>
              <strong>{numberOfCells}</strong>
            </div>
          </div>
        </li>

        <li className={liStyles}>
          <h4>
            <strong>지역 선택</strong>
          </h4>
          <select onChange={handleChangeSigSelectBox}>
            <option value="">지역 선택</option>
            {getSigOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name || option.id}
              </option>
            ))}
          </select>
        </li>

        <li className={liStyles}>
          <h4>
            <strong>H3 유틸리티</strong>
          </h4>
          <div>
            <div>
              <input type="text" placeholder="H3 인덱스 입력" />
              <button onClick={handleClickMoveAndHighlight}>이동 & 하이라이트</button>
            </div>

            <div>
              <input type="text" placeholder="Lat 입력" />
              <input type="text" placeholder="Lng 입력" />
              <button onClick={handleClickConvertToH3}>좌표 → H3 변환</button>
            </div>
          </div>
        </li>
      </ul>
    </aside>
  );
};
