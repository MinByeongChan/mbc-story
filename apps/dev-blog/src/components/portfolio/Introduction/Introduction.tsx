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
import { BLOG_URL, SITE_ORIGIN, blogPath } from '@/constants/blog';

export const Introduction = () => {
  return (
    <Wrapper className="introduction">
      <IntroductionFlexContainer>
        <Image
          alt="소개 이미지"
          src={blogPath('/assets/images/portfolio/introduction_me.png')}
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
            <IntroductionAnchor href={BLOG_URL}>Blog</IntroductionAnchor>
            <IntroductionAnchor href={`${SITE_ORIGIN}/resume`}>Resume</IntroductionAnchor>
            <IntroductionAnchor href="https://github.com/MinByeongChan">Github</IntroductionAnchor>
          </IntroductionAnchorListItem>
        </IntroductionDescList>
      </IntroductionFlexContainer>
    </Wrapper>
  );
};
