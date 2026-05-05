'use client';

import { useCallback, useEffect, useId, useRef } from 'react';

import { DatePickerCalendar } from '@gocheok/components/forms/datepicker/DatePickerCalendar';
import {
  DatePickerProvider,
  useDatePickerContext,
} from '@gocheok/components/forms/datepicker/DatePickerContext';
import { DatePickerDialog } from '@gocheok/components/forms/datepicker/DatePickerDialog';
import { DatePickerTrigger } from '@gocheok/components/forms/datepicker/DatePickerTrigger';
import type { DatePickerProps, DatePickerValue } from '@gocheok/components/forms/datepicker/types';
import {
  clampDate,
  isSameDay,
  startOfMonth,
} from '@gocheok/components/forms/datepicker/utils/date';

type DatePickerInnerProps = Required<Pick<DatePickerProps, 'format' | 'locale' | 'weekStartsOn'>> &
  Omit<DatePickerProps, 'format' | 'locale' | 'weekStartsOn' | 'defaultValue'> & {
    isControlled: boolean;
  };

const DatePickerInner = ({
  value,
  onChange,
  format,
  minDate,
  maxDate,
  isDateDisabled,
  weekStartsOn,
  locale,
  placeholder,
  id,
  name,
  disabled,
  required,
  className,
  ref,
  previousMonthIcon,
  nextMonthIcon,
  isControlled,
}: DatePickerInnerProps) => {
  const { dispatch } = useDatePickerContext();
  const dialogId = useId();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const isDateAllowed = useCallback(
    (date: Date) => {
      const boundedDate = clampDate(date, minDate, maxDate);

      if (!isSameDay(date, boundedDate)) {
        return false;
      }

      return isDateDisabled?.(date) !== true;
    },
    [isDateDisabled, maxDate, minDate],
  );

  const commitValue = useCallback(
    (next: DatePickerValue) => {
      if (next != null && !isDateAllowed(next)) return;

      if (!isControlled) {
        dispatch({ type: 'SET_VALUE', date: next });
      }

      if (next != null) {
        dispatch({ type: 'SET_VISIBLE_MONTH', date: startOfMonth(next) });
        dispatch({ type: 'SET_FOCUSED_DATE', date: next });
      }

      onChange?.(next);
    },
    [dispatch, isControlled, isDateAllowed, onChange],
  );

  useEffect(() => {
    if (!isControlled) return;

    dispatch({ type: 'SET_VALUE', date: value ?? null });

    if (value != null) {
      dispatch({ type: 'SET_VISIBLE_MONTH', date: startOfMonth(value) });
      dispatch({ type: 'SET_FOCUSED_DATE', date: value });
    }
  }, [dispatch, isControlled, value]);

  return (
    <>
      <DatePickerTrigger
        ref={ref}
        className={className}
        dialogId={dialogId}
        disabled={disabled}
        format={format}
        id={id}
        inputRef={inputRef}
        isDateAllowed={isDateAllowed}
        locale={locale}
        name={name}
        placeholder={placeholder}
        required={required}
        onCommit={commitValue}
      />
      <DatePickerDialog id={dialogId} inputRef={inputRef} locale={locale}>
        <DatePickerCalendar
          inputRef={inputRef}
          isDateAllowed={isDateAllowed}
          locale={locale}
          maxDate={maxDate}
          minDate={minDate}
          nextMonthIcon={nextMonthIcon}
          previousMonthIcon={previousMonthIcon}
          weekStartsOn={weekStartsOn}
          onCommit={commitValue}
        />
      </DatePickerDialog>
    </>
  );
};

export const DatePicker = ({
  value,
  defaultValue,
  format = 'YYYY-MM-DD',
  weekStartsOn = 0,
  locale = 'ko',
  ...props
}: DatePickerProps) => {
  const hasWarnedRef = useRef(false);
  const isControlled = value !== undefined;
  const initialValue = isControlled ? value : defaultValue;

  useEffect(() => {
    if (!isControlled || defaultValue === undefined || hasWarnedRef.current) return;

    console.warn(
      'DatePicker는 value와 defaultValue를 동시에 받았습니다. 제어 모드(value)를 우선합니다.',
    );
    hasWarnedRef.current = true;
  }, [defaultValue, isControlled]);

  return (
    <DatePickerProvider
      defaultValue={initialValue ?? null}
      format={format}
      maxDate={props.maxDate}
      minDate={props.minDate}
      weekStartsOn={weekStartsOn}
    >
      <DatePickerInner
        {...props}
        value={value}
        format={format}
        isControlled={isControlled}
        locale={locale}
        weekStartsOn={weekStartsOn}
      />
    </DatePickerProvider>
  );
};
