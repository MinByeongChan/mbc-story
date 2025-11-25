import { css } from '@styled-system/css';
import { useEffect, useRef } from 'react';

export const KakaoMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  const initKakaoMap = () => {
    if (!mapRef.current) return;
    if (!window.kakao?.maps?.Map) return;

    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    const map = new window.kakao.maps.Map(mapRef.current, options);

    const mapTypeControl = new window.kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, window.kakao.maps.ControlPosition.TOPRIGHT);

    const zoomControl = new window.kakao.maps.ZoomControl();
    map.addControl(zoomControl, window.kakao.maps.ControlPosition.BOTTOMRIGHT);
  };

  useEffect(() => {
    initKakaoMap();
  }, []);

  return (
    <div
      ref={mapRef}
      id="map"
      className={css({
        width: '100%',
        height: '400px',
      })}
    ></div>
  );
};
