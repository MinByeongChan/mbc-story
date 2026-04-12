import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <label ref={ref} className={twMerge('block text-sm font-medium', className)} {...props}>
        {children}
      </label>
    );
  },
);

Label.displayName = 'Label';
