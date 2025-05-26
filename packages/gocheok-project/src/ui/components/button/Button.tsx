import React, { PropsWithChildren } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren;

export const Button = ({ children, className, ...restProps }: ButtonProps) => {
  return (
    <button className={className} {...restProps}>
      {children}
    </button>
  );
};
