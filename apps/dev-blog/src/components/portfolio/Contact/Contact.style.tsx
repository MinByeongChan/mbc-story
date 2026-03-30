import { Box, styled, Typography } from '@mui/material';

export const ContactWrapper = styled(Box)({
  backgroundColor: '#1E293B',
  gridColumn: '1 / span 12',
  minHeight: '300px',
  padding: '40px 80px',
});

export const ContactTitle = styled(Typography)({
  fontSize: '32px',
  fontWeight: 'bold',
  color: 'white',
  textShadow: `7px 7px 0 #ff5500`,
});
