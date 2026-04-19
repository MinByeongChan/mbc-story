import type { HTMLAttributes, PropsWithChildren } from 'react';

import { twMerge } from 'tailwind-merge';

const variantClassNames = {
  neutral: 'border-(--color-border) bg-(--color-grey-100) text-(--color-grey-800)',
  primary: 'border-(--color-blue-100) bg-(--color-blue-50) text-(--color-blue-700)',
  success: 'border-(--color-green-100) bg-(--color-green-50) text-(--color-green-700)',
  warning: 'border-(--color-orange-100) bg-(--color-orange-50) text-(--color-orange-700)',
  danger: 'border-(--color-red-100) bg-(--color-red-50) text-(--color-red-700)',
} as const;

const sizeClassNames = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-xs',
} as const;

export type BadgeVariant = keyof typeof variantClassNames;
export type BadgeSize = keyof typeof sizeClassNames;

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, PropsWithChildren {
  variant?: BadgeVariant;
  size?: BadgeSize;
}

export function Badge({
  children,
  className,
  variant = 'neutral',
  size = 'md',
  ...props
}: BadgeProps) {
  return (
    <span
      className={twMerge(
        'inline-flex items-center rounded-full border font-medium whitespace-nowrap',
        variantClassNames[variant],
        sizeClassNames[size],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
