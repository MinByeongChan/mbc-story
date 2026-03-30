import {
  IntroductionAnchor,
  IntroductionAnchorListItem,
  IntroductionDescList,
  IntroductionDescListItem,
  IntroductionFlexContainer,
  Wrapper,
} from '@/components/portfolio/Introduction';
import { Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export const Introduction = () => {
  return (
    <Wrapper className="introduction">
      <IntroductionFlexContainer>
        <Image
          alt="소개 이미지"
          src="/assets/images/portfolio/introduction_me.png"
          width={250}
          height={250}
        />
        <IntroductionDescList>
          <IntroductionDescListItem>
            <Typography color="#F7F5F2" fontSize="20px" fontWeight="bold">
              Name.
            </Typography>
            <Typography color="#F7F5F2" fontSize="20px">
              민병찬
            </Typography>
          </IntroductionDescListItem>
          <IntroductionDescListItem>
            <Typography color="#F7F5F2" fontWeight="bold" fontSize="20px">
              Birth.
            </Typography>
            <Typography color="#F7F5F2" fontSize="20px">
              1995.02.15
            </Typography>
          </IntroductionDescListItem>
          <IntroductionDescListItem>
            <Typography color="#F7F5F2" fontWeight="bold" fontSize="20px">
              Address.
            </Typography>
            <Typography color="#F7F5F2" fontSize="20px">
              Seoul, South Korea
            </Typography>
          </IntroductionDescListItem>
          <IntroductionDescListItem>
            <Typography color="#F7F5F2" fontWeight="bold" fontSize="20px">
              Email.
            </Typography>
            <Typography color="#F7F5F2" fontSize="20px">
              <a href="mailto:mbc0481@naver.com">mbc0481@naver.com</a>
            </Typography>
          </IntroductionDescListItem>
          <IntroductionAnchorListItem>
            <IntroductionAnchor href="https://mbc-dev-blog.vercel.app">Blog</IntroductionAnchor>
            <IntroductionAnchor href="https://mbc-dev-blog.vercel.app/about">
              Resume
            </IntroductionAnchor>
            <IntroductionAnchor href="https://github.com/MinByeongChan">Github</IntroductionAnchor>
          </IntroductionAnchorListItem>
        </IntroductionDescList>
      </IntroductionFlexContainer>
    </Wrapper>
  );
};
