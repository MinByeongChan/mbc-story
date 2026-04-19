import type { HTMLAttributes } from 'react';

import { twMerge } from 'tailwind-merge';

const directionClassNames = {
  row: 'flex-row',
  column: 'flex-col',
} as const;

const gapClassNames = {
  none: 'gap-0',
  xs: 'gap-2',
  sm: 'gap-3',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8',
} as const;

const alignClassNames = {
  stretch: 'items-stretch',
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  baseline: 'items-baseline',
} as const;

const justifyClassNames = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
} as const;

export type FlexDirection = keyof typeof directionClassNames;
export type FlexGap = keyof typeof gapClassNames;
export type FlexAlign = keyof typeof alignClassNames;
export type FlexJustify = keyof typeof justifyClassNames;

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  direction?: FlexDirection;
  gap?: FlexGap;
  align?: FlexAlign;
  justify?: FlexJustify;
  wrap?: boolean;
}

export function Flex({
  className,
  direction = 'row',
  gap = 'md',
  align = 'center',
  justify = 'start',
  wrap = false,
  ...props
}: FlexProps) {
  return (
    <div
      className={twMerge(
        'flex',
        directionClassNames[direction],
        gapClassNames[gap],
        alignClassNames[align],
        justifyClassNames[justify],
        wrap && 'flex-wrap',
        className,
      )}
      {...props}
    />
  );
}
