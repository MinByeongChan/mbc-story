import React, { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { SelectProvider, useSelectContext } from '@gocheok/components/forms/select/SelectContext';
import { SelectDialog } from '@gocheok/components/forms/select/SelectDialog';

export type SelectProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type SelectInnerProps = SelectProps & {
  forwardedRef: React.ForwardedRef<HTMLButtonElement>;
};

function SelectInner({
  className,
  disabled,
  children,
  value: valueFromParent,
  forwardedRef,
  ...props
}: SelectInnerProps) {
  const { state, dispatch } = useSelectContext();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const setButtonRef = (node: HTMLButtonElement | null) => {
    buttonRef.current = node;
    if (typeof forwardedRef === 'function') {
      forwardedRef(node);
    } else if (forwardedRef != null) {
      // React ref 객체는 런타임에서만 갱신 (props 재할당이 아님)
      // eslint-disable-next-line react-hooks/immutability -- ref 병합 관례
      forwardedRef.current = node;
    }
  };

  const prevPropValue = useRef(valueFromParent);

  const handleClick = () => {
    if (disabled) return;
    dispatch({ type: 'SET_OPEN', open: !state.isOpen });
  };

  useEffect(() => {
    if (valueFromParent === prevPropValue.current) return;
    prevPropValue.current = valueFromParent;
    dispatch({ type: 'SET_VALUE', value: String(valueFromParent ?? '') });
  }, [valueFromParent, dispatch]);

  useLayoutEffect(() => {
    if (!state.isOpen || !buttonRef.current) return;
    const { x, y, height } = buttonRef.current.getBoundingClientRect();
    const MARGIN = 4;
    dispatch({
      type: 'SET_DIALOG_POSITION',
      position: { x: x + MARGIN, y: y + height + MARGIN },
    });
  }, [state.isOpen, dispatch]);

  return (
    <div>
      <button
        ref={setButtonRef}
        type="button"
        className={twMerge(
          'w-full cursor-pointer appearance-none rounded-md border border-gray-300 bg-(--color-background) bg-[length:1rem_1rem] bg-[right_0.75rem_center] bg-no-repeat px-4 py-2 pr-10 text-(--color-foreground) disabled:cursor-not-allowed',
          "bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7684%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')]",
          !disabled && 'transition-colors duration-200 ease-in-out hover:border-(--color-primary)',
          className,
        )}
        disabled={disabled}
        onClick={handleClick}
        {...props}
      >
        {state.value}
      </button>
      <SelectDialog>
        <div className="flex flex-col">{children}</div>
      </SelectDialog>
    </div>
  );
}

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
  ({ className, disabled, children, value = '', ...props }, ref) => {
    return (
      <SelectProvider defaultValue={String(value)}>
        <SelectInner
          className={className}
          disabled={disabled}
          value={value}
          forwardedRef={ref}
          {...props}
        >
          {children}
        </SelectInner>
      </SelectProvider>
    );
  },
);

Select.displayName = 'Select';
