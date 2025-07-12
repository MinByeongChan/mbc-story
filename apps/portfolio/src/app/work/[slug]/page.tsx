import { marked } from "marked";
import React from "react";
import { promises as fs } from "fs";
import path from "path";
import "swiper/css";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { Swiper } from "@/components/work/Swiper";

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
