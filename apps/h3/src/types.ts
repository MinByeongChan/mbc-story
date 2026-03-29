export interface H3HexagonData {
  h3Index: string;
  color: number[];
  lineColor: number[];
  feature: GeoJSON.Feature;
}

export interface H3HoverInfo {
  h3Index: string;
  korName: string;
  engName: string;
  position: { lng: number; lat: number };
}

export interface VworldAddressService {
  name: string;
  version: string;
  operation: string;
  time: string;
}

export interface VworldAddressInputPoint {
  x: string;
  y: string;
}

export interface VworldAddressInput {
  point: VworldAddressInputPoint;
  crs: string;
  type: string;
}

export interface VworldAddressStructure {
  level0: string;
  level1: string;
  level2: string;
  level3: string;
  level4L: string;
  level4LC: string;
  level4A: string;
  level4AC: string;
  level5: string;
  detail: string;
}

export interface VworldAddressResultItem {
  zipcode: string;
  type: string;
  text: string;
  structure: VworldAddressStructure;
}

export interface VworldAddressResponseBody {
  service: VworldAddressService;
  status: string;
  input: VworldAddressInput;
  result: VworldAddressResultItem[];
}

export interface VworldAddressApiResponse {
  response: VworldAddressResponseBody;
}

export interface VworldAddressApiRequest {
  lng: number;
  lat: number;
}

export interface PopupPixelPosition {
  x: number;
  y: number;
}

export interface FeatureProperties {
  SIG_KOR_NM?: string;
  SIG_ENG_NM?: string;
  SIG_CD?: string;
}
