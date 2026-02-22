import React from 'react';

export const MainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>{children}</div>
  );
};
