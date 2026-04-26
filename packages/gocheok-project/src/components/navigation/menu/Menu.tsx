'use client';

import React, {
  Children,
  cloneElement,
  useCallback,
  createContext,
  useContext,
  useEffect,
  useId,
  useLayoutEffect,
  isValidElement,
  type HTMLAttributes,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';

type MenuAlign = 'start' | 'center' | 'end';

type MenuContextValue = {
  contentId: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerElement: HTMLElement | null;
  setTriggerElement: (element: HTMLElement | null) => void;
  contentElement: HTMLDivElement | null;
  setContentElement: (element: HTMLDivElement | null) => void;
};

const MenuContext = createContext<MenuContextValue | null>(null);

const useMenuContext = () => {
  const context = useContext(MenuContext);

  if (context == null) {
    throw new Error('Menu 컴포넌트 내부에서만 사용할 수 있습니다.');
  }

  return context;
};

type SyntheticEventWithDefault = {
  defaultPrevented: boolean;
};

type SlottableElementProps = HTMLAttributes<HTMLElement> & {
  ref?: React.Ref<HTMLElement>;
  'aria-describedby'?: string;
};

const composeEventHandlers = <EventType extends SyntheticEventWithDefault>(
  ...handlers: Array<((event: EventType) => void) | undefined>
) => {
  return (event: EventType) => {
    for (const handler of handlers) {
      handler?.(event);
      if (event.defaultPrevented) {
        return;
      }
    }
  };
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

const getMenuItemElements = (container: HTMLElement) =>
  Array.from(container.querySelectorAll<HTMLButtonElement>('[role="menuitem"]:not([disabled])'));

type MenuProps = React.PropsWithChildren<{
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}>;

export const Menu = ({
  children,
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
}: MenuProps) => {
  const contentId = useId();
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const [triggerElement, setTriggerElement] = useState<HTMLElement | null>(null);
  const [contentElement, setContentElement] = useState<HTMLDivElement | null>(null);
  const open = controlledOpen ?? uncontrolledOpen;
  const previousOpenRef = useRef(open);

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
      if (contentElement?.contains(target) || triggerElement?.contains(target)) {
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
  }, [contentElement, open, setOpen, triggerElement]);

  useEffect(() => {
    if (previousOpenRef.current && !open) {
      triggerElement?.focus();
    }

    previousOpenRef.current = open;
  }, [open, triggerElement]);

  const contextValue = {
    contentId,
    open,
    setOpen,
    triggerElement,
    setTriggerElement,
    contentElement,
    setContentElement,
  };

  return <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>;
};

type MenuTriggerProps = React.HTMLAttributes<HTMLElement> & {
  asChild?: boolean;
};

export const MenuTrigger = ({
  asChild = false,
  children,
  className,
  onClick,
  onKeyDown,
  ...props
}: MenuTriggerProps) => {
  const { contentId, open, setOpen, setTriggerElement } = useMenuContext();

  const toggleOpen = () => {
    setOpen(!open);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key !== 'ArrowDown') {
      return;
    }

    event.preventDefault();
    setOpen(true);
  };

  const sharedProps = {
    'aria-controls': contentId,
    'aria-expanded': open,
    'aria-haspopup': 'menu' as const,
  };

  if (asChild) {
    const child = Children.only(children);

    if (!isValidElement<SlottableElementProps>(child)) {
      throw new Error('MenuTrigger의 asChild는 단일 React element 자식이 필요합니다.');
    }

    return cloneElement(child, {
      ...sharedProps,
      ...props,
      className: twMerge(child.props.className, className),
      onClick: composeEventHandlers(child.props.onClick, onClick, toggleOpen),
      onKeyDown: composeEventHandlers(child.props.onKeyDown, onKeyDown, handleKeyDown),
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
      className={className}
      onClick={composeEventHandlers(onClick, toggleOpen)}
      onKeyDown={composeEventHandlers(onKeyDown, handleKeyDown)}
      {...sharedProps}
      {...props}
    >
      {children}
    </button>
  );
};

type MenuContentProps = React.HTMLAttributes<HTMLDivElement> & {
  align?: MenuAlign;
  sideOffset?: number;
};

export const MenuContent = ({
  className,
  align = 'end',
  sideOffset = 8,
  onKeyDown,
  ...props
}: MenuContentProps) => {
  const { contentId, open, triggerElement, contentElement, setContentElement, setOpen } =
    useMenuContext();
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null);

  const updatePosition = useCallback(
    (nextContentElement: HTMLDivElement | null = contentElement) => {
      if (!open || triggerElement == null || nextContentElement == null) {
        return;
      }

      const triggerRect = triggerElement.getBoundingClientRect();
      const contentRect = nextContentElement.getBoundingClientRect();

      let left = triggerRect.left;

      if (align === 'center') {
        left = triggerRect.left + triggerRect.width / 2 - contentRect.width / 2;
      }

      if (align === 'end') {
        left = triggerRect.right - contentRect.width;
      }

      setPosition({
        top: Math.min(triggerRect.bottom + sideOffset, window.innerHeight - contentRect.height - 8),
        left: Math.min(Math.max(8, left), window.innerWidth - contentRect.width - 8),
      });
    },
    [align, contentElement, open, sideOffset, triggerElement],
  );

  useLayoutEffect(() => {
    if (!open) {
      return;
    }

    const frameId = window.requestAnimationFrame(() => {
      updatePosition();
    });

    const handleReposition = () => {
      updatePosition();
    };

    window.addEventListener('resize', handleReposition);
    window.addEventListener('scroll', handleReposition, true);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleReposition);
      window.removeEventListener('scroll', handleReposition, true);
    };
  }, [open, updatePosition]);

  useEffect(() => {
    if (!open || contentElement == null) {
      return;
    }

    getMenuItemElements(contentElement)[0]?.focus();
  }, [contentElement, open]);

  if (!open || typeof document === 'undefined') {
    return null;
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (contentElement == null) {
      return;
    }

    const items = getMenuItemElements(contentElement);
    if (items.length === 0) {
      return;
    }

    if (event.key === 'Tab') {
      setOpen(false);
      return;
    }

    if (
      event.key !== 'ArrowDown' &&
      event.key !== 'ArrowUp' &&
      event.key !== 'Home' &&
      event.key !== 'End'
    ) {
      return;
    }

    event.preventDefault();

    const currentIndex = items.findIndex((item) => item === document.activeElement);

    if (event.key === 'Home') {
      items[0]?.focus();
      return;
    }

    if (event.key === 'End') {
      items[items.length - 1]?.focus();
      return;
    }

    const offset = event.key === 'ArrowDown' ? 1 : -1;
    const nextIndex =
      currentIndex === -1 ? 0 : (currentIndex + offset + items.length) % items.length;
    items[nextIndex]?.focus();
  };

  return createPortal(
    <div
      id={contentId}
      ref={(node) => {
        setContentElement(node);
        if (node == null) {
          setPosition(null);
          return;
        }

        updatePosition(node);
      }}
      role="menu"
      data-state="open"
      className={twMerge(
        'fixed z-201 min-w-48 rounded-2xl border border-(--color-border) bg-(--color-popover) p-2 text-(--color-popover-foreground) shadow-xl',
        'data-[state=closed]:animate-surface-out data-[state=open]:animate-surface-in',
        className,
      )}
      style={
        position == null ? { visibility: 'hidden' } : { top: position.top, left: position.left }
      }
      onKeyDown={(event) => {
        onKeyDown?.(event);
        if (!event.defaultPrevented) {
          handleKeyDown(event);
        }
      }}
      {...props}
    />,
    document.body,
  );
};

type MenuItemProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const MenuItem = ({ className, onClick, type = 'button', ...props }: MenuItemProps) => {
  const { setOpen } = useMenuContext();

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <button
      type={type}
      role="menuitem"
      tabIndex={-1}
      className={twMerge(
        'flex cursor-pointer items-center rounded-xl px-3 py-2 text-sm text-(--color-foreground) transition-colors outline-none select-none',
        'focus:bg-(--color-muted) data-[highlighted]:bg-(--color-muted)',
        className,
      )}
      onClick={composeEventHandlers(onClick, handleClick)}
      {...props}
    />
  );
};

type MenuLabelProps = React.HTMLAttributes<HTMLDivElement>;

export const MenuLabel = ({ className, ...props }: MenuLabelProps) => {
  return (
    <div
      className={twMerge(
        'px-3 py-2 text-xs font-semibold tracking-wide text-(--color-muted-foreground)',
        className,
      )}
      {...props}
    />
  );
};

type MenuSeparatorProps = React.HTMLAttributes<HTMLDivElement>;

export const MenuSeparator = ({ className, ...props }: MenuSeparatorProps) => {
  return <div className={twMerge('my-1 h-px bg-(--color-border)', className)} {...props} />;
};
