import React from 'react';

export const ContentLayout = ({ children }: React.PropsWithChildren) => {
  return <div style={{ display: 'flex', flexDirection: 'row' }}>{children}</div>;
};
