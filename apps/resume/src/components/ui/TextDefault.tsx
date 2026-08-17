import { Typography } from "gocheok-project";
import React, { CSSProperties, forwardRef, ReactNode } from "react";

export interface TextDefaultProps {
  size?: string;
  color?: string;
  weight?: "300" | "500" | "normal" | "700";
  lineHeight?: string;
  letterSpacing?: string;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const sizeClassNames: Record<string, string> = {
  h1: "text-4xl sm:text-5xl",
  xxg: "text-2xl sm:text-3xl",
  xg: "text-xl sm:text-2xl",
  lg: "text-lg sm:text-xl",
  md: "text-base sm:text-lg",
  sm: "text-sm sm:text-base",
  xs: "text-xs sm:text-sm",
};

const colorClassNames: Record<string, string> = {
  orange: "text-blue-600",
  lightBlue: "text-blue-600",
  white: "text-white",
  black: "text-grey-900",
};

const weightClassNames: Record<string, string> = {
  "300": "font-light",
  "500": "font-medium",
  normal: "font-normal",
  "700": "font-bold",
};

const lineHeightClassNames: Record<string, string> = {
  h1: "leading-tight",
  xg: "leading-relaxed",
  lg: "leading-relaxed",
  md: "leading-relaxed",
};

const TextDefault = forwardRef<HTMLSpanElement, TextDefaultProps>(
  function TextDefault(
    {
      children,
      size = "md",
      color,
      weight,
      lineHeight = "md",
      letterSpacing,
      className,
      style,
    },
    ref,
  ) {
    return (
      <Typography
        ref={ref}
        className={[
          "text-grey-800",
          sizeClassNames[size],
          color ? colorClassNames[color] : "",
          weight ? weightClassNames[weight] : "",
          lineHeightClassNames[lineHeight],
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        style={{
          ...style,
          letterSpacing: letterSpacing ? `${letterSpacing}px` : undefined,
        }}
      >
        {children}
      </Typography>
    );
  },
);

export default TextDefault;
