import type { HTMLAttributes } from 'react';

import { twMerge } from 'tailwind-merge';

const shapeClassNames = {
  line: 'h-4 w-full rounded-md',
  rect: 'h-24 w-full rounded-xl',
  circle: 'h-12 w-12 rounded-full',
} as const;

export type SkeletonShape = keyof typeof shapeClassNames;

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  shape?: SkeletonShape;
}

export function Skeleton({ className, shape = 'line', ...props }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={twMerge(
        'animate-pulse bg-linear-to-r from-(--color-grey-100) via-(--color-grey-200) to-(--color-grey-100) bg-[length:200%_100%]',
        shapeClassNames[shape],
        className,
      )}
      {...props}
    />
  );
}
