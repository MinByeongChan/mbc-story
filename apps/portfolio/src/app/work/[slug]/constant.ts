import { ProjectInfoRecord } from "@/components/work/MarkdownRenderer/type";
import { baseUrl } from "@/app/constant";
import {
  COMPANY_LABEL,
  getProjectMetaTitle,
  projects,
} from "@/content/projects";

export { baseUrl };

// 메타데이터용 프로젝트 정보. 원본은 src/content/projects.ts 하나로 관리한다.
export const projectInfo: ProjectInfoRecord = Object.fromEntries(
  projects.map((project) => [
    project.slug,
    {
      title: getProjectMetaTitle(project),
      description: project.summary,
      company: COMPANY_LABEL[project.kind],
      skills: project.skills,
    },
  ]),
);
