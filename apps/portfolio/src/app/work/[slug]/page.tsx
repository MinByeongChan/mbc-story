import { marked } from "marked";
import React from "react";
import { promises as fs } from "fs";
import path from "path";

export default async function WorkSlug({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filePath = path.join(
    process.cwd(),
    `apps/portfolio/public/portfolio/work/${slug}`,
    `${slug}Details.md`
  );
  console.log("filePath", filePath);

  let htmlContent = "";

  try {
    const markdownContent = await fs.readFile(filePath, "utf-8");
    htmlContent = await marked(markdownContent);
  } catch (error) {
    console.error("Markdown file not found:", error);
    return <div>Content not found.</div>;
  }

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
