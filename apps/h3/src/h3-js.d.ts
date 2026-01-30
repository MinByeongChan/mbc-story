declare module 'h3-js' {
  export function latLngToCell(lat: number, lng: number, resolution: number): string;
  export function cellToBoundary(h3Index: string, geoJson?: boolean): Array<[number, number]>;
}
