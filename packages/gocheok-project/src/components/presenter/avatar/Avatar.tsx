import type { HTMLAttributes } from 'react';

import { twMerge } from 'tailwind-merge';

const sizeClassNames = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-14 w-14 text-base',
  xl: 'h-20 w-20 text-xl',
} as const;

const shapeClassNames = {
  circle: 'rounded-full',
  square: 'rounded-2xl',
} as const;

export type AvatarSize = keyof typeof sizeClassNames;
export type AvatarShape = keyof typeof shapeClassNames;

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSize;
  shape?: AvatarShape;
}

function getInitials(name?: string) {
  if (!name) return '?';

  const words = name.trim().split(/\s+/).filter(Boolean).slice(0, 2);

  if (words.length === 0) return '?';

  return words.map((word) => word[0]?.toUpperCase() ?? '').join('');
}

export function Avatar({
  className,
  src,
  alt,
  name,
  size = 'md',
  shape = 'circle',
  ...props
}: AvatarProps) {
  const fallbackLabel = getInitials(name);

  return (
    <div
      className={twMerge(
        'inline-flex shrink-0 items-center justify-center overflow-hidden border border-(--color-border) bg-(--color-grey-100) font-semibold text-(--color-grey-700)',
        sizeClassNames[size],
        shapeClassNames[shape],
        className,
      )}
      aria-label={alt ?? name ?? 'avatar'}
      {...props}
    >
      {src ? (
        <img src={src} alt={alt ?? name ?? 'avatar'} className="h-full w-full object-cover" />
      ) : (
        <span aria-hidden>{fallbackLabel}</span>
      )}
    </div>
  );
}
