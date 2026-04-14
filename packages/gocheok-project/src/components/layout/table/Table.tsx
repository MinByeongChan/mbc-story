import type { HTMLAttributes, Ref } from 'react';

import { twMerge } from 'tailwind-merge';

export type TableProps = HTMLAttributes<HTMLTableElement> & {
  ref?: Ref<HTMLTableElement>;
};

export function Table({ className, ref, ...props }: TableProps) {
  return (
    <div className="relative w-full overflow-x-auto rounded-lg border border-(--color-border)">
      <table
        ref={ref}
        className={twMerge(
          'w-full caption-bottom border-collapse text-sm text-(--color-foreground)',
          className,
        )}
        {...props}
      />
    </div>
  );
}
