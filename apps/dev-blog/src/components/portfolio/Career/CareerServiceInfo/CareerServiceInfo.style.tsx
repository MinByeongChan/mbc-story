import { Box, Button, styled, Typography } from '@mui/material';

export const ServiceContainerBox = styled(Box)({
  marginTop: '16px',
  '&:not(:first-child)': {
    marginTop: '40px',
  },
});

export const ServiceTitleContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '8px',
  marginLeft: '16px',
  gap: '16px',
});

export const ServiceTitle = styled(Typography)({
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '-16px',
    width: '6px',
    height: '100%',
    backgroundColor: '#FF5A00',
  },
});

export const ServiceDetailButton = styled(Button)({
  borderRadius: '10px',
  textDecoration: 'none',
  border: '1px solid #000',
  color: 'black',
  padding: '4px 16px',
});

export const ServiceList = styled('ol')({
  listStyle: 'disc',
  marginTop: '16px',
  paddingLeft: '24px',
});

export const ServiceStackBox = styled(Box)({
  border: '2px solid #FF5A00',
  borderRadius: '10px',
  marginTop: '16px',
  padding: '4px 16px',
  backgroundColor: 'rgba(255, 90, 0, 0.5)',
});
