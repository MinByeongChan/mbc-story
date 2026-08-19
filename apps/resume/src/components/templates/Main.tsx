import React, { PropsWithChildren, ReactNode } from 'react';
import { Footer } from '@/components/templates';

interface MainProps extends PropsWithChildren {
  meta: ReactNode;
  useNav?: boolean;
  useFooter?: boolean;
}

const Main = ({ meta, useFooter = true, children }: MainProps) => (
  <div className="min-h-screen bg-[--color-background] text-grey-900">
    {meta}
    {children}
    {useFooter && <Footer />}
  </div>
);

export { Main };
