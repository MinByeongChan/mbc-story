import { create } from 'zustand';

interface ResolutionInfoState {
  resolution: number;
  overlayResolution: number;
  setResolution: (resolution: number) => void;
  setOverlayResolution: (overlayResolution: number) => void;
}

const DEFAULT_H3_RESOLUTION = 7;

export const useResolutionInfo = create<ResolutionInfoState>((set) => ({
  resolution: DEFAULT_H3_RESOLUTION,
  overlayResolution: DEFAULT_H3_RESOLUTION,
  setResolution: (resolution: number) => set({ resolution }),
  setOverlayResolution: (overlayResolution: number) => set({ overlayResolution }),
}));
