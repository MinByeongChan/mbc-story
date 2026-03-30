import { Box, Button, styled, Typography } from '@mui/material';

export const BannerWrapper = styled(Box)({
  position: 'relative',
  gridColumn: '1 / span 12',
  width: '100%',
  height: '100vh',
  backgroundColor: '#2D2D2D',
});

export const BannerContainer = styled(Box)({
  position: 'absolute',
  top: '0',
  gridColumn: '1 / span 12',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
});

export const StyledButton = styled(Button)({
  border: '2px solid #FF5A00',
  borderRadius: '0px',
  color: '#FF5A00',
  marginTop: '32px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#FF5A00',
    color: 'white',
  },
});

export const StyledText = styled(Typography)<{ animWidth: number }>`
  border-right: solid 3px white;
  white-space: nowrap;
  overflow: hidden;
  color: white;
  span {
    color: #ff5a00;
    font-weight: bold;
  }

  /* Animation */
  animation:
    animated-text 3s steps(29, end) 1s 1 normal both,
    animated-cursor 1500ms steps(2) infinite;

  /* text animation */
  @keyframes animated-text {
    from {
      width: 0;
    }
    to {
      width: ${(props) => props.animWidth}px;
    }
  }

  /* cursor animations */
  @keyframes animated-cursor {
    from {
      border-right: solid 3px white;
    }
    to {
      border-right: solid 3px rgba(0, 0, 0, 0);
    }
  }
`;
