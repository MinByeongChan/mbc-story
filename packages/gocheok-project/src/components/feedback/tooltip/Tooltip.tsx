'use client';

import React, {
  useCallback,
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';

type TooltipProviderContextValue = {
  delayDuration: number;
};

type TooltipContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.MutableRefObject<HTMLElement | null>;
};

const TooltipProviderContext = createContext<TooltipProviderContextValue>({
  delayDuration: 700,
});
const TooltipContext = createContext<TooltipContextValue | null>(null);

const useTooltipContext = () => {
  const context = useContext(TooltipContext);

  if (context == null) {
    throw new Error('Tooltip 컴포넌트 내부에서만 사용할 수 있습니다.');
  }

  return context;
};

type TooltipProviderProps = React.PropsWithChildren<{
  delayDuration?: number;
}>;

export const TooltipProvider = ({ children, delayDuration = 700 }: TooltipProviderProps) => {
  const value = useMemo(() => ({ delayDuration }), [delayDuration]);

  return (
    <TooltipProviderContext.Provider value={value}>{children}</TooltipProviderContext.Provider>
  );
};

type TooltipProps = React.PropsWithChildren<{
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}>;

export const Tooltip = ({
  children,
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
}: TooltipProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const triggerRef = useRef<HTMLElement | null>(null);
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

  const contextValue = {
    open,
    setOpen,
    triggerRef,
  };

  return <TooltipContext.Provider value={contextValue}>{children}</TooltipContext.Provider>;
};

type TooltipTriggerProps = React.HTMLAttributes<HTMLElement> & {
  asChild?: boolean;
};

export const TooltipTrigger = ({
  asChild = false,
  children,
  className,
  onFocus,
  onBlur,
  onMouseEnter,
  onMouseLeave,
  ...props
}: TooltipTriggerProps) => {
  const { delayDuration } = useContext(TooltipProviderContext);
  const { open, setOpen, triggerRef } = useTooltipContext();
  const timerRef = useRef<number | null>(null);

  const clearTimer = () => {
    if (timerRef.current == null) return;

    window.clearTimeout(timerRef.current);
    timerRef.current = null;
  };

  const openWithDelay = () => {
    clearTimer();
    timerRef.current = window.setTimeout(() => {
      setOpen(true);
    }, delayDuration);
  };

  const closeTooltip = () => {
    clearTimer();
    setOpen(false);
  };

  useEffect(() => clearTimer, []);

  const sharedProps = {
    className: asChild ? twMerge('inline-flex', className) : className,
    onMouseEnter: (event: React.MouseEvent<HTMLElement>) => {
      onMouseEnter?.(event);
      if (!event.defaultPrevented) {
        openWithDelay();
      }
    },
    onMouseLeave: (event: React.MouseEvent<HTMLElement>) => {
      onMouseLeave?.(event);
      if (!event.defaultPrevented) {
        closeTooltip();
      }
    },
    onFocus: (event: React.FocusEvent<HTMLElement>) => {
      onFocus?.(event);
      if (!event.defaultPrevented) {
        openWithDelay();
      }
    },
    onBlur: (event: React.FocusEvent<HTMLElement>) => {
      onBlur?.(event);
      if (!event.defaultPrevented) {
        closeTooltip();
      }
    },
    'aria-describedby': open ? 'tooltip-content' : undefined,
    ...props,
  };

  if (asChild) {
    return (
      <span
        ref={(node) => {
          triggerRef.current = node;
        }}
        {...sharedProps}
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
      {...sharedProps}
    >
      {children}
    </button>
  );
};

type TooltipContentProps = React.HTMLAttributes<HTMLDivElement> & {
  sideOffset?: number;
};

export const TooltipContent = ({ className, sideOffset = 8, ...props }: TooltipContentProps) => {
  const { open, triggerRef } = useTooltipContext();
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null);

  useLayoutEffect(() => {
    if (!open || triggerRef.current == null || contentRef.current == null) {
      return;
    }

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const contentRect = contentRef.current.getBoundingClientRect();

    const left = triggerRect.left + triggerRect.width / 2 - contentRect.width / 2;
    const top = triggerRect.top - contentRect.height - sideOffset;

    setPosition({
      top: Math.max(8, top),
      left: Math.min(Math.max(8, left), window.innerWidth - contentRect.width - 8),
    });
  }, [open, sideOffset, triggerRef]);

  if (!open || typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <div
      id="tooltip-content"
      ref={contentRef}
      role="tooltip"
      data-state="open"
      className={twMerge(
        'fixed z-201 rounded-md bg-(--color-grey-900) px-3 py-2 text-xs text-white shadow-lg',
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
