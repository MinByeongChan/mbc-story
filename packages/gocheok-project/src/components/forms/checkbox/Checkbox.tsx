import React from 'react';
import { twMerge } from 'tailwind-merge';

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>;

export const Checkbox = ({ className, disabled, ...props }: Props) => {
  return (
    <input
      type="checkbox"
      className={twMerge(
        'peer relative h-4 w-4 cursor-pointer rounded border border-none border-gray-300 accent-(--color-primary) disabled:cursor-not-allowed disabled:opacity-50',
        'before:absolute before:-top-2 before:-left-2 before:content-[""] before:content-[url("/icons/unchecked.svg")]',
        'checked:animate-checkbox-check checked:before:absolute checked:before:-top-2 checked:before:-left-2 checked:before:content-[url("/icons/checked.svg")]',
        !disabled && 'transition-colors duration-200 ease-in-out',
        className,
      )}
      disabled={disabled}
      style={{
        WebkitAppearance: 'none',
        appearance: 'none',
      }}
      {...props}
    />
  );
};
