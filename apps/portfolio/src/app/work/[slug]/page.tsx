import { marked } from "marked";
import React from "react";
import { promises as fs } from "fs";
import path from "path";
import "swiper/css";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Swiper } from "@/components/work/Swiper";
import { Metadata } from "next";

// 프로젝트 정보 매핑
const projectInfo: Record<
  string,
  { title: string; description: string; company: string; skills: string[] }
> = {
  abcAdmin: {
    title: "B.C Min | ABC Admin",
    description:
      "네코아(코웨이 미국 법인)의 직원, 관리자 모든 직원들이 사용하는 내부 사무업무 관리 어드민 시스템",
    company: "코웨이",
    skills: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Recoil",
      "Mui",
      "Emotion",
      "Sentry",
      "Vitest",
      "Vite",
      "AWS EC2",
    ],
  },
  accountService: {
    title: "B.C Min | 통합회원",
    description: "코웨이 구서비스 및 신규 서비스 회원을 통합하기 위한 서비스",
    company: "코웨이",
    skills: [
      "Vue3",
      "TypeScript",
      "Pinia",
      "Vite",
      "SCSS",
      "AWS(S3, CloudFront)",
      "Jest",
      "Storybook",
      "Cypress",
    ],
  },
  codyMatching: {
    title: "B.C Min | 실시간 코디매칭 서비스",
    description:
      "코디(영업사원)가 매칭 서비스를 사용하여 쉬운 영업서비스를 제공하는 시스템",
    company: "코웨이",
    skills: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Jotai",
      "Vite",
      "Cypress",
      "AWS (S3, CloudFront)",
    ],
  },
  accountAdmin: {
    title: "B.C Min | 통합회원 어드민",
    description:
      "코웨이 통합회원의 회원 조회, 통계성 데이터 제공, 이용약관 관리 등 관리자 서비스",
    company: "코웨이",
    skills: [
      "React",
      "TypeScript",
      "Redux(RTK / redux-thunk)",
      "Mui",
      "Vite",
      "AWS (S3, CloudFront)",
    ],
  },
  portfolio2025: {
    title: "B.C Min | 포트폴리오 2025",
    description:
      "2025년 최신작 포트폴리오, tailwindcss를 사용하여 모바일 환경에서 최적화",
    company: "개인",
    skills: [
      "React",
      "TypeScript",
      "PNPM Workspace",
      "TailwindCSS",
      "Next.js",
      "Vercel",
    ],
  },
  techBlog: {
    title: "B.C Min | 기술/개인 블로그",
    description: "개발 관련정보나 기록하고싶은 기술을 포스팅하는 기술블로그",
    company: "개인",
    skills: ["React", "TypeScript", "Mui", "Vite", "Vercel"],
  },
  portfolio2024: {
    title: "B.C Min | 포트폴리오 2024",
    description: "2024년 포트폴리오 프로젝트",
    company: "개인",
    skills: ["React", "TypeScript", "Mui", "Vite", "Vercel"],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectInfo[slug];

  if (!project) {
    return {
      title: "프로젝트를 찾을 수 없습니다",
      description: "요청하신 프로젝트를 찾을 수 없습니다.",
    };
  }

  const baseUrl = "https://portfolio.minbyeongchan.com";
  const projectImageUrl = `/portfolio/work/${slug}/${
    slug === "abcAdmin"
      ? "abc_admin_홈화면.png"
      : slug === "accountService"
        ? "통합회원_서비스이용관리.png"
        : slug === "codyMatching"
          ? "코디매칭_메인_mobile.png"
          : slug === "accountAdmin"
            ? "통합회원_로그인.png"
            : slug === "portfolio2025"
              ? "포트폴리오2025_메인.png"
              : slug === "techBlog"
                ? "블로그_메인.png"
                : slug === "portfolio2024"
                  ? "포트폴리오2024_메인.png"
                  : "default.png"
  }`;

  return {
    title: project.title,
    description: `${project.description} | ${project.company} 프로젝트 | 기술스택: ${project.skills.join(", ")}`,
    keywords: [
      "B.C Min",
      project.title,
      project.company,
      "민병찬",
      "프론트엔드",
      "프로젝트",
      ...project.skills,
      "포트폴리오",
    ],
    openGraph: {
      title: `${project.title} | 민병찬 포트폴리오`,
      description: project.description,
      url: `${baseUrl}/work/${slug}`,
      images: [
        {
          url: projectImageUrl,
          width: 1200,
          height: 630,
          alt: `${project.title} 프로젝트 이미지`,
        },
      ],
      type: "article",
      tags: project.skills,
    },
    twitter: {
      title: `${project.title} | 민병찬 포트폴리오`,
      description: project.description,
      images: [projectImageUrl],
    },
  };
}

export default async function WorkSlug({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dirPath = path.join(process.cwd(), `/public/portfolio/work/${slug}`);
  const filePath = path.join(dirPath, `${slug}Details.md`);

  let htmlContent = "";
  let images: string[] = [];

  try {
    // 마크다운 파일 읽기
    const markdownContent = await fs.readFile(filePath, "utf-8");
    htmlContent = await marked(markdownContent);

    // 디렉토리 내 모든 파일 읽기
    const files = await fs.readdir(dirPath);
    // .png 파일만 필터링
    images = files
      .filter((file) => file.toLowerCase().endsWith(".png"))
      .map((file) => `/portfolio/work/${slug}/${file}`);
  } catch (error) {
    console.error("Error:", error);
    return <div>Content not found.</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div
        className="prose w-full dark:prose-invert
  prose-h1:font-bold prose-h1:text-6xl
  prose-a:text-blue-600 prose-p:text-justify prose-img:rounded-xl
  prose-h2:font-bold prose-h2:text-4xl
  prose-h3:font-bold prose-h3:text-3xl
  prose-h4:font-bold prose-h4:text-2xl
  prose-h5:font-bold prose-h5:text-xl
  prose-h6:font-bold prose-h6:text-lg"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />

      {images.length > 0 && <Swiper images={images} />}
    </div>
  );
}
