import { Box, List, ListItem, styled } from '@mui/material';

export const Wrapper = styled(Box)({
  gridColumn: '2 / span 10',
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const IntroductionFlexContainer = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  gap: '80px',
});

export const IntroductionDescList = styled(List)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const IntroductionDescListItem = styled(ListItem)({
  display: 'grid',
  gridTemplateColumns: '100px auto',
  gap: '16px',
});

export const IntroductionAnchorListItem = styled(ListItem)({
  display: 'flex',
  gap: '16px',
  marginTop: '16px',
});

export const IntroductionAnchor = styled('a')({
  textDecoration: 'none',
  color: '#FF5A00',
  position: 'relative',
  transition: '0.2s all ease-in-out',
  fontWeight: 700,
  fontSize: '20px',
  '&:before': {
    content: '""',
    position: 'absolute',
    bottom: '-5px',
    backgroundColor: '#FF5A00',
    width: '0%',
    height: '4px',
    transition: '0.1s all ease-in-out',
  },
  '&:hover': {
    opacity: '0.5',
    '&:before': {
      width: '100%',
      opacity: '0.5',
    },
  },
});
