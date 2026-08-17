import React, { PropsWithChildren, ReactNode } from 'react';
import styled from '@emotion/styled';
import { Footer, NavigationBar } from '@/components/templates';

interface MainProps extends PropsWithChildren {
  meta: ReactNode;
  useNav?: boolean;
  useFooter?: boolean;
}

export const GridSection = styled.section<{ useNav: boolean }>`
  display: grid;
  grid: ${(props) =>
    props.useNav ? '80px 1fr auto / repeat(12, 1fr)' : '1fr auto / repeat(12, 1fr)'};
  container-name: section-container;
  container-type: inline-size;
`;

const Main = ({ meta, useNav = true, useFooter = true, children }: MainProps) => (
  <>
    {meta}
    <GridSection useNav={useNav}>
      {useNav && <NavigationBar />}
      {children}
      {useFooter && <Footer />}
    </GridSection>
  </>
);

export { Main };
