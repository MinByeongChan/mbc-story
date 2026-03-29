import { create } from 'zustand';

export type PolygonType = 'h3' | 's2' | 'none';

interface PolygonTypeInfoState {
  polygonType: PolygonType;
  setPolygonType: (polygonType: PolygonType) => void;
}

export const usePolygonTypeInfo = create<PolygonTypeInfoState>((set) => ({
  polygonType: 'h3',
  setPolygonType: (polygonType: PolygonType) => set({ polygonType }),
}));
