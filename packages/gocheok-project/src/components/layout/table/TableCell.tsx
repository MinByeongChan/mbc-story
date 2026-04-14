import type { Ref, TdHTMLAttributes } from 'react';

import { twMerge } from 'tailwind-merge';

import {
  TABLE_CELL_ALIGN_CLASS,
  type TableCellAlign,
} from '@gocheok/components/layout/table/types';

export type TableCellProps = Omit<TdHTMLAttributes<HTMLTableCellElement>, 'align'> & {
  /** 셀 텍스트 정렬. 기본값은 `left`. */
  align?: TableCellAlign;
  ref?: Ref<HTMLTableCellElement>;
};

export function TableCell({ className, align = 'left', ref, ...props }: TableCellProps) {
  return (
    <td
      ref={ref}
      className={twMerge(
        'px-4 py-3 align-middle [&:has([role=checkbox])]:pr-0',
        TABLE_CELL_ALIGN_CLASS[align],
        className,
      )}
      {...props}
    />
  );
}
