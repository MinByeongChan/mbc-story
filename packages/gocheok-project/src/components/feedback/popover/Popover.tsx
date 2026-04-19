'use client';

import React, {
  useCallback,
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';

type PopoverAlign = 'start' | 'center' | 'end';

type PopoverContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.MutableRefObject<HTMLElement | null>;
  anchorRef: React.MutableRefObject<HTMLElement | null>;
  contentRef: React.MutableRefObject<HTMLDivElement | null>;
};

const PopoverContext = createContext<PopoverContextValue | null>(null);

const usePopoverContext = () => {
  const context = useContext(PopoverContext);

  if (context == null) {
    throw new Error('Popover 컴포넌트 내부에서만 사용할 수 있습니다.');
  }

  return context;
};

type PopoverProps = React.PropsWithChildren<{
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}>;

export const Popover = ({
  children,
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
}: PopoverProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const triggerRef = useRef<HTMLElement | null>(null);
  const anchorRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const open = controlledOpen ?? uncontrolledOpen;

  const setOpen = useCallback(
    (nextOpen: boolean) => {
      if (controlledOpen == null) {
        setUncontrolledOpen(nextOpen);
      }

      onOpenChange?.(nextOpen);
    },
    [controlledOpen, onOpenChange],
  );

  useEffect(() => {
    if (!open) {
      return;
    }

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      const anchorElement = anchorRef.current ?? triggerRef.current;

      if (contentRef.current?.contains(target) || anchorElement?.contains(target)) {
        return;
      }

      setOpen(false);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, setOpen]);

  const contextValue = {
    open,
    setOpen,
    triggerRef,
    anchorRef,
    contentRef,
  };

  return <PopoverContext.Provider value={contextValue}>{children}</PopoverContext.Provider>;
};

type PopoverTriggerProps = React.HTMLAttributes<HTMLElement> & {
  asChild?: boolean;
};

export const PopoverTrigger = ({
  asChild = false,
  children,
  className,
  onClick,
  ...props
}: PopoverTriggerProps) => {
  const { open, setOpen, triggerRef } = usePopoverContext();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    setOpen(!open);
  };

  if (asChild) {
    return (
      <span
        ref={(node) => {
          triggerRef.current = node;
        }}
        className={twMerge('inline-flex', className)}
        onClick={handleClick}
        {...props}
      >
        {children}
      </span>
    );
  }

  return (
    <button
      ref={(node) => {
        triggerRef.current = node;
      }}
      type="button"
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

type PopoverAnchorProps = React.HTMLAttributes<HTMLElement> & {
  asChild?: boolean;
};

export const PopoverAnchor = ({
  asChild = false,
  children,
  className,
  ...props
}: PopoverAnchorProps) => {
  const { anchorRef } = usePopoverContext();

  if (asChild) {
    return (
      <span
        ref={(node) => {
          anchorRef.current = node;
        }}
        className={twMerge('inline-flex', className)}
        {...props}
      >
        {children}
      </span>
    );
  }

  return (
    <span
      ref={(node) => {
        anchorRef.current = node;
      }}
      className={className}
      {...props}
    >
      {children}
    </span>
  );
};

type PopoverContentProps = React.HTMLAttributes<HTMLDivElement> & {
  align?: PopoverAlign;
  sideOffset?: number;
};

export const PopoverContent = ({
  className,
  align = 'center',
  sideOffset = 8,
  ...props
}: PopoverContentProps) => {
  const { open, triggerRef, anchorRef, contentRef } = usePopoverContext();
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null);

  useLayoutEffect(() => {
    if (!open || contentRef.current == null) {
      return;
    }

    const anchorElement = anchorRef.current ?? triggerRef.current;
    if (anchorElement == null) {
      return;
    }

    const anchorRect = anchorElement.getBoundingClientRect();
    const contentRect = contentRef.current.getBoundingClientRect();

    let left = anchorRect.left;

    if (align === 'center') {
      left = anchorRect.left + anchorRect.width / 2 - contentRect.width / 2;
    }

    if (align === 'end') {
      left = anchorRect.right - contentRect.width;
    }

    setPosition({
      top: Math.min(anchorRect.bottom + sideOffset, window.innerHeight - contentRect.height - 8),
      left: Math.min(Math.max(8, left), window.innerWidth - contentRect.width - 8),
    });
  }, [align, open, sideOffset, anchorRef, contentRef, triggerRef]);

  if (!open || typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <div
      ref={(node) => {
        contentRef.current = node;
      }}
      data-state="open"
      className={twMerge(
        'fixed z-201 w-80 rounded-2xl border border-(--color-border) bg-(--color-popover) p-4 text-(--color-popover-foreground) shadow-xl',
        'data-[state=closed]:animate-surface-out data-[state=open]:animate-surface-in',
        className,
      )}
      style={
        position == null ? { visibility: 'hidden' } : { top: position.top, left: position.left }
      }
      {...props}
    />,
    document.body,
  );
};
