'use client';

import React, {
  Children,
  cloneElement,
  useCallback,
  createContext,
  useContext,
  useEffect,
  useId,
  isValidElement,
  useLayoutEffect,
  useMemo,
  type HTMLAttributes,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';

type TooltipProviderContextValue = {
  delayDuration: number;
};

type TooltipContextValue = {
  contentId: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerElement: HTMLElement | null;
  setTriggerElement: (element: HTMLElement | null) => void;
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

type SlottableElementProps = HTMLAttributes<HTMLElement> & {
  ref?: React.Ref<HTMLElement>;
  'aria-describedby'?: string;
};

const assignRef = <ElementType,>(
  ref: React.Ref<ElementType> | undefined,
  value: ElementType | null,
) => {
  if (typeof ref === 'function') {
    ref(value);
    return;
  }

  if (ref != null) {
    (ref as React.MutableRefObject<ElementType | null>).current = value;
  }
};

const mergeSpaceSeparatedValues = (...values: Array<string | undefined>) => {
  const mergedValues = values.flatMap((value) => value?.split(' ').filter(Boolean) ?? []);
  return mergedValues.length > 0 ? Array.from(new Set(mergedValues)).join(' ') : undefined;
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
  const contentId = useId();
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const [triggerElement, setTriggerElement] = useState<HTMLElement | null>(null);
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
    contentId,
    open,
    setOpen,
    triggerElement,
    setTriggerElement,
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
  const { contentId, open, setOpen, setTriggerElement } = useTooltipContext();
  const [delayTimer, setDelayTimer] = useState<number | null>(null);

  const clearTimer = () => {
    if (delayTimer == null) return;

    window.clearTimeout(delayTimer);
    setDelayTimer(null);
  };

  const openWithDelay = () => {
    clearTimer();
    const nextTimer = window.setTimeout(() => {
      setOpen(true);
      setDelayTimer(null);
    }, delayDuration);
    setDelayTimer(nextTimer);
  };

  const closeTooltip = () => {
    clearTimer();
    setOpen(false);
  };

  useEffect(() => {
    return () => {
      if (delayTimer != null) {
        window.clearTimeout(delayTimer);
      }
    };
  }, [delayTimer]);

  const describedBy = mergeSpaceSeparatedValues(
    props['aria-describedby'],
    open ? contentId : undefined,
  );

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
    'aria-describedby': describedBy,
    ...props,
  };

  if (asChild) {
    const child = Children.only(children);

    if (!isValidElement<SlottableElementProps>(child)) {
      throw new Error('TooltipTrigger의 asChild는 단일 React element 자식이 필요합니다.');
    }

    return cloneElement(child, {
      ...sharedProps,
      className: twMerge(child.props.className, sharedProps.className),
      onMouseEnter: (event) => {
        child.props.onMouseEnter?.(event);
        if (!event.defaultPrevented) {
          sharedProps.onMouseEnter(event);
        }
      },
      onMouseLeave: (event) => {
        child.props.onMouseLeave?.(event);
        if (!event.defaultPrevented) {
          sharedProps.onMouseLeave(event);
        }
      },
      onFocus: (event) => {
        child.props.onFocus?.(event);
        if (!event.defaultPrevented) {
          sharedProps.onFocus(event);
        }
      },
      onBlur: (event) => {
        child.props.onBlur?.(event);
        if (!event.defaultPrevented) {
          sharedProps.onBlur(event);
        }
      },
      'aria-describedby': mergeSpaceSeparatedValues(
        child.props['aria-describedby'],
        sharedProps['aria-describedby'],
      ),
      ref: (node) => {
        assignRef(child.props.ref, node);
        setTriggerElement(node);
      },
    });
  }

  return (
    <button
      ref={(node) => {
        setTriggerElement(node);
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
  const { contentId, open, triggerElement } = useTooltipContext();
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null);

  useLayoutEffect(() => {
    if (!open || triggerElement == null || contentRef.current == null) {
      return;
    }

    const triggerRect = triggerElement.getBoundingClientRect();
    const contentRect = contentRef.current.getBoundingClientRect();

    const left = triggerRect.left + triggerRect.width / 2 - contentRect.width / 2;
    const top = triggerRect.top - contentRect.height - sideOffset;

    setPosition({
      top: Math.max(8, top),
      left: Math.min(Math.max(8, left), window.innerWidth - contentRect.width - 8),
    });
  }, [open, sideOffset, triggerElement]);

  if (!open || typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <div
      id={contentId}
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
