import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, disabled, children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={twMerge(
          'w-full cursor-pointer appearance-none rounded-md border border-gray-300 bg-(--color-background) bg-[length:1rem_1rem] bg-[right_0.75rem_center] bg-no-repeat px-4 py-2 pr-10 text-(--color-foreground) disabled:cursor-not-allowed',
          "bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%236b7684%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22m6%208%204%204%204-4%22%2F%3E%3C%2Fsvg%3E')]",
          !disabled && 'transition-colors duration-200 ease-in-out hover:border-(--color-primary)',
          className,
        )}
        disabled={disabled}
        {...props}
      >
        {children}
      </select>
    );
  },
);

Select.displayName = 'Select';
