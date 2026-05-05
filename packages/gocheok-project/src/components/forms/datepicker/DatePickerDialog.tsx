'use client';

import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { useDatePickerContext } from '@gocheok/components/forms/datepicker/DatePickerContext';

type DatePickerDialogProps = {
  id: string;
  locale: string;
  children: React.ReactNode;
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
};

export const DatePickerDialog = ({ id, locale, children, inputRef }: DatePickerDialogProps) => {
  const { state, dispatch } = useDatePickerContext();
  const contentRef = useRef<HTMLDivElement | null>(null);
  const position = state.dialogPosition;
  const label = locale === 'ko' ? '날짜 선택' : 'Choose date';

  useEffect(() => {
    if (!state.isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;

      dispatch({ type: 'SET_OPEN', open: false });
      inputRef.current?.focus();
    };

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;

      if (contentRef.current?.contains(target) || inputRef.current?.contains(target)) {
        return;
      }

      dispatch({ type: 'SET_OPEN', open: false });
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handlePointerDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handlePointerDown);
    };
  }, [dispatch, inputRef, state.isOpen]);

  if (!state.isOpen || typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <div
      ref={contentRef}
      id={id}
      role="dialog"
      aria-label={label}
      aria-modal="false"
      data-state="open"
      className="fixed z-201 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none data-[state=closed]:animate-select-dialog-out data-[state=open]:animate-select-dialog-in dark:bg-(--color-card)"
      style={position ? { top: position.y, left: position.x } : undefined}
    >
      {children}
    </div>,
    document.body,
  );
};
