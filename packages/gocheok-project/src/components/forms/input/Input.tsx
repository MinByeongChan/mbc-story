import React from 'react';
import { twMerge } from 'tailwind-merge';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, disabled, ...props }: Props) => {
  return (
    <input
      className={twMerge(
        'cursor-text rounded-md border border-gray-300 px-4 py-2 disabled:cursor-not-allowed',
        !disabled && 'transition-colors duration-200 ease-in-out hover:border-(--color-primary)',
        className,
      )}
      disabled={disabled}
      {...props}
    />
  );
};
