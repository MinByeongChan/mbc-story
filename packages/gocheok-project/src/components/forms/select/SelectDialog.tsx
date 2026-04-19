'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';

import { useSelectContext } from '@gocheok/components/forms/select/SelectContext';

type SelectDialogProps = {
  children: React.ReactNode;
};

export const SelectDialog = ({ children }: SelectDialogProps) => {
  const { state, dispatch } = useSelectContext();
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const position = state.dialogPosition;

  useEffect(() => {
    const updateViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };

    updateViewport();
    window.addEventListener('resize', updateViewport);

    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  useEffect(() => {
    if (!state.isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        dispatch({ type: 'SET_OPEN', open: false });
      }
    };

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (contentRef.current?.contains(target)) {
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
  }, [dispatch, state.isOpen]);

  if (!state.isOpen || typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <>
      <div
        data-state="open"
        className={twMerge(
          'pointer-events-none fixed inset-0 z-200',
          'data-[state=closed]:animate-overlay-hide data-[state=open]:animate-overlay-show',
          isMobile && 'pointer-events-auto bg-black/50',
        )}
      />
      <div
        ref={contentRef}
        className={twMerge(
          'max-w-440px fixed z-201 transform overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none',
          'data-[state=closed]:animate-select-dialog-out data-[state=open]:animate-select-dialog-in',
          isMobile && 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
        )}
        data-state="open"
        style={
          !isMobile && position
            ? { top: position.y, left: position.x, transform: 'none' }
            : undefined
        }
      >
        {children}
      </div>
    </>,
    document.body,
  );
};
