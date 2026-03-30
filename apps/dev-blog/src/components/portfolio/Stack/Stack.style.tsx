import { Accordion, Box, List, styled, Typography } from '@mui/material';

export const StackBackGroundContainer = styled(Box)({
  gridColumn: '2 / span 10',
  minHeight: '300px',
});

export const StackContentTitle = styled(Typography)({
  fontSize: '32px',
  fontWeight: 'bold',
  color: 'white',
  textShadow: `7px 7px 0 #ff5500`,
});

export const StackCardList = styled(List)({
  width: '100%',
});

export const StackCardImageBox = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
});

export const StackCardTextBox = styled(Box)({
  marginTop: '16px',
});

export const AccordionContainer = styled(Accordion)({
  width: '100%',
  backgroundColor: '#F7F5F2',
  borderRadius: '10px !important',
  boxShadow: '0px 0px 12px 3px rgba(0, 0, 0, 0.5)',
});
