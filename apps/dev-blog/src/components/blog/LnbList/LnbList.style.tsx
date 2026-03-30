import { Color } from '@/utils/StyleTheme';
import { Box, styled, Typography } from '@mui/material';

export const LnbWrapper = styled(Box)({
  padding: '16px 0',
  backgroundColor: Color.LightBeige,
  borderRadius: '8px',
  boxShadow: '0px 4px 8px 1px rgba(0, 0, 0, 0.3)',
});

export const LnbListWrapper = styled(Box)({
  padding: '20px 24px',
});

export const ListItemText = styled(Typography)({
  transition: '0.1s ease-in-out',
  '&:hover': {
    color: Color.LightPink,
  },
});
