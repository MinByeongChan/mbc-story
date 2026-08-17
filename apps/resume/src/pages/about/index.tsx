import React from "react";

import AboutLayout from "@/layout/AboutLayout";
import { Main } from "@/components/templates";
import { AboutMeta } from "@/components/about";
import {
  AboutEducation,
  AboutExperience,
  AboutIntroduction,
  AboutProject,
  AboutSkill,
} from "@/components/about";
import TextDefault from "@/components/ui/TextDefault";
import { fontWeight } from "@/utils/StyleTheme";
import { ContentTitle } from "@/layout";

const About = () => (
  <Main meta={<AboutMeta />}>
    <AboutLayout>
      <div className="flex flex-col-reverse items-start justify-between gap-8 pb-10 sm:flex-row sm:items-center">
        <ul className="space-y-2">
          <li className="mb-3">
            <TextDefault
              size="h1"
              weight={fontWeight.bold}
              lineHeight="h1"
              letterSpacing="13"
            >
              민 병 찬
            </TextDefault>
          </li>
          <li>
            <TextDefault
              size="lg"
              weight={fontWeight.bold}
              color="orange"
              lineHeight="lg"
            >
              Frontend Developer
            </TextDefault>
          </li>
          <li>
            <TextDefault size="lg" lineHeight="md">
              서울시 구로구 고척동
            </TextDefault>
          </li>
          <li>
            <TextDefault size="lg" lineHeight="md">
              📞 &nbsp;<a href="tel:01077020481">(+82) 010-7702-0481</a>
            </TextDefault>
          </li>
          <li>
            <TextDefault size="lg" lineHeight="md">
              📬&nbsp; <a href="mailto:mbc0481@naver.com">mbc0481@naver.com</a>
            </TextDefault>
          </li>
          <li>
            <TextDefault size="lg" lineHeight="md">
              🏠&nbsp;{" "}
              <a href="https://mbc-dev-blog.vercel.app">
                https://mbc-dev-blog.vercel.app
              </a>
            </TextDefault>
          </li>
          <li>
            <TextDefault size="lg" lineHeight="md">
              🐙&nbsp;{" "}
              <a href="https://github.com/MinByeongChan">
                https://github.com/MinByeongChan
              </a>
            </TextDefault>
          </li>
        </ul>
        <img
          alt="민병찬 프로필"
          className="size-40 shrink-0 rounded-full border-4 border-blue-50 object-cover shadow-sm sm:size-52"
          src="/assets/images/portfolio/profile_circle_img.png"
        />
      </div>

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
