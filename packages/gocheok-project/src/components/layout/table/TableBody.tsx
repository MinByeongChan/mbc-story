import type { HTMLAttributes, Ref } from 'react';

import { twMerge } from 'tailwind-merge';

export type TableBodyProps = HTMLAttributes<HTMLTableSectionElement> & {
  ref?: Ref<HTMLTableSectionElement>;
};

export function TableBody({ className, ref, ...props }: TableBodyProps) {
  return (
    <tbody ref={ref} className={twMerge('[&_tr:last-child]:border-0', className)} {...props} />
  );
}
