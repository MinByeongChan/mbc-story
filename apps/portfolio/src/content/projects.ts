import { portfolioPath } from "@/constants/portfolio";

export type ProjectKind = "Coway" | "개인";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectHeadline {
  /** 굵게 보여줄 핵심 수치 */
  value: string;
  label: string;
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
  /** 메인 Experience 타임라인에 노출할 대표 수치. 지정한 프로젝트만 타임라인에 나온다. */
  headline?: ProjectHeadline;
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
    period: "2022.10 – 2024.04, 2026.01 – 현재",
    role: "Frontend Engineer",
    summary:
      "작업자, 일정, 이관과 배정 현황을 지도·목록·캘린더로 확인하고 조정하는 코웨이 내부 운영 도구입니다.",
    skills: [
      "React",
      "TypeScript",
      "Zustand",
      "Recoil",
      "TanStack Query",
      "Naver Map",
      "React Big Calendar",
      "Datadog RUM",
      "MSW",
      "Vitest",
      "Storybook",
    ],
    highlights: [
      "지도 인스턴스를 싱글턴으로 전환해 반복 조회마다 누적되던 detached DOM을 100%(조회당 약 290개→0개) 제거했습니다.",
      "Characterization Test로 기존 동작을 고정한 뒤 Recoil을 Zustand와 TanStack Query로 전환해 유닛 테스트를 45%(49개→71개) 늘리고 회귀 0건으로 이관했습니다.",
      "Naver Map 마커·폴리곤 지도, react-big-calendar 일정 화면과 전국 실시간 모니터링 화면을 개발했습니다.",
      "Datadog RUM을 신규 연동하고 Secrets Manager 기반 환경변수 체계와 원격 설정을 적용했습니다.",
    ],
  },
  {
    slug: "assignmentBoard",
    title: "통합배정판",
    kind: "Coway",
    period: "2026.01 – 현재",
    role: "Frontend Engineer",
    summary:
      "일 5K~10K뷰 규모의 설치 업무 배정 플랫폼에 신제품 배정 정책과 Datadog RUM 모니터링 체계를 구축했습니다.",
    skills: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Datadog RUM",
      "Vite",
      "AWS (CloudFront)",
      "MCP",
      "ChromaDB",
    ],
    highlights: [
      "에어컨, 소파, 모션 매트리스 등 신제품 배정 정책을 반영한 운영 화면과 설치일 변경·택배 출고 배정판을 개발했습니다.",
      "알림톡 대량 발송 직후 FCP p90이 8.7초까지 늘어난 원인을 RUM과 APM 트레이싱으로 분석해 백엔드 포화임을 입증하고 발송 분산을 요청했습니다.",
      "RUM-APM 분산 트레이싱과 인앱브라우저 퍼널 트래킹을 구축해 설치일 변경 퍼널 전환율 51.7%와 이탈률 30.6%를 처음으로 측정했습니다.",
      "화면설계서·회의록·인수인계 문서를 ChromaDB로 벡터화해 MCP로 검색하는 로컬 RAG를 구축하고, 바이너리 문서 인덱싱을 추가해 인덱싱 대상을 179%(124건→346건) 늘렸습니다.",
    ],
    headline: { value: "피크 30K뷰", label: "설치 배정 플랫폼 모니터링 구축" },
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
      "GA4",
      "Vitest",
      "Cypress",
      "AWS",
    ],
    highlights: [
      "Keycloak FreeMarker 템플릿과 리다이렉트에 의존하던 인증 단계를 API 응답 기반의 React 화면 제어 구조로 바꿨습니다.",
      "중복 계정 로그인 400 에러, SNS 로그인 오류 처리, step 검증과 redirect uri 쿼리 파라미터화로 로그인 플로우를 안정화했습니다.",
      "GDPR 약관 연동, forceLogout, SDK CSRF/XSRF 토큰 대응을 구현하고 QA 예외 케이스를 테스트로 전환해 회귀를 막았습니다.",
      "로그인 에러 케이스와 테스트 케이스, 국내 통합회원 UI 가이드와 FE 네이티브 연동가이드를 문서화했습니다.",
    ],
    links: [{ label: "코웨이몰", href: "https://www.coway.com/" }],
    headline: { value: "30만 회원", label: "인증 흐름을 React로 전환" },
  },
  {
    slug: "abcAdmin",
    title: "ABC Admin",
    kind: "Coway",
    period: "2024.04 – 2025.12",
    role: "Frontend Engineer",
    summary:
      "코웨이 미국 법인의 WMS 물류 흐름과 회계 전표·원장을 중심으로 OMS와 테크니션 배정을 지원하는 통합 백오피스입니다.",
    skills: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Recoil",
      "MUI",
      "React Hook Form",
      "React Big Calendar",
      "openapi-typescript",
      "Emotion",
      "Sentry",
      "Vitest",
      "Vite",
      "AWS EC2",
    ],
    highlights: [
      "주요 화면 기준으로 TanStack Query 캐싱과 API 호출 순서를 최적화해 화면 응답 시간을 67%(약 3초→1초) 단축했습니다.",
      "공통 컴포넌트를 공동 구축하며 Table 등 핵심 컴포넌트 개선을 주도해 한 번의 개선이 246개 화면 파일에 반영되도록 했습니다.",
      "화면마다 달랐던 SNB 로직을 useSnb·useSnbRow·usePersonalSnbSearch 공통 훅 3종으로 통합했습니다.",
      "재고실사 4단계 워크플로우, 출고·배차, 창고이동과 Shopify-OMS-AR 대사, 전표·원장·시산표 기능을 개발했습니다.",
    ],
    thumbnail: "abc_admin_홈화면.png",
    headline: {
      value: "67% 단축",
      label: "미국 법인 어드민 화면 지연(3초→1초)",
    },
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
      "Tailwind CSS",
      "AWS (S3, CloudFront)",
    ],
    highlights: [
      "이메일 입력, 약관 동의, 구독 완료까지 이어지는 신청 플로우와 유효성 검증을 개발했습니다.",
      "언어별 경로로 영어와 한국어를 처리하고 영문 문구 길이를 고려한 반응형 레이아웃을 구성했습니다.",
      "Tailwind 결과 CSS를 기존 서비스에 적용하며 Reset CSS로 생긴 스타일 충돌을 해결했습니다.",
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
      "Keycloak",
      "Datadog",
      "Jest",
      "Storybook",
      "Cypress",
      "Docker",
      "AWS (S3, CloudFront)",
    ],
    highlights: [
      "회원가입, 로그인, 계정 찾기, 마이페이지와 회원 마이그레이션 등 핵심 사용자 흐름을 개발했습니다.",
      "DDD 패턴으로 회원가입·OTP·계정 모델과 Hook을 도메인 단위로 분리해 기능 추가 시 변경 범위를 줄였습니다.",
      "통합회원 연동 테스트 클라이언트(test-client)를 신규 개발해 클라이언트별 로그인·가입·계정 찾기 시나리오를 검증할 수 있게 했습니다.",
      "Datadog으로 디바이스·OS·언어별 오류를 추적하고 QA 예외 케이스를 Jest와 Cypress 테스트로 전환해 재발을 막았습니다.",
    ],
    thumbnail: "통합회원_서비스이용관리.png",
    links: [{ label: "코웨이몰", href: "https://www.coway.com/" }],
    headline: { value: "DAU 약 5K", label: "통합 인증 서비스 구축과 운영" },
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
      "GA360",
      "Cypress",
      "GitHub Actions",
      "Vite",
      "AWS (S3, CloudFront)",
    ],
    highlights: [
      "Vue 기반 레거시 화면을 React로 전환하고 반복 UI와 비즈니스 로직을 공통 컴포넌트와 Custom Hook으로 재구성했습니다.",
      "setTimeout에 의존하던 매칭 확인을 서버가 내려주는 카운트와 현재 시각 비교 방식으로 바꿔 매칭 정확성을 높였습니다.",
      "Datadog RUM 모니터·얼러트와 GitHub Actions 기반 앱 버전 태깅을 구축해 버전별 에러율을 모니터링할 수 있게 했습니다.",
      "영업 외 문의 약 13%라는 설문 결과를 근거로 제품 선택 기능을 추가하고 운영 시간 외 매칭 예약 기능을 개발했습니다.",
    ],
    thumbnail: "코디매칭_메인_mobile.png",
    links: [{ label: "코디매칭 서비스", href: "https://matching.coway.com/" }],
    headline: {
      value: "영업직원 약 2만 명",
      label: "매칭 서비스를 Vue에서 React로 전환",
    },
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
      "806커밋으로 레포 기여 1위를 기록하며 초기 환경 구축부터 회원·휴면회원 조회, 통계, 검색 필터, 관리자 설정 기능까지 개발했습니다.",
      "WYSIWYG 약관 에디터를 선정·연동하고 약관 매퍼를 개발해 별도 퍼블리싱 없이 약관을 작성하고 배포하는 환경을 만들었습니다.",
      "ISMS-P 인증 심사에 맞춰 세션 유지, 남은 시간 카운트 훅, 로그인 연장 안내 모달을 직접 개발했습니다.",
      "사내 SSO 로그인과 메뉴별 권한 제어를 구현하고 무한 리다이렉트와 페이지 크롤링 제한 이슈를 수정했습니다.",
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
    links: [
      { label: "Portfolio", href: "https://byeongchan.space/portfolio" },
      {
        label: "GitHub Repository",
        href: "https://github.com/MinByeongChan/mbc-devBlog",
      },
    ],
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

/** "AWS (S3, CloudFront)" 같은 표기를 "AWS"로 맞춰 기술 이름을 비교한다. */
export const normalizeSkill = (skill: string) =>
  skill.replace(/\s*\(.*\)\s*$/, "").trim();

/** 해당 기술을 사용한 프로젝트 목록 */
export const getProjectsUsingSkill = (skill: string) => {
  const target = normalizeSkill(skill);
  return projects.filter((project) =>
    project.skills.some((item) => normalizeSkill(item) === target),
  );
};

/** "2024.04 – 2025.10" 같은 기간 문자열을 "2024 – 2025"로 줄인다. */
export const formatYearRange = (period: string) => {
  const segments = period.split(",").map((segment) => segment.trim());
  const [start] = segments[0].split("–").map((part) => part.trim());
  const lastParts = segments[segments.length - 1]
    .split("–")
    .map((part) => part.trim());
  const end = lastParts[1];
  const startYear = start.slice(0, 4);
  if (!end) return startYear;
  const endYear = end === "현재" ? "현재" : end.slice(0, 4);
  return startYear === endYear ? startYear : `${startYear} – ${endYear}`;
};

/** headline이 있는 프로젝트를 시작 시점 최신순으로 반환한다. */
export const getTimelineProjects = () =>
  projects
    .filter((project) => project.headline)
    .sort((a, b) => b.period.localeCompare(a.period));
