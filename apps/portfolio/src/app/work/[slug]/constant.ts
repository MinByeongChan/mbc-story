import { ProjectInfoRecord } from "@/components/work/MarkdownRenderer/type";
import { baseUrl } from "@/app/constant";

export { baseUrl };

// 프로젝트 정보 매핑
export const projectInfo: ProjectInfoRecord = {
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
