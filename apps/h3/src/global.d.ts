/**
 * Global 타입 선언
 */

declare namespace naver {
  namespace maps {
    class LatLng {
      constructor(lat: number, lng: number);
    }

    class Map {
      constructor(container: string | HTMLElement, options: { center: LatLng; zoom: number });
      getSize(): Size;
    }

    class Polygon {
      constructor(options: {
        map?: Map | null;
        paths: LatLng[] | LatLng[][];
        fillColor?: string;
        fillOpacity?: number;
        strokeColor?: string;
        strokeOpacity?: number;
        strokeWeight?: number;
      });
      setMap(map: Map | null): void;
    }

    abstract class OverlayView {
      constructor();
      setMap(map: Map | null): void;
      getMap(): Map | null;
      getPanes(): MapPanes;
      getProjection(): MapSystemProjection;
      onAdd?(): void;
      draw?(): void;
      onRemove?(): void;
    }

    interface MapPanes {
      overlayLayer: HTMLElement;
    }

    interface MapSystemProjection {
      fromCoordToOffset(coord: LatLng): Point;
    }

    interface Point {
      x: number;
      y: number;
    }

    interface Size {
      width: number;
      height: number;
    }
  }
}

declare global {
  interface Window {
    naver?: {
      maps?: typeof naver.maps;
    };
  }
}
