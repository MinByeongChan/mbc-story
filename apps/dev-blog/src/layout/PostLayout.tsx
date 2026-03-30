import styled from '@emotion/styled';
import React, { PropsWithChildren } from 'react';

interface PostLayoutProps extends PropsWithChildren {}

const LayoutMain = styled.main`
  min-height: 650px;
  grid-column: 2 / span 10;
  @container section-container (max-width: 480px) {
    &.post-main {
      grid-column: 2 / span 10;
    }
  }
`;
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 42px 20px 0 20px;
`;

export const PostLayout = ({ children }: PostLayoutProps) => {
  return (
    <LayoutMain className="post-main">
      <Container>{children}</Container>
    </LayoutMain>
  );
};
