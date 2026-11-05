import { portfolioPath } from "@/constants/portfolio";

export type ProjectKind = "Coway" | "개인";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  /** URL slug. `public/work/<slug>/<slug>Details.md` 파일과 1:1로 대응한다. */
  slug: string;
  title: string;
  kind: ProjectKind;
  period: string;
  role: string;
  /** 카드와 메타 설명에 쓰는 한 문장 요약 */
  summary: string;
  skills: string[];
  /** 수치가 드러나는 핵심 성과. 카드, 상세 상단, 메타 설명에 재사용한다. */
  highlights: string[];
  /** `public/work/<slug>/` 아래 대표 이미지 파일명. 없으면 no_data 이미지를 쓴다. */
  thumbnail?: string;
  links?: ProjectLink[];
}

export const COMPANY_LABEL: Record<ProjectKind, string> = {
  Coway: "코웨이",
  개인: "개인",
};

export const projects: Project[] = [
  {
    slug: "assignmentAdmin",
    title: "배정 어드민 시스템",
    kind: "Coway",
    period: "2022.10 – 2024.01, 2026.04 – 현재",
    role: "Frontend Engineer",
    summary:
      "작업자, 일정, 이관과 배정 현황을 지도·목록·캘린더로 확인하고 조정하는 코웨이 내부 운영 도구입니다.",
    skills: [
      "React",
      "TypeScript",
      "Zustand",
      "Recoil",
      "TanStack Query",
      "MSW",
      "Vitest",
    ],
    highlights: [
      "지도 인스턴스를 싱글턴으로 전환해 조회당 약 290개씩 누적되던 detached DOM을 0개로 줄였습니다.",
      "Recoil Selector를 기능별 Zustand Store로 재구성하고 서버 상태를 TanStack Query로 분리했습니다.",
      "배정 시스템 실시간 모니터링 화면과 작업 현황·이관·구간 설정 기능을 개발했습니다.",
    ],
  },
  {
    slug: "assignmentBoard",
    title: "통합배정판",
    kind: "Coway",
    period: "2026.01 – 현재",
    role: "Frontend Engineer",
    summary:
      "일 5K~10K뷰, 피크 30K뷰 규모의 설치 업무 배정 플랫폼에 신제품 배정 정책과 성능 모니터링 체계를 구축했습니다.",
    skills: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Datadog RUM",
      "Vite",
      "MCP",
      "ChromaDB",
    ],
    highlights: [
      "에어컨, 소파, 모션 매트리스 등 신제품 배정 정책을 반영한 운영 화면을 개발했습니다.",
      "Datadog RUM 대시보드와 모니터링 체계를 구축해 운영 판단 기준을 만들었습니다.",
      "화면설계서, 회의록, 인수인계 문서를 벡터화한 로컬 RAG 환경을 구축해 정책 변경 이력을 빠르게 찾을 수 있게 했습니다.",
    ],
  },
  {
    slug: "accountMigration",
    title: "통합회원 React 마이그레이션",
    kind: "Coway",
    period: "2025.11 – 2026.05",
    role: "Frontend Engineer",
    summary:
      "30만 회원 규모 통합회원의 Keycloak 의존 로그인·회원 화면을 React와 TypeScript 기반 인증 흐름으로 전환했습니다.",
    skills: [
      "React",
      "TypeScript",
      "Zustand",
      "Zod",
      "Vite",
      "SCSS",
      "Datadog RUM",
      "Vitest",
      "Cypress",
      "AWS",
    ],
    highlights: [
      "Keycloak FreeMarker 템플릿과 리다이렉트에 의존하던 인증 단계를 API 응답 기반의 React 화면 제어 구조로 바꿨습니다.",
      "일반·SNS·중복 계정 로그인, 본인인증, 비밀번호 변경, reCAPTCHA의 화면 분기와 오류 처리를 프론트엔드 로직으로 재구성했습니다.",
      "약관, CSRF/XSRF 토큰 대응과 로그인 예외 케이스를 테스트와 문서로 남겨 전환 이후 운영 안정성을 확보했습니다.",
    ],
    links: [{ label: "코웨이몰", href: "https://www.coway.com/" }],
  },
  {
    slug: "abcAdmin",
    title: "ABC Admin",
    kind: "Coway",
    period: "2024.04 – 2025.10",
    role: "Frontend Engineer",
    summary:
      "코웨이 미국 법인의 WMS 물류 흐름과 회계 전표·원장을 중심으로 OMS와 작업 관리를 지원하는 통합 백오피스입니다.",
    skills: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Recoil",
      "MUI",
      "React Hook Form",
      "Emotion",
      "Sentry",
      "Vitest",
      "Vite",
      "AWS EC2",
    ],
    highlights: [
      "TanStack Query 호출·캐시 구조를 개선해 화면 지연을 최대 약 3초에서 1초로 줄였습니다.",
      "50개 이상 화면에서 반복되던 폼을 react-hook-form 기반 단일 템플릿으로 통합해 개발 기간을 단축했습니다.",
      "출고·배차·창고이동·재고 추적과 전표·원장·시산표·반제 기능을 개발해 물류와 회계 프로세스를 어드민에서 제어할 수 있게 했습니다.",
    ],
    thumbnail: "abc_admin_홈화면.png",
  },
  {
    slug: "newsletter",
    title: "뉴스레터",
    kind: "Coway",
    period: "2024.04 – 2025.10",
    role: "Frontend Engineer",
    summary:
      "코웨이 미국 신사업 고객에게 제품, 프로모션, 브랜드 콘텐츠를 구독 기반으로 전달하는 뉴스레터 페이지입니다.",
    skills: [
      "Vue 3",
      "TypeScript",
      "Pinia",
      "VeeValidate",
      "Vite",
      "SCSS",
      "AWS (S3, CloudFront)",
    ],
    highlights: [
      "이메일 입력, 약관 동의, 구독 완료까지 이어지는 신청 플로우와 유효성 검증을 개발했습니다.",
      "영문 문구 길이를 전제로 입력 폼과 완료 화면이 무너지지 않는 반응형 레이아웃을 구성했습니다.",
      "S3와 CloudFront 정적 배포 환경에서 캐시 반영 시점을 고려해 화면 변경을 안정적으로 배포했습니다.",
    ],
    thumbnail: "뉴스레터 메인화면.png",
  },
  {
    slug: "accountService",
    title: "통합회원",
    kind: "Coway",
    period: "2023.05 – 2024.04",
    role: "Frontend Engineer",
    summary:
      "레거시와 신규 서비스의 회원을 통합하는 30만 회원, DAU 약 5K 규모의 B2C 인증 플랫폼입니다.",
    skills: [
      "Vue 3",
      "TypeScript",
      "Pinia",
      "Vite",
      "SCSS",
      "Datadog",
      "Jest",
      "Storybook",
      "Cypress",
      "AWS (S3, CloudFront)",
    ],
    highlights: [
      "회원가입, 로그인, 계정 찾기, 마이페이지와 회원 마이그레이션 등 핵심 사용자 흐름을 개발했습니다.",
      "DDD 패턴으로 회원가입·OTP·계정 모델과 Hook을 도메인 단위로 분리해 기능 추가 시 변경 범위를 줄였습니다.",
      "Datadog으로 디바이스·OS·언어별 오류를 추적하고 QA 예외 케이스를 Jest와 Cypress 테스트로 전환해 재발을 막았습니다.",
    ],
    thumbnail: "통합회원_서비스이용관리.png",
    links: [{ label: "코웨이몰", href: "https://www.coway.com/" }],
  },
  {
    slug: "codyMatching",
    title: "실시간 코디매칭 서비스",
    kind: "Coway",
    period: "2022.04 – 2023.11",
    role: "Frontend Engineer",
    summary:
      "약 2만 명의 영업직원과 고객을 연결하고 신청·대기·수락·실패·재시도 상태를 처리하는 비대면 매칭 플랫폼입니다.",
    skills: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Jotai",
      "Datadog RUM",
      "Cypress",
      "Vite",
      "AWS (S3, CloudFront)",
    ],
    highlights: [
      "Vue 기반 레거시 화면을 React로 전환하고 반복 UI와 비즈니스 로직을 공통 컴포넌트와 Custom Hook으로 재구성했습니다.",
      "setTimeout에 의존하던 매칭 확인을 서버가 내려주는 카운트와 현재 시각 비교 방식으로 바꿔 매칭 정확성을 높였습니다.",
      "신청부터 재시도까지의 핵심 흐름을 Cypress E2E 테스트와 CI/CD에 연결해 배포 이슈 발생률을 낮췄습니다.",
    ],
    thumbnail: "코디매칭_메인_mobile.png",
    links: [{ label: "코디매칭 서비스", href: "https://matching.coway.com/" }],
  },
  {
    slug: "accountAdmin",
    title: "통합회원 어드민",
    kind: "Coway",
    period: "2021.11 – 2024.05",
    role: "Frontend Engineer",
    summary:
      "코웨이몰과 ioCare 등 여러 서비스의 일반·휴면 회원, 약관, 로그와 관리자 권한을 관리하는 내부 운영 도구입니다.",
    skills: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Redux Thunk",
      "MUI",
      "Emotion",
      "Vite",
      "Cypress",
      "Jest",
      "AWS (S3, CloudFront)",
    ],
    highlights: [
      "프로젝트 초기 환경 구축부터 회원·휴면회원 조회, 통계, 검색 필터, 관리자 설정 기능까지 단독으로 개발했습니다.",
      "약관 에디터와 약관 매퍼를 개발해 별도 퍼블리싱 없이 약관을 작성하고 배포하는 환경을 만들었습니다.",
      "사내 SSO 로그인과 메뉴별 권한 제어를 구현하고 ISMS-P 심사에 대응했습니다.",
    ],
  },
  {
    slug: "portfolio2025",
    title: "포트폴리오 2025",
    kind: "개인",
    period: "2025.06 – 2025.07",
    role: "Owner",
    summary:
      "pnpm 모노레포 위에서 Next.js, Tailwind CSS, GSAP으로 다시 만든 포트폴리오입니다. 이력서와 블로그를 같은 도메인 하위 경로로 묶었습니다.",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
      "pnpm Workspace",
      "Vercel",
    ],
    highlights: [
      "포트폴리오, 이력서, 블로그를 하나의 모노레포에서 관리하고 공통 디자인 토큰 패키지를 공유합니다.",
      "프로젝트 상세를 Markdown으로 관리하고 동적 라우팅, sitemap, robots 설정을 적용했습니다.",
      "GSAP SplitText와 ScrollTrigger로 스크롤 기반 애니메이션을 구성했습니다.",
    ],
    thumbnail: "포트폴리오2025_메인.png",
    links: [
      { label: "Portfolio", href: "https://byeongchan.space/portfolio" },
      {
        label: "GitHub Repository",
        href: "https://github.com/MinByeongChan/mbc-story",
      },
    ],
  },
  {
    slug: "techBlog",
    title: "기술 블로그",
    kind: "개인",
    period: "2022.01 – 현재",
    role: "Owner",
    summary:
      "개발 기록과 학습 내용을 정리하는 개인 기술 블로그입니다. Markdown 기반 콘텐츠를 직접 렌더링합니다.",
    skills: ["React", "TypeScript", "MUI", "SCSS", "Vite", "Vercel"],
    highlights: [
      "Markdown을 React 컴포넌트로 변환하는 렌더링 파이프라인을 직접 구현했습니다.",
      "Firebase 스토리지 기반 게시에서 로컬 콘텐츠 관리로 전환해 로딩 지연을 줄였습니다.",
      "Next.js와 SPA 구조를 오가며 SSR과 CSR의 장단점을 직접 비교했습니다.",
    ],
    thumbnail: "블로그_메인.png",
    links: [
      { label: "Blog", href: "https://byeongchan.space/blog" },
      {
        label: "GitHub Repository",
        href: "https://github.com/MinByeongChan/mbc-devBlog",
      },
    ],
  },
  {
    slug: "portfolio2024",
    title: "포트폴리오 2024",
    kind: "개인",
    period: "2024.12",
    role: "Owner",
    summary:
      "처음 만든 포트폴리오입니다. Notion 페이지를 Markdown으로 변환해 렌더링하는 방식에서 로컬 콘텐츠로 옮겼습니다.",
    skills: ["React", "TypeScript", "MUI", "SCSS", "Vite", "Vercel"],
    highlights: [
      "Notion API 기반 콘텐츠 로딩을 로컬 Markdown으로 전환해 응답 지연을 줄였습니다.",
      "IntersectionObserver로 스크롤 진입 애니메이션을 구현했습니다.",
    ],
    thumbnail: "포트폴리오2024_메인.png",
  },
];

export const projectSlugs = projects.map((project) => project.slug);

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);

/** 메타데이터와 문서 제목에 쓰는 형식 */
export const getProjectMetaTitle = (project: Project) =>
  `B.C Min | ${project.title}`;

export const getProjectThumbnailPath = (project: Project) =>
  project.thumbnail
    ? portfolioPath(`/work/${project.slug}/${project.thumbnail}`)
    : undefined;
