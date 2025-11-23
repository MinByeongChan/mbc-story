import { css } from '@styled-system/css';
import React from 'react';

const topTitleWrapperStyles = css({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  mb: '6',
});

const topTitleStyles = css({
  fontSize: 'xs',
});

interface GridTitleProps {
  children: React.ReactNode;
}

export const GridTitle = ({ children }: GridTitleProps) => {
  return (
    <div className={topTitleWrapperStyles}>
      <h2 className={topTitleStyles}>{children}</h2>
    </div>
  );
};
