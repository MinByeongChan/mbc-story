'use client';

import React, { useLayoutEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import { useDatePickerContext } from '@gocheok/components/forms/datepicker/DatePickerContext';
import type { DatePickerValue } from '@gocheok/components/forms/datepicker/types';
import {
  formatDate,
  parseStrict,
  startOfMonth,
} from '@gocheok/components/forms/datepicker/utils/date';

type DatePickerTriggerProps = {
  dialogId: string;
  format: string;
  locale: string;
  placeholder?: string;
  id?: string;
  name?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  ref?: React.Ref<HTMLInputElement>;
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  isDateAllowed: (date: Date) => boolean;
  onCommit: (next: DatePickerValue) => void;
};

export const DatePickerTrigger = ({
  dialogId,
  format,
  locale,
  placeholder,
  id,
  name,
  disabled,
  required,
  className,
  ref,
  inputRef,
  isDateAllowed,
  onCommit,
}: DatePickerTriggerProps) => {
  const { state, dispatch } = useDatePickerContext();
  const [inputText, setInputText] = useState(() =>
    state.value == null ? '' : formatDate(state.value, format, locale),
  );
  const [isEditing, setIsEditing] = useState(false);
  const displayValue = isEditing
    ? inputText
    : state.value == null
      ? ''
      : formatDate(state.value, format, locale);

  const setInputRef = (node: HTMLInputElement | null) => {
    inputRef.current = node;

    if (typeof ref === 'function') {
      ref(node);
    } else if (ref != null) {
      // React ref 객체는 런타임에서만 갱신 (props 재할당이 아님)
      ref.current = node;
    }
  };

  const restoreValueText = () => {
    setInputText(state.value == null ? '' : formatDate(state.value, format, locale));
    setIsEditing(false);
  };

  const commitInputText = () => {
    const trimmed = displayValue.trim();

    if (trimmed.length === 0) {
      onCommit(null);
      setInputText('');
      setIsEditing(false);
      return;
    }

    const parsed = parseStrict(trimmed, format);

    if (parsed == null || !isDateAllowed(parsed)) {
      restoreValueText();
      return;
    }

    onCommit(parsed);
    setInputText(formatDate(parsed, format, locale));
    setIsEditing(false);
    dispatch({ type: 'SET_VISIBLE_MONTH', date: startOfMonth(parsed) });
    dispatch({ type: 'SET_FOCUSED_DATE', date: parsed });
  };

  useLayoutEffect(() => {
    if (!state.isOpen || inputRef.current == null) return;

    const updatePosition = () => {
      if (inputRef.current == null) return;

      const { x, y, height } = inputRef.current.getBoundingClientRect();
      const margin = 4;
      const viewportPadding = 8;
      const estimatedPopupWidth = 320;
      const maxX = Math.max(
        viewportPadding,
        window.innerWidth - estimatedPopupWidth - viewportPadding,
      );
      const nextX = Math.min(Math.max(x, viewportPadding), maxX);

      dispatch({
        type: 'SET_DIALOG_POSITION',
        position: { x: nextX, y: y + height + margin },
      });
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);

    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [dispatch, inputRef, state.isOpen]);

  const handleOpen = () => {
    if (disabled) return;

    dispatch({ type: 'SET_OPEN', open: true });
  };

  const handleToggle = () => {
    if (disabled) return;

    dispatch({ type: 'SET_OPEN', open: !state.isOpen });
  };

  return (
    <div className={twMerge('relative w-full', className)}>
      <input
        ref={setInputRef}
        role="combobox"
        aria-controls={dialogId}
        aria-expanded={state.isOpen}
        aria-haspopup="dialog"
        className={twMerge(
          'w-full rounded-md border border-gray-300 bg-(--color-background) px-4 py-2 pr-10 text-(--color-foreground)',
          'focus-visible:ring-2 focus-visible:ring-(--color-primary) focus-visible:outline-none',
          'disabled:cursor-not-allowed disabled:opacity-60',
          !disabled && 'transition-colors duration-200 ease-in-out hover:border-(--color-primary)',
        )}
        disabled={disabled}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        value={displayValue}
        onBlur={commitInputText}
        onChange={(event) => {
          setIsEditing(true);
          setInputText(event.target.value);
        }}
        onClick={handleOpen}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            event.preventDefault();
            commitInputText();
          }

          if (event.key === 'Escape') {
            dispatch({ type: 'SET_OPEN', open: false });
          }
        }}
      />
      <button
        type="button"
        aria-label={state.isOpen ? '달력 닫기' : '달력 열기'}
        className="absolute top-1/2 right-2 inline-flex size-8 -translate-y-1/2 items-center justify-center rounded-md text-(--color-grey-500) transition-colors duration-200 ease-in-out hover:bg-(--color-grey-100) disabled:cursor-not-allowed disabled:opacity-60"
        disabled={disabled}
        onMouseDown={(event) => event.preventDefault()}
        onClick={handleToggle}
      >
        <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 24 24">
          <path
            d="M7 3v3M17 3v3M4 9h16M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
        </svg>
      </button>
    </div>
  );
};
