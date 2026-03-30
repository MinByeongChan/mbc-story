import {
  BackGroundContainer,
  GridLayout,
  ShadowContainer,
  TitleWrapper,
  Title,
} from '@/components/portfolio/Strength';
import { List, ListItem, Typography } from '@mui/material';
import React from 'react';

export const Strength = () => {
  return (
    <BackGroundContainer className="strength">
      <Typography
        fontSize="32px"
        fontWeight="bold"
        color="white"
        sx={{
          textShadow: `7px 7px 0 #ff5500`,
        }}>
        Strength.
      </Typography>

      <GridLayout>
        <ShadowContainer>
          <TitleWrapper>
            <Title>React</Title>
          </TitleWrapper>
          <List>
            <ListItem>1. 컴포넌트 공통화 및 재활용 하는 것에 능숙합니다</ListItem>
            <ListItem>
              2. tanstack-query을 사용하여 비동기동작을 제어할 수 있으며, recoil, jotai, redux를
              사용하여 스토어 관리를 할 수 있습니다.
            </ListItem>
            <ListItem>3. 다양한 디자인패턴을 경험하여 프로젝트 운영관리에 능숙합니다.</ListItem>
            <ListItem>4. next.js를 사용한 경험이 있습니다.</ListItem>
          </List>
        </ShadowContainer>

        <ShadowContainer>
          <TitleWrapper>
            <Title>Javascript</Title>
          </TitleWrapper>
          <List>
            <ListItem>
              1. ES6+에 능숙하며, 재귀함수, 함수형 프로그래밍을 사용하여 개발하려고 합니다.
            </ListItem>
            <ListItem>
              2. 타입스크립트 타입 재활용, 확장을 사용할 수 있으며, 유틸리티 타입으로 타입을 활용할
              수 있습니다.
            </ListItem>
            <ListItem>
              3. 유틸성 함수는 vitest를 사용하여 테스트코드를 작성하며, 운영이슈에 대응하기
              위해 cypress를 활용합니다.
            </ListItem>
          </List>
        </ShadowContainer>
        <ShadowContainer>
          <TitleWrapper>
            <Title>HTML / CSS</Title>
          </TitleWrapper>
          <List>
            <ListItem>1. 웹접근성 및 시맨틱 태그를 고려하여 개발합니다.</ListItem>
            <ListItem>2. 웹표준을 준수하여 개발합니다.</ListItem>
            <ListItem>3. Mui 를 라이브러리를 사용하여 스타일링합니다.</ListItem>
            <ListItem>4. CSS, SASS/SCSS, Emotion, Styled-Component를 사용할 수 있습니다.</ListItem>
            <ListItem>5. Story Book을 사용하여 스타일을 관리할 수 있습니다.</ListItem>
          </List>
        </ShadowContainer>
      </GridLayout>
    </BackGroundContainer>
  );
};
