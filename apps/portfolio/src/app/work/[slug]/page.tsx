import { marked } from "marked";
import React from "react";

export default async function WorkSlug({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  console.log("slug", slug);
  const response = await fetch(
    `http://localhost:3000/portfolio/work/${slug}/${slug}Details.md`
  );
  const markdownContent = await response.text();

  // 마크다운을 HTML로 변환
  const htmlContent = await marked(markdownContent);

  return (
    <div>
      <div
        className="prose dark:prose-invert
  prose-h1:font-bold prose-h1:text-6xl
  prose-a:text-blue-600 prose-p:text-justify prose-img:rounded-xl
  prose-h2:font-bold prose-h2:text-4xl
  prose-h3:font-bold prose-h3:text-3xl
  prose-h4:font-bold prose-h4:text-2xl
  prose-h5:font-bold prose-h5:text-xl
  prose-h6:font-bold prose-h6:text-lg"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}
