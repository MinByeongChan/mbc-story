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
import { getProjectMetadata } from "./utils";
import { baseUrl, projectInfo } from "./constant";

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
  const dirPath = path.join(process.cwd(), `/public/portfolio/work/${slug}`);
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
      .map((file) => `/portfolio/work/${slug}/${file}`);
  } catch (error) {
    console.error("Error:", error);
    return <div>Content not found.</div>;
  }

  return (
    <>
      <MarkdownRenderer
        content={markdownContent}
        className="prose prose-base prose-neutral dark:prose-invert max-w-none"
        headings={{
          h1: "font-bold text-6xl text-white",
          h2: "font-bold text-4xl text-white",
          h3: "font-bold text-3xl text-white",
          h4: "font-bold text-2xl text-white",
          h5: "font-bold text-xl text-white",
          h6: "font-bold text-lg text-white",
        }}
        text={{
          p: "text-justify text-white",
          strong: "text-white",
        }}
        link={{
          className: "text-blue-600 underline",
          hoverClassName: "hover:text-blue-800",
        }}
        code={{
          block:
            "block bg-gray-800 text-white p-4 rounded-lg overflow-x-auto text-sm",
          inline: "bg-gray-800 text-white px-1 py-0.5 rounded text-sm",
        }}
        list={{
          ul: "list-disc list-inside",
          ol: "list-decimal list-inside",
          li: "text-white marker:text-white",
        }}
        image={{
          className: "rounded-xl max-w-full h-auto",
        }}
        blockquote={{
          className: "border-l-4 border-gray-300 pl-4 italic text-gray-600",
        }}
      />

      {images.length > 0 && <Swiper images={images} />}
    </>
  );
}
