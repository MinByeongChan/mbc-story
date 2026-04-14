import type { HTMLAttributes, Ref } from 'react';

import { twMerge } from 'tailwind-merge';

export type TableCaptionProps = HTMLAttributes<HTMLTableCaptionElement> & {
  ref?: Ref<HTMLTableCaptionElement>;
};

export function TableCaption({ className, ref, ...props }: TableCaptionProps) {
  return (
    <caption
      ref={ref}
      className={twMerge('my-2 text-sm text-(--color-grey-600)', className)}
      {...props}
    />
  );
}
