import type { HTMLAttributes } from 'react';

import { twMerge } from 'tailwind-merge';

const sizeClassNames = {
  sm: 'h-4 w-4 border-2',
  md: 'h-6 w-6 border-2',
  lg: 'h-8 w-8 border-[3px]',
} as const;

const toneClassNames = {
  primary: 'border-(--color-blue-100) border-t-(--color-primary)',
  neutral: 'border-(--color-grey-200) border-t-(--color-grey-600)',
  inverse: 'border-white/20 border-t-white',
} as const;

export type SpinnerSize = keyof typeof sizeClassNames;
export type SpinnerTone = keyof typeof toneClassNames;

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: SpinnerSize;
  tone?: SpinnerTone;
  label?: string;
  hideLabel?: boolean;
}

export function Spinner({
  className,
  size = 'md',
  tone = 'primary',
  label = '로딩 중',
  hideLabel = false,
  ...props
}: SpinnerProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={twMerge('inline-flex items-center gap-3', className)}
      {...props}
    >
      <span
        aria-hidden="true"
        className={twMerge(
          'inline-block animate-spin rounded-full border-solid',
          sizeClassNames[size],
          toneClassNames[tone],
        )}
      />
      <span className={hideLabel ? 'sr-only' : 'text-sm text-(--color-muted-foreground)'}>
        {label}
      </span>
    </div>
  );
}

export function Loader(props: SpinnerProps) {
  return <Spinner {...props} />;
}
