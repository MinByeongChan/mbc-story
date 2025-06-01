import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export type TypographyProps = React.HTMLAttributes<
  HTMLSpanElement | HTMLParagraphElement | HTMLHeadingElement
> &
  PropsWithChildren;
export const Typography = ({
  className,
  children,
  ...props
}: TypographyProps) => {
  return (
    <span
      className={twMerge("text-md text-(--color-neutral-100)", className)}
      {...props}
    >
      {children}
    </span>
  );
};
