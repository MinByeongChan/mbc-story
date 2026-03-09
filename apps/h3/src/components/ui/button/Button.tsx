import React from 'react';
import { css, cx } from '@styled-system/css';
import type { SystemStyleObject } from '@styled-system/types';

const defaultStyles = css({
  alignItems: 'center',
  py: 3.5,
  px: 4,
  borderRadius: 'md',
  boxSizing: 'border-box',
  color: 'white',
  backgroundColor: 'token(colors.toss.blue.500)',
  colorScheme: 'light only',
  cursor: 'pointer',
  display: 'flex',
  fontSize: 'md',
  fontWeight: '600',
  height: '16px',
  justifyContent: 'center',
  lineHeight: '16px',
  overflowWrap: 'break-word',
  textAlign: 'center',
  textSizeAdjust: '100%',
  textWrapMode: 'nowrap',
  userSelect: 'none',
  whiteSpace: 'collapse',
  wordBreak: 'keep-all',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: 'token(colors.toss.blue.600)',
  },
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
