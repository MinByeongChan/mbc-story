import type { HTMLAttributes, Ref } from 'react';

import { twMerge } from 'tailwind-merge';

export type TableFooterProps = HTMLAttributes<HTMLTableSectionElement> & {
  ref?: Ref<HTMLTableSectionElement>;
};

export function TableFooter({ className, ref, ...props }: TableFooterProps) {
  return (
    <tfoot
      ref={ref}
      className={twMerge(
        'border-t border-(--color-border) bg-(--color-grey-100) font-medium [&>tr]:last:border-b-0',
        className,
      )}
      {...props}
    />
  );
}
