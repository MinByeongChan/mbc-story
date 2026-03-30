import {
  BannerContainer,
  StyledButton,
  BannerWrapper,
  StyledText,
} from '@/components/portfolio/Banner/Banner.style';
import { Typography } from '@mui/material';
import React, { useEffect, useRef } from 'react';

export const Banner = () => {
  const ref = useRef<HTMLDivElement>(null);
  const handleClickViewButton = () => {
    const $introduction = document.querySelector('.introduction');
    $introduction?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleScroll = () => {
    const height = ref.current?.offsetHeight ?? 0;
    if (50 < window.scrollY && window.scrollY <= height) {
      window.removeEventListener('scroll', handleScroll);
      const $introduction = document.querySelector('.introduction');
      $introduction?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <BannerWrapper className="banner" ref={ref}>
      <BannerContainer>
        <StyledText variant="h5" color="white" animWidth={550}>
          안녕하세요. Front-end Developer <span>민병찬</span> 입니다.
        </StyledText>

        <StyledButton>
          <Typography variant="h5" onClick={handleClickViewButton}>
            View Career
          </Typography>
        </StyledButton>
      </BannerContainer>
    </BannerWrapper>
  );
};
