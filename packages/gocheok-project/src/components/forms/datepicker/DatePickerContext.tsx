/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useReducer } from 'react';

import type { PopupPixelPosition } from '@gocheok/components/forms/select/types';
import type { DatePickerValue } from '@gocheok/components/forms/datepicker/types';
import { clampDate, startOfMonth } from '@gocheok/components/forms/datepicker/utils/date';

export type DatePickerState = {
  value: DatePickerValue;
  visibleMonth: Date;
  focusedDate: Date;
  dialogPosition: PopupPixelPosition | null;
  isOpen: boolean;
};

export type DatePickerAction =
  | { type: 'SET_VALUE'; date: DatePickerValue }
  | { type: 'SET_VISIBLE_MONTH'; date: Date }
  | { type: 'SET_FOCUSED_DATE'; date: Date }
  | { type: 'SET_DIALOG_POSITION'; position: PopupPixelPosition | null }
  | { type: 'SET_OPEN'; open: boolean };

type CreateInitialStateParams = {
  defaultValue?: DatePickerValue;
  format: string;
  weekStartsOn: 0 | 1;
  minDate?: Date;
  maxDate?: Date;
};

export const createInitialState = ({
  defaultValue = null,
  minDate,
  maxDate,
}: CreateInitialStateParams): DatePickerState => {
  const today = clampDate(new Date(), minDate, maxDate);
  const value = defaultValue == null ? null : clampDate(defaultValue, minDate, maxDate);
  const focusedDate = value ?? today;

  return {
    value,
    visibleMonth: startOfMonth(focusedDate),
    focusedDate,
    dialogPosition: null,
    isOpen: false,
  };
};

const datePickerReducer = (state: DatePickerState, action: DatePickerAction): DatePickerState => {
  switch (action.type) {
    case 'SET_VALUE':
      return { ...state, value: action.date };
    case 'SET_VISIBLE_MONTH':
      return { ...state, visibleMonth: startOfMonth(action.date) };
    case 'SET_FOCUSED_DATE':
      return { ...state, focusedDate: action.date };
    case 'SET_DIALOG_POSITION':
      return { ...state, dialogPosition: action.position };
    case 'SET_OPEN':
      return { ...state, isOpen: action.open };
    default:
      return state;
  }
};

export type DatePickerContextValue = {
  state: DatePickerState;
  dispatch: React.Dispatch<DatePickerAction>;
};

export type DatePickerProviderProps = React.PropsWithChildren<CreateInitialStateParams>;

const DatePickerContext = createContext<DatePickerContextValue | null>(null);

export const DatePickerProvider = ({ children, ...initialParams }: DatePickerProviderProps) => {
  const [state, dispatch] = useReducer(datePickerReducer, initialParams, createInitialState);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <DatePickerContext.Provider value={contextValue}>{children}</DatePickerContext.Provider>;
};

export const useDatePickerContext = (): DatePickerContextValue => {
  const ctx = useContext(DatePickerContext);

  if (ctx == null) {
    throw new Error('useDatePickerContext는 DatePickerProvider 트리 안에서만 사용할 수 있습니다.');
  }

  return ctx;
};
