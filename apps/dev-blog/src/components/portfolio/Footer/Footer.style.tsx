import { Box, styled } from '@mui/material';

export const FooterWrapper = styled(Box)({
  position: 'relative',
  gridColumn: '1 / span 12',
  width: '100%',
  backgroundColor: '#1E293B',
});

export const FooterFlexContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '24px',
});
