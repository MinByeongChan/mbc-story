'use client';

import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import React, { useEffect, useMemo, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { useDatePickerContext } from '@gocheok/components/forms/datepicker/DatePickerContext';
import type { DatePickerValue } from '@gocheok/components/forms/datepicker/types';
import {
  addDays,
  addMonths,
  buildMonthMatrix,
  clampDate,
  formatDate,
  isSameDay,
  isSameMonth,
  startOfMonth,
} from '@gocheok/components/forms/datepicker/utils/date';

type DatePickerCalendarProps = {
  locale: string;
  minDate?: Date;
  maxDate?: Date;
  weekStartsOn: 0 | 1;
  isDateAllowed: (date: Date) => boolean;
  onCommit: (next: DatePickerValue) => void;
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  previousMonthIcon?: React.ReactNode;
  nextMonthIcon?: React.ReactNode;
};

const getDateKey = (date: Date) => formatDate(date, 'YYYY-MM-DD');

const defaultPreviousMonthIcon = (
  <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 24 24">
    <path
      d="M15 18 9 12l6-6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

const defaultNextMonthIcon = (
  <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 24 24">
    <path
      d="m9 6 6 6-6 6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const DatePickerCalendar = ({
  locale,
  minDate,
  maxDate,
  weekStartsOn,
  isDateAllowed,
  onCommit,
  inputRef,
  previousMonthIcon = defaultPreviousMonthIcon,
  nextMonthIcon = defaultNextMonthIcon,
}: DatePickerCalendarProps) => {
  const { state, dispatch } = useDatePickerContext();
  const focusedButtonRef = useRef<HTMLButtonElement | null>(null);
  const today = useMemo(() => new Date(), []);
  const monthLabelFormat = locale === 'ko' ? 'YYYY년 M월' : 'MMMM YYYY';
  const monthLabel = formatDate(state.visibleMonth, monthLabelFormat, locale);
  const monthMatrix = useMemo(
    () => buildMonthMatrix({ visibleMonth: state.visibleMonth, weekStartsOn }),
    [state.visibleMonth, weekStartsOn],
  );
  const weekdayLabels = useMemo(() => {
    return Array.from({ length: 7 }, (_item, index) => {
      const day = addDays(new Date(2026, 2, 1), weekStartsOn + index);

      return dayjs(day).locale(locale).format('dd');
    });
  }, [locale, weekStartsOn]);

  const focusDate = (nextDate: Date) => {
    const clamped = clampDate(nextDate, minDate, maxDate);

    dispatch({ type: 'SET_FOCUSED_DATE', date: clamped });
    dispatch({ type: 'SET_VISIBLE_MONTH', date: startOfMonth(clamped) });
  };

  const commitDate = (date: Date) => {
    if (!isDateAllowed(date)) return;

    onCommit(date);
    dispatch({ type: 'SET_FOCUSED_DATE', date });
    dispatch({ type: 'SET_VISIBLE_MONTH', date });
    dispatch({ type: 'SET_OPEN', open: false });
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (!state.isOpen) return;

    focusedButtonRef.current?.focus();
  }, [state.focusedDate, state.isOpen]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const current = state.focusedDate;
    let nextDate: Date;

    switch (event.key) {
      case 'ArrowLeft':
        nextDate = addDays(current, -1);
        break;
      case 'ArrowRight':
        nextDate = addDays(current, 1);
        break;
      case 'ArrowUp':
        nextDate = addDays(current, -7);
        break;
      case 'ArrowDown':
        nextDate = addDays(current, 7);
        break;
      case 'PageUp':
        nextDate = addMonths(current, event.shiftKey ? -12 : -1);
        break;
      case 'PageDown':
        nextDate = addMonths(current, event.shiftKey ? 12 : 1);
        break;
      case 'Home': {
        const dayOffset = (dayjs(current).day() - weekStartsOn + 7) % 7;
        nextDate = addDays(current, -dayOffset);
        break;
      }
      case 'End': {
        const dayOffset = (dayjs(current).day() - weekStartsOn + 7) % 7;
        nextDate = addDays(current, 6 - dayOffset);
        break;
      }
      case 'Enter':
        event.preventDefault();
        commitDate(current);
        return;
      default:
        return;
    }

    event.preventDefault();

    focusDate(nextDate);
  };

  return (
    <div className="w-72 p-3 sm:w-80" onKeyDown={handleKeyDown}>
      <div className="mb-2 flex h-10 items-center justify-between gap-2">
        <button
          type="button"
          aria-label="이전 달"
          className="inline-flex size-8 items-center justify-center rounded-md text-(--color-foreground) transition-colors duration-200 ease-in-out hover:bg-(--color-grey-100)"
          onClick={() => focusDate(addMonths(state.visibleMonth, -1))}
        >
          {previousMonthIcon}
        </button>
        <div aria-live="polite" className="font-medium text-(--color-foreground)">
          {monthLabel}
        </div>
        <button
          type="button"
          aria-label="다음 달"
          className="inline-flex size-8 items-center justify-center rounded-md text-(--color-foreground) transition-colors duration-200 ease-in-out hover:bg-(--color-grey-100)"
          onClick={() => focusDate(addMonths(state.visibleMonth, 1))}
        >
          {nextMonthIcon}
        </button>
      </div>
      <div role="grid" aria-label={monthLabel} className="grid grid-cols-7 gap-1">
        {weekdayLabels.map((label) => (
          <div
            key={label}
            role="columnheader"
            className="flex h-8 items-center justify-center text-xs font-medium text-(--color-grey-500)"
          >
            {label}
          </div>
        ))}
        {monthMatrix.flat().map((date) => {
          const disabled = !isDateAllowed(date);
          const isFocused = isSameDay(date, state.focusedDate);
          const isSelected = state.value != null && isSameDay(date, state.value);
          const isToday = isSameDay(date, today);
          const isOutsideMonth = !isSameMonth(date, state.visibleMonth);

          return (
            <button
              key={getDateKey(date)}
              ref={isFocused ? focusedButtonRef : undefined}
              type="button"
              role="gridcell"
              aria-current={isToday ? 'date' : undefined}
              aria-disabled={disabled}
              aria-selected={isSelected}
              tabIndex={isFocused ? 0 : -1}
              className={twMerge(
                'flex size-9 items-center justify-center rounded-md text-sm text-(--color-foreground) transition-colors duration-200 ease-in-out sm:size-10',
                'focus-visible:ring-2 focus-visible:ring-(--color-primary) focus-visible:outline-none',
                !disabled && 'hover:bg-(--color-grey-100)',
                isToday && 'ring-1 ring-(--color-primary)',
                isSelected &&
                  'bg-(--color-primary) text-(--color-neutral-100) hover:bg-(--color-primary)',
                isOutsideMonth && !isSelected && 'text-(--color-grey-400)',
                disabled && 'cursor-not-allowed text-(--color-grey-300)',
              )}
              onClick={() => commitDate(date)}
            >
              {formatDate(date, 'D', locale)}
            </button>
          );
        })}
      </div>
    </div>
  );
};
