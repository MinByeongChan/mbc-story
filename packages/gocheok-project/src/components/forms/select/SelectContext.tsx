/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useReducer } from 'react';

import type { PopupPixelPosition } from '@gocheok/components/forms/select/types';

export type SelectState = {
  value: string;
  dialogPosition: PopupPixelPosition | null;
  isOpen: boolean;
};

export type SelectAction =
  | { type: 'SET_VALUE'; value: string }
  | { type: 'SET_DIALOG_POSITION'; position: PopupPixelPosition | null }
  | { type: 'SET_OPEN'; open: boolean };

function createInitialState(defaultValue: string): SelectState {
  return {
    value: defaultValue,
    dialogPosition: null,
    isOpen: false,
  };
}

const selectReducer = (state: SelectState, action: SelectAction): SelectState => {
  switch (action.type) {
    case 'SET_VALUE':
      return { ...state, value: action.value };
    case 'SET_DIALOG_POSITION':
      return { ...state, dialogPosition: action.position };
    case 'SET_OPEN':
      return { ...state, isOpen: action.open };
    default:
      return state;
  }
};

export type SelectContextValue = {
  state: SelectState;
  dispatch: React.Dispatch<SelectAction>;
};
export type SelectProviderProps = React.PropsWithChildren<{
  defaultValue?: string;
}>;

const SelectContext = createContext<SelectContextValue | null>(null);

export const SelectProvider = ({ children, defaultValue = '' }: SelectProviderProps) => {
  const [state, dispatch] = useReducer(selectReducer, defaultValue, (dv) => createInitialState(dv));
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <SelectContext.Provider value={contextValue}>{children}</SelectContext.Provider>;
};

export const useSelectContext = (): SelectContextValue => {
  const ctx = useContext(SelectContext);
  if (ctx == null) {
    throw new Error('useSelectContext는 SelectProvider 트리 안에서만 사용할 수 있습니다.');
  }
  return ctx;
};
