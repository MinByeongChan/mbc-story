import { css } from '@styled-system/css';
import { useEffect, useRef } from 'react';
import { useGeoCode } from './model/useGeoCode';

interface KakaoMapProps {
  address: string;
}

const MAP_LEVEL = 3;

export const KakaoMap = ({ address }: KakaoMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const { data: geoCode } = useGeoCode({ address });

  const initKakaoMap = () => {
    if (!mapRef.current) return;
    if (!window.kakao?.maps?.Map) return;

    const lat = Number(geoCode?.y.split('.')[0] + '.' + geoCode?.y.split('.')[1].slice(0, 6));
    const lng = Number(geoCode?.x.split('.')[0] + '.' + geoCode?.x.split('.')[1].slice(0, 6));

    const options = {
      center: new window.kakao.maps.LatLng(lat, lng),
      level: MAP_LEVEL,
    };

    const map = new window.kakao.maps.Map(mapRef.current, options);

    const mapTypeControl = new window.kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, window.kakao.maps.ControlPosition.TOPRIGHT);

    const zoomControl = new window.kakao.maps.ZoomControl();
    map.addControl(zoomControl, window.kakao.maps.ControlPosition.BOTTOMRIGHT);

    const marker = new window.kakao.maps.Marker({ position: map.getCenter() });
    marker.setMap(map);
  };

  useEffect(() => {
    if (geoCode) {
      initKakaoMap();
    }
  }, [geoCode]);

  return (
    <div
      ref={mapRef}
      id="map"
      className={css({
        mt: '10',
        width: '100%',
        height: '400px',
        backgroundColor: '#f0f0f0',
        rounded: 'lg',
      })}
    ></div>
  );
};
