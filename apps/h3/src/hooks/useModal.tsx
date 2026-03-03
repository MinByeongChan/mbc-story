import { create } from 'zustand';

interface ModalItem {
  type: string;
  isOpen: boolean;
  children: React.ReactNode;
}

interface FuncOpenModalParameter {
  type: string;
  children: React.ReactNode;
}

interface ModalState {
  modalState: ModalItem[];
  openModal: (params: FuncOpenModalParameter) => void;
  closeModal: (type: string) => void;
  onChangeModal: (type: string, isOpen: boolean) => void;
}

export const useModal = create<ModalState>((set) => ({
  modalState: [],
  openModal: ({ type, children }: FuncOpenModalParameter) =>
    set((state) => {
      const newModalState = [...state.modalState];
      if (newModalState.find((item) => item.type === type)) return { ...state };

      newModalState.push({ type, isOpen: true, children });
      return { ...state, modalState: newModalState };
    }),
  closeModal: (type: string) => {
    set((state) => {
      const newModalState = [...state.modalState];
      return { ...state, modalState: newModalState.filter((item) => item.type !== type) };
    });
  },
  onChangeModal: (type: string, isOpen: boolean) => {
    set((state) => {
      const newModalState = [...state.modalState];
      const result = newModalState.filter((data) => {
        if (data.type !== type) return true;
        return data.type === type && isOpen;
      });
      return { ...state, modalState: result };
    });
  },
}));
