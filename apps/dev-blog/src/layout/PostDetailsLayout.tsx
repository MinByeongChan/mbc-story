import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

interface PostDetailsLayoutProps extends PropsWithChildren {}

const LayoutMain = styled.main`
  min-height: 650px;
  grid-column: 4 / span 6;
  @container section-container (max-width: 600px) {
    &.post-details-main {
      grid-column: 2 / span 10;
    }
  }
`;
const ContentLayout = styled.div(() => ({
  width: '100%',
  padding: '50px 0',
}));

export const PostDetailsLayout = ({ children }: PostDetailsLayoutProps) => {
  return (
    <LayoutMain className="post-details-main">
      <ContentLayout>{children}</ContentLayout>
    </LayoutMain>
  );
};
