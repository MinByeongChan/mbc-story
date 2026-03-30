import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

const LayoutMain = styled.main`
  min-height: 650px;
  grid-column: 3 / span 8;
  @container section-container (max-width: 1080px) {
    &.portfolio-main {
      grid-column: 2 / span 10;
    }
  }
`;

interface PortfolioLayoutProps extends PropsWithChildren {}

export const PortfolioLayout = ({ children }: PortfolioLayoutProps) => {
  return <LayoutMain className="portfolio-main">{children}</LayoutMain>;
};
