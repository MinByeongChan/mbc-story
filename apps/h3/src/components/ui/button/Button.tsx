import React from 'react';
import { css, cx } from '@styled-system/css';
import type { SystemStyleObject } from '@styled-system/types';

const defaultStyles = css({
  alignItems: 'center',
  boxSizing: 'border-box',
  color: 'rgb(255, 255, 255)',
  colorScheme: 'light only',
  cursor: 'pointer',
  display: 'flex',
  fontSize: 'md',
  fontWeight: '600',
  height: '16px',
  justifyContent: 'center',
  lineHeight: '16px',
  overflowWrap: 'break-word',
  scrollbarColor: 'rgba(0, 29, 58, 0.18) rgba(0, 0, 0, 0)',
  scrollbarWidth: 'thin',
  textAlign: 'center',
  textSizeAdjust: '100%',
  textWrapMode: 'nowrap',
  userSelect: 'none',
  whiteSpace: 'collapse',
  wordBreak: 'keep-all',
});

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Panda CSS 스타일 객체로 스타일 확장 */
  css?: SystemStyleObject | SystemStyleObject[];
};

export const Button = ({ children, css: cssProp, className, ...props }: ButtonProps) => {
  return (
    <button className={cx(defaultStyles, cssProp && css(cssProp), className)} {...props}>
      {children}
    </button>
  );
};
