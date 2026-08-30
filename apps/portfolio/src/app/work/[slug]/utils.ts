import { ProjectInfoRecord } from "@/components/work/MarkdownRenderer/type";
import { portfolioPath } from "@/constants/portfolio";

export const getImageUrl = (slug: string) => {
  switch (slug) {
    case "abcAdmin":
      return portfolioPath(`/work/${slug}/abc_admin_홈화면.png`);
    case "accountService":
      return portfolioPath(`/work/${slug}/통합회원_서비스이용관리.png`);
    case "codyMatching":
      return portfolioPath(`/work/${slug}/코디매칭_메인_mobile.png`);
    case "accountAdmin":
      return portfolioPath(`/work/${slug}/통합회원_로그인.png`);
    case "portfolio2025":
      return portfolioPath(`/work/${slug}/포트폴리오2025_메인.png`);
    case "techBlog":
      return portfolioPath(`/work/${slug}/블로그_메인.png`);
    case "portfolio2024":
      return portfolioPath(`/work/${slug}/포트폴리오2024_메인.png`);
    default:
      return portfolioPath(`/work/${slug}/default.png`);
  }
};

export const getProjectMetadata = (
  baseUrl: string,
  slug: string,
  projectInfo: ProjectInfoRecord,
) => {
  const project = projectInfo[slug];

  // 프로젝트가 존재하지 않는 경우 기본값 반환
  if (!project) {
    const defaultImageUrl = getImageUrl(slug);
    return {
      title: "프로젝트를 찾을 수 없습니다",
      description: "요청하신 프로젝트를 찾을 수 없습니다.",
      keywords: ["B.C Min", "민병찬", "프론트엔드", "포트폴리오"],
      openGraph: {
        title: "프로젝트를 찾을 수 없습니다 | 민병찬 포트폴리오",
        description: "요청하신 프로젝트를 찾을 수 없습니다.",
        url: `${baseUrl}/work/${slug}`,
        images: [
          {
            url: defaultImageUrl,
            width: 1200,
            height: 630,
            alt: "프로젝트 이미지",
          },
        ],
        type: "article" as const,
        tags: [],
      },
      twitter: {
        title: "프로젝트를 찾을 수 없습니다 | 민병찬 포트폴리오",
        description: "요청하신 프로젝트를 찾을 수 없습니다.",
        images: [defaultImageUrl],
      },
    };
  }

  const projectImageUrl = getImageUrl(slug);
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
      type: "article" as const,
      tags: project.skills,
    },
    twitter: {
      title: `${project.title} | 민병찬 포트폴리오`,
      description: project.description,
      images: [projectImageUrl],
    },
  };
};
