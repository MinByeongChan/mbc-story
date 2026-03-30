import { Box, List, Stack, styled, Typography } from '@mui/material';

export const CareerBackGroundContainer = styled(Box)({
  gridColumn: '2 / span 10',
  minHeight: '300px',
});

export const CareerContentTitle = styled(Typography)({
  fontSize: '32px',
  fontWeight: 'bold',
  color: 'white',
  textShadow: `7px 7px 0 #ff5500`,
});

export const CareerFlexContainer = styled(List)({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: '#F7F5F2',
  borderRadius: '24px',
});

export const CareerLogoBox = styled(Box)({
  borderRight: '1px solid #5D5D5D',
  display: 'flex',
  justifyContent: 'center',
  padding: '100px 48px',
});

export const CareerLogoRemarkStack = styled(Stack)({
  display: 'flex',
  flexDirection: 'column',
  padding: '32px 48px',
});

export const CareerCardContainer = styled(List)({
  display: 'flex',
  gap: '16px',
});

export const CareerCardItem = styled(Typography)({
  borderRadius: '10px',
  border: '1px solid #000',
  backgroundColor: '#312828',
  color: 'white',
  padding: '4px 16px',
});
