import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Color, spacing } from '@/utils/StyleTheme';
import { Anchor } from '@/components/ui';
import TextDefault from '@/components/ui/TextDefault';

const Container = styled.section({
  position: 'fixed',
  right: spacing(15),
});
//
// const IconContainer = styled.div`
//   position: absolute;
//   right: ${spacing(0)};
//   @media screen and (min-width: 0px) and (max-width: 768px) {
//     display: none;
//   }
// `;
//
// const AnimContainer = styled.div({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   width: '50px',
//   height: '50px',
// });
//
// const AnimTest = styled.ul`
//   width: 100%;
//   height: 100%;
//   background-color: ${Color.DarkBlack};
//   cursor: pointer;
//   animation-duration: 1s;
//   animation-name: test;
//   animation-direction: alternate;
//   animation-iteration-count: infinite;
//
//   transition: 0.6s cubic-bezier(0.36, 0, 0.66, -0.56);
//   @keyframes test {
//     from {
//       border-radius: 20%;
//       height: 10%;
//     }
//     to {
//       border-radius: 50%;
//       height: 100%;
//     }
//   }
// `;

const AboutNavigationUl = styled.ul`
  margin-top: ${spacing(2)};
  padding: ${spacing(2)};
  border-radius: ${spacing(1)};
  @media screen and (min-width: 0px) and (max-width: 768px) {
    display: none;
  }
`;

const AboutNavigationLi = styled.li({
  color: Color.Orange,
  '&:hover': {
    opacity: 0.6,
    textDecoration: 'underline',
  },
});
export const AboutNavigation = () => {
  // const animRef = useRef<HTMLDivElement | null>(null);
  const [open] = useState<boolean>(true);
  // const handleClickTab = () => {
  //   setOpen((prev) => !prev);
  // };

  return (
    <>
      <Container>
        {/* <AnimContainer>
        <AnimTest />
      </AnimContainer> */}

        {/* <IconContainer>
          <FontAwesomeIcon
            icon={!open ? faBars : faXmark}
            width="30"
            height="30"
            onClick={handleClickTab}
          />
        </IconContainer> */}
        {open && (
          <AboutNavigationUl>
            <AboutNavigationLi>
              <TextDefault size="md" lineHeight="md">
                <Anchor id="introduction">소개</Anchor>
              </TextDefault>
            </AboutNavigationLi>
            <AboutNavigationLi>
              <TextDefault size="md" lineHeight="md">
                <Anchor id="skill">기술스택</Anchor>
              </TextDefault>
            </AboutNavigationLi>
            <AboutNavigationLi>
              <TextDefault size="md" lineHeight="md">
                <Anchor id="experience">경력</Anchor>
              </TextDefault>
            </AboutNavigationLi>
            <AboutNavigationLi>
              <TextDefault size="md" lineHeight="md">
                <Anchor id="project">소개</Anchor>
              </TextDefault>
            </AboutNavigationLi>
            <AboutNavigationLi>
              <TextDefault size="md" lineHeight="md">
                <Anchor id="education">학력사항</Anchor>
              </TextDefault>
            </AboutNavigationLi>
          </AboutNavigationUl>
        )}
      </Container>
    </>
  );
};
