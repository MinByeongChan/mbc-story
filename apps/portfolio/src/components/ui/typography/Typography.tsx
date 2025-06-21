import React, { PropsWithChildren, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export type TypographyProps = React.HTMLAttributes<
  HTMLSpanElement | HTMLParagraphElement | HTMLHeadingElement
> &
  PropsWithChildren;

export const Typography = forwardRef<HTMLSpanElement, TypographyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={twMerge("text-md text-(--color-neutral-100)", className)}
        {...props}
      >
        {children}
      </span>
    );
  },
);

Typography.displayName = "Typography";
