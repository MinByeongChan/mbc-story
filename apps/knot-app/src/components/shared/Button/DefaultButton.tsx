import { css, cx } from '@styled-system/css';
import React from 'react';

const defaultButtonStyles = css({
  px: '4',
  py: '2',
  overflow: 'hidden',
  border: '1px solid token(colors.grey.300)',
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: 'token(colors.grey.400)',
  },
});

export const DefaultButton = ({
  children,
  className,
  ...restProps
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={cx(defaultButtonStyles, className)} {...restProps}>
      {children}
    </button>
  );
};
