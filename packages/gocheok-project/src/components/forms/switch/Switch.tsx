import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'role'>;

export const Switch = forwardRef<HTMLInputElement, Props>(
  ({ className, disabled, ...props }, ref) => {
    return (
      <div className={twMerge('relative inline-flex h-6 w-11 shrink-0 items-center', className)}>
        <input
          ref={ref}
          type="checkbox"
          role="switch"
          className="peer sr-only"
          disabled={disabled}
          {...props}
        />
        <span
          aria-hidden
          className={twMerge(
            'pointer-events-none absolute inset-0 rounded-full bg-gray-200 transition-colors',
            'peer-checked:bg-(--color-primary)',
            'peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-(--color-primary)',
            'peer-disabled:opacity-50',
          )}
        />
        <span
          aria-hidden
          className={twMerge(
            'pointer-events-none absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform',
            'peer-checked:translate-x-5',
            'peer-disabled:opacity-50',
          )}
        />
      </div>
    );
  },
);

Switch.displayName = 'Switch';
