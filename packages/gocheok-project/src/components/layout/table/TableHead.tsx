import type { Ref, ThHTMLAttributes } from 'react';

import { twMerge } from 'tailwind-merge';

import {
  TABLE_CELL_ALIGN_CLASS,
  type TableCellAlign,
} from '@gocheok/components/layout/table/types';

export type TableHeadProps = Omit<ThHTMLAttributes<HTMLTableCellElement>, 'align'> & {
  /** 셀 텍스트 정렬. 기본값은 `left`. */
  align?: TableCellAlign;
  ref?: Ref<HTMLTableCellElement>;
};

export function TableHead({ className, align = 'left', ref, ...props }: TableHeadProps) {
  return (
    <th
      ref={ref}
      className={twMerge(
        'h-10 px-4 align-middle font-bold text-(--color-grey-800) [&:has([role=checkbox])]:pr-0',
        TABLE_CELL_ALIGN_CLASS[align],
        className,
      )}
      {...props}
    />
  );
}
