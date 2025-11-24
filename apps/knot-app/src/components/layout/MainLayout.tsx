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
  display: 'grid',
  gridTemplateRows: 'repeat(5, 100vh) 40px',
  m: '0 auto',
  bg: 'token(colors.ivory.50)',
  gap: '10',
});

export const MainLayout = (props: MainLayoutProps) => {
  return (
    <div className={mainLayoutContainerStyles}>
      <main className={mainLayoutStyles}>{props.children}</main>
    </div>
  );
};
