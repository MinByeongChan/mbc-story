import React from 'react';

import AboutLayout from '@/layout/AboutLayout';
import { Main } from '@/components/templates';
import { AboutMeta } from '@/components/about';
import styled from '@emotion/styled';

import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  AboutEducation,
  AboutExperience,
  AboutIntroduction,
  AboutProject,
  AboutSkill,
} from '@/components/about';
import TextDefault from '@/components/ui/TextDefault';
import { fontWeight } from '@/utils/StyleTheme';
import { ContentTitle } from '@/layout';
import { BLOG_URL, blogPath } from '@/constants/blog';

const IntroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 0px) and (max-width: 480px) {
    flex-direction: column-reverse;
    .content-item2 {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;
const IntroItem = styled.li`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .intro-icon {
    display: inline;
    width: 20px;
    height: 20px;
    margin-right: 12px;
  }
  .content-icon {
    display: inline;
    width: 22px;
    height: 22px;
    margin: 0 6px;
  }
`;
const ProfileImg = styled.img`
  width: 220px;
  height: 220px;
  margin-right: 200px;
  @media screen and (min-width: 0px) and (max-width: 480px) {
    margin: 0 0 20px 0;
    width: 200px;
    height: 200px;
  }
`;

const About = () => (
  <Main meta={<AboutMeta />}>
    <AboutLayout>
      <IntroWrapper>
        <ul>
          <IntroItem>
            <TextDefault size="h1" weight={fontWeight.bold} lineHeight="h1" letterSpacing="13">
              민 병 찬
            </TextDefault>
          </IntroItem>
          <IntroItem>
            <TextDefault size="lg" weight={fontWeight.bold} color="orange" lineHeight="lg">
              Frontend Developer
            </TextDefault>
          </IntroItem>
          <IntroItem>
            <TextDefault size="lg" lineHeight="md">
              서울시 구로구 고척동
            </TextDefault>
          </IntroItem>
          <IntroItem>
            <TextDefault size="lg" lineHeight="md">
              📞 &nbsp;<a href="tel:01077020481">(+82) 010-7702-0481</a>
            </TextDefault>
          </IntroItem>
          <IntroItem>
            <TextDefault size="lg" lineHeight="md">
              📬&nbsp; <a href="mailto:mbc0481@naver.com">mbc0481@naver.com</a>
            </TextDefault>
          </IntroItem>
          <IntroItem>
            <TextDefault size="lg" lineHeight="md">
              🏠&nbsp; <a href={BLOG_URL}>{BLOG_URL}</a>
            </TextDefault>
          </IntroItem>
          <IntroItem>
            <FontAwesomeIcon className="intro-icon" icon={faGithubSquare} />
            <TextDefault size="lg" lineHeight="md">
              <a href="https://github.com/MinByeongChan">https://github.com/MinByeongChan</a>
            </TextDefault>
          </IntroItem>
        </ul>
        <ProfileImg alt="" src={blogPath('/assets/images/portfolio/profile_circle_img.png')} />
      </IntroWrapper>

      <ContentTitle title="소개" id="introduction" />
      <AboutIntroduction />

      <ContentTitle title="기술스택" id="skill" />
      <AboutSkill />

      <ContentTitle title="경력" id="experience" />
      <AboutExperience />

      <ContentTitle title="프로젝트" id="project" />
      <AboutProject />

      <ContentTitle title="학력사항" id="education" />
      <AboutEducation />
    </AboutLayout>
  </Main>
);

export default About;
