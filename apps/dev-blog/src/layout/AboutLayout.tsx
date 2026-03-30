import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { AboutNavigation } from '@/components/about';

const LayoutMain = styled.main`
  min-height: 650px;
  grid-column: 3 / span 8;
  @container section-container (max-width: 480px) {
    &.about-main {
      grid-column: 2 / span 10;
    }
  }
`;
const AboutArticle = styled.article({
  width: '100%',
  height: '100%',
  padding: '50px 0',
});
const ContentLayout = styled.div(() => ({
  width: '100%',
  margin: '0 auto',
  '@media screen and (min-width: 0px) and (max-width: 1080px)': {
    minWidth: '300px',
  },
  '@media screen and (min-width: 0px) and (max-width: 480px)': {
    minWidth: '300px',
  },
}));

interface AboutLayoutProps extends PropsWithChildren {}

const AboutLayout = ({ children }: AboutLayoutProps) => (
  <LayoutMain className="about-main">
    <AboutArticle>
      <AboutNavigation />
      <ContentLayout>{children}</ContentLayout>
    </AboutArticle>
  </LayoutMain>
);

export default AboutLayout;
