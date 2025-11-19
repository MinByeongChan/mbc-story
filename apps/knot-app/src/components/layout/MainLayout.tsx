import React from 'react';
import { css } from '@styled-system/css';

type MainLayoutProps = {
  children: React.ReactNode;
};

const mainLayoutContainerStyles = css({
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  bg: 'token(colors.grey.500)',
  display: 'flex',
  justifyContent: 'center',
});

const mainLayoutStyles = css({
  width: '100%',
  maxWidth: '440px',
  minHeight: '100vh',
  height: '100%',
  m: '0 auto',
  p: '6',
  bg: 'token(colors.ivory.50)',
});

export const MainLayout = (props: MainLayoutProps) => {
  return (
    <div className={mainLayoutContainerStyles}>
      <main className={mainLayoutStyles}>{props.children}</main>
    </div>
  );
};
