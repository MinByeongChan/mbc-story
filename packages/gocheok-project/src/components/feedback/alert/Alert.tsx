import type { HTMLAttributes, ReactNode } from 'react';

import { twMerge } from 'tailwind-merge';

const toneClassNames = {
  info: 'border-(--color-blue-200) bg-(--color-blue-50) text-(--color-blue-900)',
  success: 'border-(--color-green-200) bg-(--color-green-50) text-(--color-green-900)',
  warning: 'border-(--color-yellow-200) bg-(--color-yellow-50) text-(--color-yellow-900)',
  error: 'border-(--color-red-200) bg-(--color-red-50) text-(--color-red-900)',
} as const;

export type AlertTone = keyof typeof toneClassNames;

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  tone?: AlertTone;
  icon?: ReactNode;
}

function AlertIcon({ tone }: { tone: AlertTone }) {
  const strokeClassName =
    tone === 'error'
      ? 'stroke-(--color-red-600)'
      : tone === 'warning'
        ? 'stroke-(--color-yellow-800)'
        : tone === 'success'
          ? 'stroke-(--color-green-700)'
          : 'stroke-(--color-blue-700)';

  if (tone === 'success') {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={twMerge('h-5 w-5 fill-none stroke-2', strokeClassName)}
      >
        <path d="M5 12.5L9.5 17L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (tone === 'warning') {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={twMerge('h-5 w-5 fill-none stroke-2', strokeClassName)}
      >
        <path d="M12 8V13" strokeLinecap="round" />
        <path d="M12 16.5H12.01" strokeLinecap="round" />
        <path
          d="M10.4 4.9L3.6 17.1C2.9 18.3 3.8 19.8 5.2 19.8H18.8C20.2 19.8 21.1 18.3 20.4 17.1L13.6 4.9C12.9 3.7 11.1 3.7 10.4 4.9Z"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (tone === 'error') {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={twMerge('h-5 w-5 fill-none stroke-2', strokeClassName)}
      >
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8V12.5" strokeLinecap="round" />
        <path d="M12 16H12.01" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={twMerge('h-5 w-5 fill-none stroke-2', strokeClassName)}
    >
      <circle cx="12" cy="12" r="8" />
      <path d="M12 10V16" strokeLinecap="round" />
      <path d="M12 7.5H12.01" strokeLinecap="round" />
    </svg>
  );
}

export function Alert({
  className,
  title,
  description,
  tone = 'info',
  icon,
  children,
  ...props
}: AlertProps) {
  return (
    <div
      role={tone === 'error' || tone === 'warning' ? 'alert' : 'status'}
      aria-live={tone === 'error' ? 'assertive' : 'polite'}
      className={twMerge(
        'flex gap-3 rounded-2xl border p-4 shadow-sm',
        toneClassNames[tone],
        className,
      )}
      {...props}
    >
      <div className="mt-0.5 shrink-0">{icon ?? <AlertIcon tone={tone} />}</div>
      <div className="min-w-0">
        <p className="text-sm font-semibold">{title}</p>
        {description ? <p className="mt-1 text-sm leading-6 opacity-80">{description}</p> : null}
        {children ? <div className="mt-3">{children}</div> : null}
      </div>
    </div>
  );
}
