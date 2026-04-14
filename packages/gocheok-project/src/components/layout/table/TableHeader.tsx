import type { HTMLAttributes, Ref } from 'react';

import { twMerge } from 'tailwind-merge';

export type TableHeaderProps = HTMLAttributes<HTMLTableSectionElement> & {
  ref?: Ref<HTMLTableSectionElement>;
};

export function TableHeader({ className, ref, ...props }: TableHeaderProps) {
  return (
    <thead
      ref={ref}
      className={twMerge(
        'bg-(--color-grey-100) [&_tr]:border-b [&_tr]:border-(--color-border)',
        className,
      )}
      {...props}
    />
  );
}
