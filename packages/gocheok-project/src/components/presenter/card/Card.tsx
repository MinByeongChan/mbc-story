import type { HTMLAttributes } from 'react';

import { twMerge } from 'tailwind-merge';

const paddingClassNames = {
  none: 'p-0',
  sm: 'p-4',
  md: 'p-5',
  lg: 'p-6',
  xl: 'p-8',
} as const;

const toneClassNames = {
  default: 'border-(--color-border) bg-(--color-card) text-(--color-card-foreground)',
  muted: 'border-(--color-border) bg-(--color-grey-50) text-(--color-foreground)',
  inverse: 'border-(--color-bg-300) bg-(--color-bg-100) text-(--color-neutral-100)',
} as const;

export type CardPadding = keyof typeof paddingClassNames;
export type CardTone = keyof typeof toneClassNames;

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: CardPadding;
  tone?: CardTone;
}

export function Card({ className, padding = 'lg', tone = 'default', ...props }: CardProps) {
  return (
    <article
      className={twMerge(
        'rounded-2xl border shadow-sm',
        paddingClassNames[padding],
        toneClassNames[tone],
        className,
      )}
      {...props}
    />
  );
}
