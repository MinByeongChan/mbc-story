import type { HTMLAttributes } from 'react';

import { twMerge } from 'tailwind-merge';

const maxWidthClassNames = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  full: 'max-w-none',
} as const;

const paddingClassNames = {
  none: 'px-0',
  sm: 'px-4',
  md: 'px-6',
  lg: 'px-8',
  xl: 'px-10',
} as const;

export type ContainerSize = keyof typeof maxWidthClassNames;
export type ContainerPadding = keyof typeof paddingClassNames;

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize;
  padding?: ContainerPadding;
  centered?: boolean;
}

export function Container({
  className,
  size = 'lg',
  padding = 'md',
  centered = true,
  ...props
}: ContainerProps) {
  return (
    <div
      className={twMerge(
        'w-full',
        maxWidthClassNames[size],
        paddingClassNames[padding],
        centered && 'mx-auto',
        className,
      )}
      {...props}
    />
  );
}
