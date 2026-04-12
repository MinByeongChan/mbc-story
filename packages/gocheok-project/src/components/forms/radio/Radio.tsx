import React from 'react';
import { twMerge } from 'tailwind-merge';

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>;

export const Radio = ({ className, disabled, ...props }: Props) => {
  return (
    <input
      type="radio"
      className={twMerge(
        'peer h-4 w-4 cursor-pointer rounded-full border border-gray-300 accent-(--color-primary) disabled:cursor-not-allowed disabled:opacity-50',
        !disabled && 'transition-colors duration-200 ease-in-out',
        className,
      )}
      disabled={disabled}
      {...props}
    />
  );
};
