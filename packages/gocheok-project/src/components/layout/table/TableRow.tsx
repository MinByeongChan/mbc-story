import type { HTMLAttributes, Ref } from 'react';

import { twMerge } from 'tailwind-merge';

export type TableRowProps = HTMLAttributes<HTMLTableRowElement> & {
  ref?: Ref<HTMLTableRowElement>;
};

export function TableRow({ className, ref, ...props }: TableRowProps) {
  return (
    <tr
      ref={ref}
      className={twMerge(
        'border-b border-(--color-border) transition-colors hover:bg-(--color-grey-50)',
        className,
      )}
      {...props}
    />
  );
}
