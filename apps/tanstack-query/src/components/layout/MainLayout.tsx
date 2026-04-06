import React from 'react';

export const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <section style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <header>
        <h1>TanStack Query</h1>
      </header>

      <div style={{ padding: '20px' }}>{children}</div>
    </section>
  );
};
