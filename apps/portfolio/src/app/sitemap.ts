import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mbc-story-portfolio.vercel.app/";

  // 작업 프로젝트 목록
  const workProjects = [
    "abcAdmin",
    "accountService",
    "codyMatching",
    "accountAdmin",
    "portfolio2025",
    "techBlog",
    "portfolio2024",
  ];

  // 기본 페이지들
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  // 작업 프로젝트 페이지들 추가
  const workRoutes = workProjects.map((project) => ({
    url: `${baseUrl}/work/${project}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...workRoutes];
}
