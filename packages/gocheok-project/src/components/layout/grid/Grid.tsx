import type { HTMLAttributes } from 'react';

import { twMerge } from 'tailwind-merge';

const columnsClassNames = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
} as const;

const gapClassNames = {
  none: 'gap-0',
  xs: 'gap-2',
  sm: 'gap-3',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8',
} as const;

export type GridColumns = keyof typeof columnsClassNames;
export type GridGap = keyof typeof gapClassNames;

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: GridColumns;
  gap?: GridGap;
}

export function Grid({ className, columns = 3, gap = 'md', ...props }: GridProps) {
  return (
    <div
      className={twMerge('grid', columnsClassNames[columns], gapClassNames[gap], className)}
      {...props}
    />
  );
}
