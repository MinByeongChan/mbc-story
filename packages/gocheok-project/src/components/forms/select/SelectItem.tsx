import React from 'react';
import { twMerge } from 'tailwind-merge';

import { useSelectContext } from '@gocheok/components/forms/select/SelectContext';

export const SelectItem = ({
  className,
  children,
  value,
  onClick,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { state, dispatch } = useSelectContext();
  const isSelected = state.value === value;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (value === undefined || value === null) return;

    dispatch({ type: 'SET_VALUE', value: String(value) });
    dispatch({ type: 'SET_OPEN', open: false });
    onClick?.(e);
  };

  return (
    <button
      type="button"
      className={twMerge(
        'w-full cursor-pointer px-4 py-2',
        'first:rounded-t-md last:rounded-b-md',
        'border-b border-gray-200 last:border-b-0 hover:bg-gray-100 hover:text-black',
        isSelected && 'bg-(--color-primary) text-(--color-neutral-100)',
        className,
      )}
      value={value}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};
