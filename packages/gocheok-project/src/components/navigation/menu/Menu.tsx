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

type MenuAlign = 'start' | 'center' | 'end';

type MenuContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.MutableRefObject<HTMLElement | null>;
  contentRef: React.MutableRefObject<HTMLDivElement | null>;
};

const MenuContext = createContext<MenuContextValue | null>(null);

const useMenuContext = () => {
  const context = useContext(MenuContext);

  if (context == null) {
    throw new Error('Menu 컴포넌트 내부에서만 사용할 수 있습니다.');
  }

  return context;
};

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
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const triggerRef = useRef<HTMLElement | null>(null);
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
      if (contentRef.current?.contains(target) || triggerRef.current?.contains(target)) {
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
    contentRef,
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
  ...props
}: MenuTriggerProps) => {
  const { open, setOpen, triggerRef } = useMenuContext();

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

type MenuContentProps = React.HTMLAttributes<HTMLDivElement> & {
  align?: MenuAlign;
  sideOffset?: number;
};

export const MenuContent = ({
  className,
  align = 'end',
  sideOffset = 8,
  ...props
}: MenuContentProps) => {
  const { open, triggerRef, contentRef } = useMenuContext();
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null);

  useLayoutEffect(() => {
    if (!open || triggerRef.current == null || contentRef.current == null) {
      return;
    }

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const contentRect = contentRef.current.getBoundingClientRect();

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
  }, [align, open, sideOffset, contentRef, triggerRef]);

  if (!open || typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <div
      ref={(node) => {
        contentRef.current = node;
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
      {...props}
    />,
    document.body,
  );
};

type MenuItemProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const MenuItem = ({ className, onClick, type = 'button', ...props }: MenuItemProps) => {
  const { setOpen } = useMenuContext();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    setOpen(false);
  };

  return (
    <button
      type={type}
      role="menuitem"
      className={twMerge(
        'flex cursor-pointer items-center rounded-xl px-3 py-2 text-sm text-(--color-foreground) transition-colors outline-none select-none',
        'focus:bg-(--color-muted) data-[highlighted]:bg-(--color-muted)',
        className,
      )}
      onClick={handleClick}
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
