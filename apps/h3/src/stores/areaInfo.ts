import { create } from 'zustand';

interface SelectedAreaInfo {
  id: string;
  center: [number, number];
  code: string;
  korName: string;
  engName: string;
  numberOfCells: number;
}
interface AreaInfoState {
  selectedAreaInfo: SelectedAreaInfo | null;
  setSelectedAreaInfo: (selectedAreaInfo: SelectedAreaInfo) => void;
}

export const useAreaInfo = create<AreaInfoState>((set) => ({
  selectedAreaInfo: null,
  setSelectedAreaInfo: (selectedAreaInfo: SelectedAreaInfo) => set({ selectedAreaInfo }),
}));
