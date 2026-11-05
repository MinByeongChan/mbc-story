import { WorkCardList } from "@/components/work/WorkCardList";
import { WorkIntroduce } from "@/components/work/WorkIntroduce";
import React from "react";
import { twMerge } from "tailwind-merge";
import { Metadata } from "next";
import { portfolioPath } from "@/constants/portfolio";
import { getProjectThumbnailPath, projects } from "@/content/projects";
import { baseUrl } from "../constant";

export const metadata: Metadata = {
  title: "B.C Min | Work",
  description:
    "민병찬이 코웨이에서 구축하고 운영한 프론트엔드 프로젝트를 소개합니다. 배정 어드민, 통합배정판, 통합회원 React 마이그레이션, 미국 신사업 어드민, 실시간 코디매칭 등과 개인 프로젝트를 확인할 수 있습니다.",
  keywords: [
    "B.C Min",
    "민병찬 프로젝트",
    "프론트엔드 프로젝트",
    "React 프로젝트",
    "TypeScript 프로젝트",
    "코웨이 프로젝트",
    "배정 어드민",
    "통합배정판",
    "통합회원",
    "ABC Admin",
    "코디매칭",
    "포트폴리오 프로젝트",
    "웹 개발 프로젝트",
  ],
  openGraph: {
    title: "작업 프로젝트 | 민병찬 포트폴리오",
    description:
      "민병찬이 코웨이에서 구축하고 운영한 프론트엔드 프로젝트와 개인 프로젝트를 소개합니다.",
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
  const list = projects.map((project) => ({
    slug: project.slug,
    title: project.title,
    projectType: project.kind,
    period: project.period,
    description: project.summary,
    skills: project.skills,
    imgSrc: getProjectThumbnailPath(project),
    imgAlt: project.thumbnail ? `${project.title} 대표 화면` : undefined,
  }));

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
