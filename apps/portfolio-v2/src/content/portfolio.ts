export type ProjectKind = "Coway" | "Personal";

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Strength = {
  title: string;
  description: string;
};

export type Experience = {
  period: string;
  company: string;
  team: string;
  role: string;
  stacks: string[];
  summary: string;
};

export type Project = {
  slug: string;
  title: string;
  kind: ProjectKind;
  period: string;
  role: string;
  description: string;
  image: string;
  imageAlt: string;
  stacks: string[];
  outcomes: string[];
  detail: {
    overview: string;
    responsibilities: string[];
    problemSolving: string[];
    learned: string[];
    gallery: string[];
  };
};

export const profile = {
  name: "민병찬",
  title: "Frontend Developer",
  email: "mbc0481@naver.com",
  github: "https://github.com/minbyeongchan",
  resume: "/portfolio/Resume.pdf",
  summary:
    "React와 TypeScript를 중심으로 대내외 서비스를 만들고 운영 이슈를 줄이는 프론트엔드 개발자입니다.",
  focus:
    "코웨이에서 통합회원, 실시간 코디매칭, 미국 신사업 어드민, 뉴스레터 등 고객과 운영자가 사용하는 화면을 개발했습니다.",
};

export const strengths: Strength[] = [
  {
    title: "운영 이슈를 줄이는 화면 설계",
    description:
      "Sentry, Datadog RUM, Cypress를 활용해 QA와 운영에서 반복되는 이슈를 추적하고 재발 방지 흐름으로 연결합니다.",
  },
  {
    title: "도메인 흐름 기반 컴포넌트 구성",
    description:
      "API 호출 순서, 사용자 상태, 권한 조건을 먼저 정리한 뒤 화면과 훅의 책임을 나눠 유지보수 비용을 줄입니다.",
  },
  {
    title: "팀 단위 생산성 개선",
    description:
      "공통 템플릿, 코드 컨벤션, PR 리뷰 프로세스를 정리해 여러 명이 같은 기준으로 개발할 수 있게 만듭니다.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Vue3",
      "Vite",
      "Tailwind CSS",
      "Emotion",
      "SCSS",
    ],
  },
  {
    title: "State & Data",
    items: [
      "TanStack Query",
      "Recoil",
      "Jotai",
      "Pinia",
      "Redux Toolkit",
      "React Hook Form",
      "OpenAPI",
    ],
  },
  {
    title: "Quality & Ops",
    items: [
      "Vitest",
      "Jest",
      "Cypress",
      "Storybook",
      "Sentry",
      "Datadog RUM",
      "AWS S3",
      "CloudFront",
      "EC2",
    ],
  },
];

export const experiences: Experience[] = [
  {
    period: "2021.10 - 현재",
    company: "Coway",
    team: "프론트엔드 개발",
    role: "Frontend Engineer",
    stacks: ["React", "TypeScript", "Vue3", "Vite", "AWS", "Cypress"],
    summary:
      "통합회원, 코디매칭, 미국 신사업 어드민, 뉴스레터 등 고객과 내부 운영자가 사용하는 대내외 서비스를 개발했습니다.",
  },
  {
    period: "2020.02 - 2021.09",
    company: "KSNET",
    team: "모바일 파트",
    role: "Web / App Developer",
    stacks: ["JavaScript", "HTML5", "CSS", "jQuery"],
    summary:
      "VAN/PG 가맹점 매출 정보 확인 앱과 내부 기술 공유 사이트를 개발하고 운영했습니다.",
  },
];

export const projects: Project[] = [
  {
    slug: "abc-admin",
    title: "ABC Admin",
    kind: "Coway",
    period: "2024.04 - 현재",
    role: "Frontend Engineer",
    description:
      "코웨이 미국 신사업을 위한 내부 어드민입니다. 주문, 물류, 작업, 테크니션, 회계, 시스템 메뉴를 제공합니다.",
    image: "/work/abcAdmin/cover.png",
    imageAlt: "ABC Admin home dashboard",
    stacks: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Recoil",
      "MUI",
      "Emotion",
      "Vitest",
      "AWS EC2",
    ],
    outcomes: [
      "API 호출 순서와 화면 렌더링 구조를 정리해 지연 시간을 줄였습니다.",
      "react-hook-form 기반 공통 템플릿으로 반복 화면 개발 비용을 낮췄습니다.",
      "Sentry, 코드 오너, PR 리뷰 프로세스로 운영 이슈 대응 흐름을 개선했습니다.",
    ],
    detail: {
      overview:
        "미국 법인 운영자가 주문, 물류, 작업 배정, 회계, 시스템 권한을 처리하는 어드민입니다. 여러 도메인 메뉴가 한 제품 안에서 이어지기 때문에 공통 템플릿과 타입 안정성이 중요했습니다.",
      responsibilities: [
        "WMS 출고, 창고이동, 재고 실사, 재고 조정, 작업 배정 화면 개발",
        "OpenAPI 기반 API 타입과 query params 기반 호출 제어 구성",
        "기획자 피드백 수집을 위한 Google Sheets 연동 기능 개발",
      ],
      problemSolving: [
        "불필요한 API 호출과 순서 문제를 BE, 기획, FE와 조율해 지연 시간을 줄였습니다.",
        "50개 이상 화면에서 반복되던 폼 구조를 react-hook-form 기반 템플릿으로 통합했습니다.",
        "Sentry에 잡힌 타입 에러와 비정상 호출을 Jira로 공유해 수정 리드타임을 줄였습니다.",
      ],
      learned: [
        "어드민은 화면 수보다 공통 규칙과 권한 흐름을 먼저 정리해야 변경 비용이 낮아집니다.",
        "운영자가 실제로 사용하는 테이블, 폼, 상세 화면은 도메인 언어와 타입을 맞추는 것이 중요합니다.",
      ],
      gallery: ["/work/abcAdmin/cover.png", "/work/abcAdmin/dashboard.png"],
    },
  },
  {
    slug: "account-service",
    title: "통합회원",
    kind: "Coway",
    period: "2023.05 - 2024.04",
    role: "Frontend Engineer",
    description:
      "코웨이 구서비스와 신규 서비스 회원을 통합하는 서비스입니다. 회원가입, 로그인, 계정찾기, 마이페이지, 본인인증 흐름을 제공합니다.",
    image: "/work/accountService/cover.png",
    imageAlt: "Integrated account service management screen",
    stacks: [
      "Vue3",
      "TypeScript",
      "Pinia",
      "Vite",
      "SCSS",
      "Jest",
      "Storybook",
      "Cypress",
    ],
    outcomes: [
      "QA에서 발견된 이슈를 테스트 케이스로 전환해 재발 가능성을 낮췄습니다.",
      "다국어, 본인인증, Keycloak 흐름에서 사용자 상태를 안정적으로 처리했습니다.",
      "개발자 테스트 서버로 휴면 계정, 토큰, 회원 정보 검증 과정을 단축했습니다.",
    ],
    detail: {
      overview:
        "코웨이몰, iocare 등 여러 서비스의 회원 경험을 하나의 인증 흐름으로 통합하는 프로젝트입니다. 계정 상태, 본인인증, 다국어, 리다이렉트 흐름을 안정적으로 다루는 것이 핵심이었습니다.",
      responsibilities: [
        "회원가입, 로그인, 계정찾기, 마이페이지 핵심 화면 개발",
        "NICE 본인인증 SDK 개발 및 CDN 제공",
        "미국 신사업 통합회원 화면과 AWS 배포 환경 구성",
      ],
      problemSolving: [
        "Vue2에서 Vue3로 전환하며 드러난 QA 이슈를 Jest와 Cypress 케이스로 고정했습니다.",
        "Keycloak 리다이렉트 로그인 특성상 어려웠던 로컬 테스트 흐름을 개발 서버로 보완했습니다.",
        "Datadog RUM에 필요한 사용자 상태 데이터를 적재해 운영 이슈 추적을 쉽게 만들었습니다.",
      ],
      learned: [
        "인증 서비스는 정상 플로우보다 예외 상태와 리다이렉트 복귀 처리가 제품 품질을 좌우합니다.",
        "다국어 문구와 입력 검증은 화면 레이아웃, 접근성, 테스트를 함께 고려해야 합니다.",
      ],
      gallery: ["/work/accountService/cover.png", "/work/accountService/login.png"],
    },
  },
  {
    slug: "newsletter",
    title: "뉴스레터",
    kind: "Coway",
    period: "2024.04 - 현재",
    role: "Frontend Engineer",
    description:
      "코웨이 미국 신사업 고객에게 제품, 프로모션, 브랜드 콘텐츠를 전달하기 위한 구독 기반 페이지입니다.",
    image: "/work/newsletter/cover.png",
    imageAlt: "Newsletter landing screen",
    stacks: ["Vue3", "TypeScript", "Pinia", "Vite", "SCSS", "VeeValidate"],
    outcomes: [
      "이메일 구독 신청, 완료, 유효성 검증 화면을 연결했습니다.",
      "영문 문구 길이와 반응형 레이아웃을 함께 고려해 다국어 화면을 구성했습니다.",
      "S3와 CloudFront 정적 배포 환경에서 캐시 반영 흐름을 확인했습니다.",
    ],
    detail: {
      overview:
        "미국 신사업 고객에게 프로모션과 브랜드 콘텐츠를 전달하기 위한 가벼운 구독 페이지입니다. 짧은 폼일수록 상태 메시지와 반응형 안정성이 중요했습니다.",
      responsibilities: [
        "이메일 입력, 약관 동의, 구독 완료 화면 플로우 개발",
        "VeeValidate 기반 이메일 유효성 검증 및 에러 메시지 처리",
        "S3, CloudFront 기반 정적 배포 환경 확인",
      ],
      problemSolving: [
        "다국어 문구 길이 차이로 레이아웃이 깨지지 않도록 폼과 완료 화면을 조정했습니다.",
        "구독 완료와 검증 실패 상태를 명확히 분리해 사용자 피드백을 빠르게 제공했습니다.",
      ],
      learned: [
        "작은 페이지라도 입력 상태, 검증 문구, 배포 캐시까지 운영 관점에서 확인해야 합니다.",
        "글로벌 고객 대상 UI는 문구 길이를 전제로 한 레이아웃 여유가 필요합니다.",
      ],
      gallery: ["/work/newsletter/cover.png", "/work/newsletter/validation.png"],
    },
  },
  {
    slug: "cody-matching",
    title: "실시간 코디매칭",
    kind: "Coway",
    period: "2022.04 - 2023.11",
    role: "Frontend Engineer",
    description:
      "고객이 웹에서 코디 매칭을 신청하고 코디가 알림톡으로 매칭을 확인하는 렌탈 영업 지원 서비스입니다.",
    image: "/work/codyMatching/cover.png",
    imageAlt: "Cody matching mobile main screen",
    stacks: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Jotai",
      "Vite",
      "Cypress",
      "AWS S3",
      "CloudFront",
    ],
    outcomes: [
      "Vue 기반 레거시 화면을 React 환경으로 마이그레이션했습니다.",
      "setTimeout 중심 매칭 확인을 서버 정책 기반 흐름으로 바꿔 안정성을 높였습니다.",
      "Datadog RUM, GA360, Cypress로 운영과 마케팅 데이터를 함께 관리했습니다.",
    ],
    detail: {
      overview:
        "오프라인 중심 렌탈 상담을 웹 매칭 흐름으로 전환한 서비스입니다. 고객 신청, 코디 확인, 실패/성공 상태가 짧은 시간 안에 정확히 이어져야 했습니다.",
      responsibilities: [
        "Vue 레거시 화면을 React, TanStack Query, Jotai 기반으로 마이그레이션",
        "매칭 신청, 연결, 성공, 실패, 알림톡 확인 페이지 개발",
        "GA360과 Datadog RUM 연동 및 Cypress E2E 케이스 작성",
      ],
      problemSolving: [
        "브라우저 탭 전환으로 setTimeout이 부정확해지는 문제를 현재 시간 비교와 서버 정책 기반 흐름으로 개선했습니다.",
        "비정상적인 브라우저 히스토리 접근을 상태값과 onpopstate로 제어했습니다.",
        "관심 제품, 예약 기능 등 운영 정책 변경을 화면 플로우에 반영했습니다.",
      ],
      learned: [
        "실시간처럼 느껴지는 서비스는 프론트 타이머보다 서버 정책과 상태 동기화가 중요합니다.",
        "운영 이벤트가 많은 서비스는 E2E 테스트가 배포 안정성의 실질적인 안전장치가 됩니다.",
      ],
      gallery: ["/work/codyMatching/cover.png", "/work/codyMatching/form.png"],
    },
  },
  {
    slug: "tech-blog",
    title: "기술 블로그",
    kind: "Personal",
    period: "2022.01 - 현재",
    role: "Owner",
    description:
      "개발 기록과 학습 내용을 정리하는 개인 기술 블로그입니다. Markdown 기반 콘텐츠와 포트폴리오 아카이브를 관리합니다.",
    image: "/work/techBlog/cover.png",
    imageAlt: "Technical blog main screen",
    stacks: ["React", "TypeScript", "Markdown", "Vercel"],
    outcomes: [
      "학습 내용을 반복해서 구조화하며 기술 설명력을 높였습니다.",
      "Markdown 렌더링과 콘텐츠 관리 방식을 직접 구현했습니다.",
      "포트폴리오와 블로그를 함께 관리하는 개인 브랜딩 채널로 확장했습니다.",
    ],
    detail: {
      overview:
        "개발 기록과 학습 내용을 장기적으로 쌓기 위한 개인 블로그입니다. 여러 번 구조를 바꾸며 콘텐츠 관리와 렌더링 방식을 실험했습니다.",
      responsibilities: [
        "Markdown 기반 포스트 렌더링 구현",
        "개인 포트폴리오와 블로그 콘텐츠 구조 정리",
        "Vercel 기반 배포 흐름 관리",
      ],
      problemSolving: [
        "외부 CMS 의존으로 느려지는 흐름을 로컬 콘텐츠 관리로 전환했습니다.",
        "SPA 구조에서 콘텐츠 로딩과 SEO 사이의 장단점을 체감하고 다음 버전 개선 방향을 정리했습니다.",
      ],
      learned: [
        "개인 도구도 운영하면서 유지보수 비용을 줄이는 구조가 필요합니다.",
        "글을 쓰며 기술 의사결정을 설명하는 힘을 함께 훈련할 수 있었습니다.",
      ],
      gallery: ["/work/techBlog/cover.png"],
    },
  },
];
