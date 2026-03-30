import { FooterFlexContainer, FooterWrapper } from '@/components/portfolio/Footer';
import React from 'react';
import { Typography } from '@mui/material';
import dayjs from 'dayjs';

export const Footer = () => {
  return (
    <FooterWrapper className="footer">
      <FooterFlexContainer>
        <Typography color="white">
          © Copyright {dayjs('2024.11.09').get('year')} Powered with Byeong Chan
        </Typography>
      </FooterFlexContainer>
    </FooterWrapper>
  );
};
