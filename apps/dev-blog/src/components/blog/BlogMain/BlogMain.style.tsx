import { Box, styled } from '@mui/material';

export const BlogMainContainer = styled(Box)({
  containerName: 'blog-main-container',
  containerType: 'inline-size',
  gridColumn: 'span 12',
});

export const BlogMainLayout = styled(Box)`
  display: grid;
  min-height: 650px;
  grid-gap: 32px;
  grid-column: 2 / span 10;
  grid-template-columns: repeat(12, 1fr);
  padding: 32px 0;
  @container blog-main-container (max-width: 768px) {
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 24px;
  }
  @container blog-main-container (min-width: 0px) and (max-width: 430px) {
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px;
  }
`;

export const BlogMainMargin = styled(Box)`
  margin: 0 24px;
  @container blog-main-container (max-width: 768px) {
    margin: 0 24px;
  }
  @container blog-main-container (min-width: 0px) and (max-width: 430px) {
    margin: 0 20px;
  }
`;

export const LnbContainer = styled('aside')`
  grid-column: 3 / span 3;
  @container blog-main-container (max-width: 768px) {
    grid-column: 1 / span 4;
  }
  @container blog-main-container (min-width: 0px) and (max-width: 430px) {
    display: none;
    grid-column: none;
  }
`;

export const ArticleContainer = styled('article')`
  grid-column: 6 / span 5;
  @container blog-main-container (max-width: 768px) {
    grid-column: 5 / span 5;
  }
  @container blog-main-container (min-width: 0px) and (max-width: 430px) {
    grid-column: 1 / span 6;
  }
`;
