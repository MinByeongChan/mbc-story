import type { HTMLAttributes } from 'react';

import { twMerge } from 'tailwind-merge';

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
} as const;

const justifyClassNames = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
} as const;

export type StackGap = keyof typeof gapClassNames;
export type StackAlign = keyof typeof alignClassNames;
export type StackJustify = keyof typeof justifyClassNames;

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  gap?: StackGap;
  align?: StackAlign;
  justify?: StackJustify;
}

export function Stack({
  className,
  gap = 'md',
  align = 'stretch',
  justify = 'start',
  ...props
}: StackProps) {
  return (
    <div
      className={twMerge(
        'flex flex-col',
        gapClassNames[gap],
        alignClassNames[align],
        justifyClassNames[justify],
        className,
      )}
      {...props}
    />
  );
}
