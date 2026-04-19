import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

import { twMerge } from 'tailwind-merge';

const toneClassNames = {
  info: 'border-(--color-blue-200) bg-white text-(--color-foreground)',
  success: 'border-(--color-green-200) bg-white text-(--color-foreground)',
  warning: 'border-(--color-yellow-200) bg-white text-(--color-foreground)',
  error: 'border-(--color-red-200) bg-white text-(--color-foreground)',
} as const;

const positionClassNames = {
  topRight: 'top-6 right-6',
  topLeft: 'top-6 left-6',
  bottomRight: 'right-6 bottom-6',
  bottomLeft: 'bottom-6 left-6',
} as const;

export type ToastTone = keyof typeof toneClassNames;
export type ToastPosition = keyof typeof positionClassNames;

export interface ToastActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function ToastAction({ className, type = 'button', ...props }: ToastActionProps) {
  return (
    <button
      type={type}
      className={twMerge(
        'cursor-pointer rounded-lg px-3 py-2 text-sm font-medium text-(--color-primary)',
        className,
      )}
      {...props}
    />
  );
}

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  tone?: ToastTone;
  floating?: boolean;
  position?: ToastPosition;
  action?: ReactNode;
  onClose?: () => void;
}

function ToastAccent({ tone }: { tone: ToastTone }) {
  const backgroundClassName =
    tone === 'error'
      ? 'bg-(--color-red-500)'
      : tone === 'warning'
        ? 'bg-(--color-yellow-500)'
        : tone === 'success'
          ? 'bg-(--color-green-500)'
          : 'bg-(--color-blue-500)';

  return (
    <span
      aria-hidden="true"
      className={twMerge('mt-1 h-3 w-3 rounded-full', backgroundClassName)}
    />
  );
}

export function Toast({
  className,
  title,
  description,
  tone = 'info',
  floating = true,
  position = 'topRight',
  action,
  onClose,
  ...props
}: ToastProps) {
  return (
    <div
      role={tone === 'error' ? 'alert' : 'status'}
      aria-live={tone === 'error' ? 'assertive' : 'polite'}
      className={twMerge(
        'flex w-full max-w-sm gap-3 rounded-2xl border px-4 py-4 shadow-lg',
        toneClassNames[tone],
        floating ? twMerge('fixed z-[220]', positionClassNames[position]) : 'relative',
        className,
      )}
      {...props}
    >
      <ToastAccent tone={tone} />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold">{title}</p>
        {description ? (
          <p className="mt-1 text-sm leading-6 text-(--color-muted-foreground)">{description}</p>
        ) : null}
        {action ? <div className="mt-3">{action}</div> : null}
      </div>
      {onClose ? (
        <button
          type="button"
          onClick={onClose}
          className="cursor-pointer rounded-full p-1 text-(--color-muted-foreground) transition-colors hover:bg-(--color-muted)"
          aria-label="토스트 닫기"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4 fill-none stroke-current stroke-2"
          >
            <path d="M6 6L18 18" strokeLinecap="round" />
            <path d="M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>
      ) : null}
    </div>
  );
}
