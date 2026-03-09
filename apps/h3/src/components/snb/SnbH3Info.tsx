import { useAreaInfo } from '@/stores/areaInfo';
import { useResolutionInfo } from '@/stores/resolutionInfo';
import React, { useState } from 'react';
import { latLngToCell } from 'h3-js';
import { getAddressToGeocode } from '@/api/getAddressToGeocode';
import { css } from '@styled-system/css';
import { Button } from '@/components/ui/button/Button';

const overlayResolutionOptions = [6, 7];
const resolutionOptions = [7, 8, 9, 10];

const liStyles = css({
  listStyle: 'none',
  borderBottom: '1px solid token(colors.grey.300)',
  padding: '8px 0',
});

const snbStyles = css({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '4',
});

interface SnbH3InfoProps {
  mapRef: React.RefObject<maplibregl.Map | null>;
}

export const SnbH3Info = ({ mapRef }: SnbH3InfoProps) => {
  const { selectedAreaInfo } = useAreaInfo();

  const { resolution, overlayResolution, setResolution, setOverlayResolution } =
    useResolutionInfo();
  const [address, setAddress] = useState('');

  const handleChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleChangeOverlayResolution = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOverlayResolution(Number(e.target.value));
  };

  const handleChangeSelectedResolution = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setResolution(Number(e.target.value));
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

  const handleClickSearchAddress = async () => {
    if (!address) return;
    try {
      const response = await getAddressToGeocode(address);
      if (response.data.response.status === 'OK') {
        const point = response.data.response.result.point;
        mapRef.current?.flyTo({ center: [point.x, point.y], zoom: 11 });

        // openModal({
        //   type: 'search-address',
        //   children: <SearchAddressModal />,
        // });
      } else {
        throw new Error(response.data.response.status);
      }
    } catch (error) {
      console.error('주소 검색 실패: ' + error);
    }
  };

  return (
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
          <strong>주소 검색</strong>
        </h4>
        <input
          type="text"
          placeholder="도로명 주소를 입력해주세요."
          value={address}
          onChange={handleChangeAddress}
        />
        <Button css={{ mt: 4 }} onClick={handleClickSearchAddress}>
          검색
        </Button>
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
  );
};
