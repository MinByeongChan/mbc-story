import { DialogContent, Paper, styled } from '@mui/material';

export const DetailsArticleContainer = styled(Paper)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '300',
  maxWidth: '700px',
  width: '100%',
  backgroundColor: 'white',
  maxHeight: '90vh',
});

export const DetailsContent = styled(DialogContent)({
  width: '100%',
  height: '550px',
  overflowY: 'auto',
});

export const DialogHeader = styled('header')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});
