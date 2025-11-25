/* eslint-disable @typescript-eslint/no-unused-vars */
// 최소한으로 필요한 카카오 지도 타입 선언
// 필요 시 점진적으로 확장하세요.

declare namespace kakao {
  namespace maps {
    class LatLng {
      constructor(lat: number, lng: number);
      getLat(): number;
      getLng(): number;
    }

    interface MapOptions {
      center: LatLng;
      level?: number;
    }

    // 컨트롤 포지션 정의
    enum ControlPosition {
      TOPLEFT,
      TOP,
      TOPRIGHT,
      LEFT,
      RIGHT,
      BOTTOMLEFT,
      BOTTOM,
      BOTTOMRIGHT,
    }

    // 컨트롤 기본 타입
    type Control = object;

    // 지도 타입 컨트롤
    class MapTypeControl implements Control {
      constructor();
    }

    // 줌 컨트롤
    class ZoomControl implements Control {
      constructor();
    }

    class Map {
      constructor(container: HTMLElement, options: MapOptions);
      setCenter(latlng: LatLng): void;
      setLevel(level: number): void;
      addControl(control: Control, position: ControlPosition): void;
      removeControl(control: Control): void;
    }

    function load(callback: () => void): void;
  }
}

declare global {
  interface Window {
    kakao: typeof kakao | undefined;
  }
}

export {};
