import React from 'react';
import { css } from '@styled-system/css';

const contentLayoutStyles = css({
  display: 'flex',
  flexDirection: 'row',
  flex: 1,
});

export const ContentLayout = ({ children }: React.PropsWithChildren) => {
  return <div className={contentLayoutStyles}>{children}</div>;
};
