import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

const LayoutMain = styled.main`
  min-height: 650px;
  grid-column: 3 / span 8;
  @container section-container (max-width: 480px) {
    &.tag-main {
      grid-column: 2 / span 10;
    }
  }
`;
const Container = styled.div`
  padding: 50px 0;
`;

interface TagLayoutProps extends PropsWithChildren {}

export const TagLayout = ({ children }: TagLayoutProps) => {
  return (
    <LayoutMain className="tag-main">
      <Container>{children}</Container>
    </LayoutMain>
  );
};
