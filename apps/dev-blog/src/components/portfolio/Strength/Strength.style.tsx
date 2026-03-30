import { Box, styled, Typography } from '@mui/material';

export const BackGroundContainer = styled(Box)({
  gridColumn: '2 / span 10',
  minHeight: '300px',
});

export const GridLayout = styled(Box)({
  display: 'grid',
  grid: 'repeat(2, 1fr) / repeat(2, 1fr)',
  gap: '48px',
  padding: '40px',
});

export const ShadowContainer = styled(Box)({
  position: 'relative',
  backgroundColor: '#F7F5F2',
  borderRadius: '10px',
  boxShadow: '0px 0px 12px 3px rgba(0, 0, 0, 0.5)',
  width: '100%',
  minHeight: '300px',
  padding: '24px 16px',
});

export const TitleWrapper = styled(Box)({
  position: 'absolute',
  top: '-26px',
  left: '-34px',
  width: 'fit-content',
  border: '1px solid #000',
  borderRadius: '10px',
  padding: '4px 16px',
  backgroundColor: '#F7F5F2',
});

export const Title = styled(Typography)({
  fontSize: '28px',
  fontWeight: 'bold',
  position: 'relative',
  '&:after': {
    content: '""',
    display: 'inline-block',
    width: '100%',
    height: '4px',
    backgroundColor: '#ff5500',
    position: 'absolute',
    left: '0',
    bottom: '10px',
    opacity: '0.8',
  },
});
