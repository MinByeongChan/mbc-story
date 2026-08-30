import { WorkCardList } from "@/components/work/WorkCardList";
import { WorkIntroduce } from "@/components/work/WorkIntroduce";
import React from "react";
import { twMerge } from "tailwind-merge";
import { Metadata } from "next";
import { portfolioPath } from "@/constants/portfolio";
import { baseUrl } from "../constant";

export const metadata: Metadata = {
  title: "B.C Min | Work",
  description:
    "민병찬이 개발한 프론트엔드 프로젝트들을 소개합니다. 코웨이에서 진행한 ABC Admin, 통합회원 서비스, 실시간 코디매칭 서비스 등과 개인 프로젝트들을 확인하실 수 있습니다.",
  keywords: [
    "B.C Min",
    "민병찬 프로젝트",
    "프론트엔드 프로젝트",
    "React 프로젝트",
    "TypeScript 프로젝트",
    "코웨이 프로젝트",
    "ABC Admin",
    "통합회원",
    "코디매칭",
    "포트폴리오 프로젝트",
    "웹 개발 프로젝트",
  ],
  openGraph: {
    title: "작업 프로젝트 | 민병찬 포트폴리오",
    description:
      "민병찬이 개발한 프론트엔드 프로젝트들을 소개합니다. 코웨이에서 진행한 프로젝트들과 개인 프로젝트들을 확인하실 수 있습니다.",
    url: `${baseUrl}/work`,
    images: [
      {
        url: portfolioPath("/work/abcAdmin/abc_admin_홈화면.png"),
        width: 1200,
        height: 630,
        alt: "민병찬 프론트엔드 개발 프로젝트",
      },
    ],
  },
  twitter: {
    title: "작업 프로젝트 | 민병찬 포트폴리오",
    description: "민병찬이 개발한 프론트엔드 프로젝트들을 소개합니다.",
    images: [portfolioPath("/work/abcAdmin/abc_admin_홈화면.png")],
  },
};

export default function Work() {
  const list = [
    {
      imgSrc: portfolioPath("/work/abcAdmin/abc_admin_홈화면.png"),
      imgAlt: "ABC_ADMIN_COVER",
      title: "ABC Admin",
      projectType: "Coway",
      projectLogo: portfolioPath("/work/coway_logo.png"),
      description:
        "ABC Admin은 네코아(코웨이 미국 법인)의 직원, 관리자 모든 직원들이 사용하고 이를 통해 내부 사무업무를 관리하는 어드민입니다. 일종의 SAP과 유사합니다.",
      skills: [
        "React",
        "Typescript",
        "TanStack Query",
        "Recoil",
        "Mui",
        "Emotion",
        "Sentry",
        "Vitest",
        "Vite",
        "AWS EC2",
      ],
      slug: "abcAdmin",
    },
    {
      imgSrc: portfolioPath("/work/accountService/통합회원_서비스이용관리.png"),
      imgAlt: "통합회원_커버",
      title: "통합회원",
      projectType: "Coway",
      projectLogo: portfolioPath("/work/coway_logo.png"),
      description:
        "코웨이 구서비스 및 신규 서비스 회원을 통합하기 위한 서비스 입니다.",
      skills: [
        "Vue3",
        "Typescript",
        "Pinia",
        "Vite",
        "SCSS",
        "AWS(S3, CloudFront)",
        "Jest",
        "Storybook",
        "Cypress",
      ],
      slug: "accountService",
    },
    {
      imgSrc: portfolioPath("/work/codyMatching/코디매칭_메인_mobile.png"),
      imgAlt: "코디매칭_메인",
      title: "실시간 코디매칭 서비스",
      projectType: "Coway",
      projectLogo: portfolioPath("/work/coway_logo.png"),
      description:
        "코디(영업사원)가 직접 방문판매를 하는것이 아닌, 매칭 서비스를 사용하여 이전보다 쉬운 영업서비스를 제공합니다.",
      skills: [
        "React",
        "Typescript",
        "TanStack Query",
        "Jotai",
        "Vite",
        "Cypress",
        "AWS (S3, CloudFront)",
      ],
      slug: "codyMatching",
    },
    {
      title: "통합회원 어드민",
      projectType: "Coway",
      projectLogo: portfolioPath("/work/coway_logo.png"),
      description:
        "코웨이 통합회원의 회원 조회, 통계성 데이터 제공, 이용약관 관리 등 코웨이 관리자가 회원 서비스를 조회 및 제어할 수 있는 서비스를 제공합니다.",
      skills: [
        "React",
        "Typescript",
        "Redux(RTK / redux-thunk)",
        "Mui",
        "Vite",
        "AWS (S3, CloudFront)",
      ],
      slug: "accountAdmin",
    },
    {
      imgSrc: portfolioPath("/work/portfolio2025/포트폴리오2025_메인.png"),
      imgAlt: "개인 포트폴리오",
      title: "포트폴리오 2025",
      projectType: "개인",
      description:
        "2025년 최신작 포트폴리오입니다. tailwindcss를 사용하여 모바일 환경에서 최적화 되어있습니다.",
      skills: [
        "React",
        "Typescript",
        "PNPM Workspace",
        "TailwindCSS",
        "Next.js",
        "Vercel",
      ],
      slug: "portfolio2025",
    },
    {
      imgSrc: portfolioPath("/work/techBlog/블로그_메인.png"),
      imgAlt: "블로그_메인_커버",
      title: "기술/개인 블로그",
      projectType: "개인",
      description:
        "개발 관련정보나 기록하고싶은 기술을 포스팅하는데 사용하고있는 기술블로그입니다.",
      skills: ["React", "Typescript", "Mui", "Vite", "Vercel"],
      slug: "techBlog",
    },

    {
      imgSrc: portfolioPath("/work/portfolio2024/포트폴리오2024_메인.png"),
      imgAlt: "포트폴리오2024_커버",
      title: "포트폴리오 2024",
      projectType: "개인",
      description: "2024년 포트폴리오 입니다.",
      skills: ["React", "Typescript", "Mui", "Vite", "Vercel"],
      slug: "portfolio2024",
    },
  ];

  return (
    <div
      className={twMerge(
        "my-24",
        "xl:mx-36 xl:grid-cols-3",
        "lg:mx-24 lg:grid-cols-2",
        "md:mx-24 md:grid-cols-2",
        "sm:mx-0 sm:grid-cols-2",
      )}
    >
      <WorkIntroduce />
      <WorkCardList list={list} />
    </div>
  );
}
