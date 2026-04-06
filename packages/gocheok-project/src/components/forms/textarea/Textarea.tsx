import React from 'react';
import { twMerge } from 'tailwind-merge';

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = ({ className, disabled, ...props }: Props) => {
  return (
    <textarea
      className={twMerge(
        'min-h-24 w-full cursor-text resize-y rounded-md border border-gray-300 px-4 py-2 disabled:cursor-not-allowed',
        !disabled && 'transition-colors duration-200 ease-in-out hover:border-(--color-primary)',
        className,
      )}
      disabled={disabled}
      {...props}
    />
  );
};
