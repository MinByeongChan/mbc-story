import React from "react";
import { promises as fs } from "fs";
import path from "path";
import "swiper/css";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Swiper } from "@/components/work/Swiper";
import { Metadata } from "next";
import { MarkdownRenderer } from "@/components/work/MarkdownRenderer/MarkdownRenderer";
import { ProjectDetailHeader } from "@/components/work/ProjectDetailHeader";
import { getProjectMetadata } from "./utils";
import { baseUrl, projectInfo } from "./constant";
import { portfolioPath } from "@/constants/portfolio";
import { getProject } from "@/content/projects";

const markdownClassName = [
  "prose prose-sm prose-neutral prose-invert max-w-none break-keep md:prose-base",
  "prose-p:leading-relaxed prose-p:text-neutral-300",
  "prose-headings:font-bold prose-headings:text-white",
  "prose-h1:text-4xl md:prose-h1:text-6xl",
  "prose-h2:mt-16 prose-h2:mb-6 prose-h2:text-2xl md:prose-h2:text-3xl",
  "prose-h3:mt-10 prose-h3:mb-3 prose-h3:text-lg md:prose-h3:text-xl",
  "prose-strong:font-semibold prose-strong:text-white",
  "prose-ul:pl-5 prose-li:my-1.5 prose-li:text-neutral-300 prose-li:marker:text-neutral-600",
  "prose-hr:my-6 prose-hr:border-neutral-800",
  "prose-a:text-white prose-a:underline-offset-4 hover:prose-a:text-neutral-300",
  "prose-code:rounded prose-code:bg-neutral-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:font-normal prose-code:text-neutral-200 prose-code:before:content-none prose-code:after:content-none",
  "prose-blockquote:border-neutral-700 prose-blockquote:font-normal prose-blockquote:text-neutral-400 prose-blockquote:not-italic",
  "prose-img:rounded-xl",
].join(" ");

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

  return getProjectMetadata(baseUrl, slug, projectInfo);
}

export default async function WorkSlug({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dirPath = path.join(process.cwd(), `/public/work/${slug}`);
  const filePath = path.join(dirPath, `${slug}Details.md`);

  // htmlContent 대신 markdownContent 사용
  let markdownContent = "";
  let images: string[] = [];

  try {
    // 마크다운 파일 읽기 (HTML 변환 제거)
    markdownContent = await fs.readFile(filePath, "utf-8");
    // htmlContent = await marked(markdownContent); // 이 줄 제거

    // 디렉토리 내 모든 파일 읽기
    const files = await fs.readdir(dirPath);
    // .png 파일만 필터링
    images = files
      .filter((file) => file.toLowerCase().endsWith(".png"))
      .map((file) => portfolioPath(`/work/${slug}/${file}`));
  } catch (error) {
    console.error("Error:", error);
    return <div>Content not found.</div>;
  }

  const project = getProject(slug);

  return (
    <>
      {project && <ProjectDetailHeader project={project} />}
      <MarkdownRenderer
        content={markdownContent}
        className={markdownClassName}
      />

      {images.length > 0 && <Swiper images={images} />}
    </>
  );
}
