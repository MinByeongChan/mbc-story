import React from 'react';

interface ProjectExperience {
  title: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string;
  link?: {
    href: string;
    label: string;
  };
}

interface CompanyExperience {
  company: string;
  location: string;
  period: string;
  role: string;
  projects: ProjectExperience[];
}

const experiences: CompanyExperience[] = [
  {
    company: '코웨이',
    location: '서울',
    period: '2021. 09 - 현재',
    role: 'Frontend Developer',
    projects: [
      {
        title: '배정 어드민 시스템',
        period: '2022. 10 - 2024. 01, 2026. 04 - 현재',
        description:
          '작업자, 일정, 이관과 배정 현황을 지도/목록/캘린더로 확인하고 조정하는 내부 운영 도구.',
        achievements: [
          '배정 시스템의 실시간 모니터링 화면과 서비스 매니저의 작업 현황/이관/구간 설정 기능 개발.',
          'DevTools Heap Snapshot으로 지도 조회 5회 실측, 지도 인스턴스를 싱글턴 방식으로 전환해 조회당 약 290개씩 누적되던 detached DOM을 0개로 줄여 메모리 누수 개선.',
          'Recoil Selector를 기능별 Zustand Store로 재구성하고 서버 상태를 TanStack Query로 분리, 유닛 테스트와 MSW로 기존 동작을 검증해 마이그레이션 완료.',
        ],
        skills: 'React, TypeScript, Zustand, Recoil, TanStack Query',
      },
      // {
      //   title: 'AI 에이전트 기반 개발 업무 개선',
      //   period: '2026. 01 - 현재',
      //   description:
      //     '업무 문서 검색, 반복 코드 전환과 UI 퍼블리싱 등 맥락과 검증이 필요한 개발 업무에 AI 에이전트 적용.',
      //   achievements: [
      //     '로컬 RAG의 인덱싱 대상을 124건에서 346건으로 약 2.8배 확대하고, 85개 청크의 512토큰 초과를 0건으로 줄여 업무 문서 검색 범위 확대 및 임베딩 잘림 제거.',
      //     'Recoil에서 Zustand로 전환하는 AI Skill의 유닛 테스트를 49개에서 71개, 에러 경로를 0건에서 9건으로 확대해 21개 사용처 회귀 0건 달성 및 기존 QA에서 누락된 개발 오류 약 6건 사전 발견.',
      //     'Figma와 기존 소스를 참조하는 AI 퍼블리싱 검증 루프로 신규 SCSS를 898줄에서 165줄로 82% 줄여 기존 스타일 재사용을 확대하고, 버전별 이슈 3~5건을 산출 전 발견/보정.',
      //   ],
      //   skills: 'Claude Code, Claude Code Skill, MCP',
      // },
      {
        title: '통합배정판',
        period: '2026. 01 - 현재',
        description:
          '일 5K~10K뷰, 피크 30K뷰 규모의 설치 업무 배정 플랫폼에 신규 제품 정책 및 성능 모니터링 체계 구축.',
        achievements: [
          '에어컨, 소파, 모션 매트리스 등 신제품 배정 정책을 반영한 운영 화면 개발.',
          'Datadog RUM 대시보드와 모니터링 체계를 구축해 운영 판단 기준 마련.',
          '화면설계서, 회의록과 인수인계 문서를 벡터화한 RAG로 업무 히스토리와 정책 변경 이력을 빠르게 파악해 약 1개월로 예상한 지역설정제 5개 화면 개발을 10일 일정으로 단축해 진행 중.',
        ],
        skills: 'React, TypeScript, TanStack Query, Datadog RUM, Vite, MCP, ChromaDB',
      },
      {
        title: '통합회원 React 마이그레이션',
        period: '2025. 11 - 2026. 05',
        description:
          '30만 회원 규모 통합회원의 Keycloak 의존 로그인/회원 화면을 React/TypeScript 기반 인증 흐름으로 전환.',
        achievements: [
          'Keycloak FreeMarker 템플릿과 리다이렉트에 의존하던 인증 단계를 신규 API 응답 기반의 React 화면 제어 구조로 마이그레이션.',
          '일반/SNS/중복 계정 로그인, 본인인증, 비밀번호 변경 및 reCAPTCHA의 화면 분기와 오류 처리를 프론트엔드 로직으로 재구성해 백엔드 의존도와 코드 복잡도 감소.',
          '약관, CSRF/XSRF 토큰 대응과 로그인 예외 케이스 테스트/문서화를 통해 React 전환 이후 운영 안정성 확보.',
        ],
        skills: 'React, TypeScript, Zustand, Zod, Vite, SCSS, Datadog RUM, Vitest, Cypress, AWS',
      },
      {
        title: '미국 신사업 어드민',
        period: '2024. 04 - 2025. 10',
        description:
          '미국 법인의 WMS 물류 흐름과 회계 대사/전표/원장을 중심으로 OMS 및 작업 관리를 지원하는 통합 백오피스.',
        achievements: [
          '재고실사 및 조정 화면을 개발해 재고 흐름을 확인하고 제어하는 환경 구축.',
          '출고/배차/창고이동/재고 추적 기능을 개발해 출고부터 입고까지의 물류 흐름을 어드민에서 제어하는 환경 구축.',
          '전표/원장/합계잔액 시산표/반제 기능을 개발해 회계 업무 프로세스 구축.',
          'TanStack Query 호출/캐시 구조 개선으로 화면 지연을 최대 약 3초에서 1초로 단축.',
        ],
        skills: 'React, TypeScript, TanStack Query, Recoil, MUI, React Hook Form, Sentry, Vite',
      },
      {
        title: '통합회원 서비스',
        period: '2023. 05 - 2024. 04',
        description:
          '레거시와 신규 서비스의 회원을 통합하는 30만 회원/DAU 약 5K 규모의 B2C 플랫폼.',
        achievements: [
          '회원가입, 로그인, 계정 찾기, 마이페이지와 회원 마이그레이션 등 핵심 사용자 흐름 개발.',
          'WCAG 2.1 기준 반영 및 디바이스/브라우저별 예외 처리를 통한 고객용 인증 화면의 접근성과 호환성 개선.',
          'DDD 패턴을 적용해 회원가입/OTP/계정 모델과 Hook을 도메인 단위로 분리하여 신규 기능 추가 시 변경 영향 범위 축소.',
          'Datadog 기반 디바이스/OS/언어별 런타임 오류 추적, QA 예외 케이스를 Jest/Cypress 테스트로 전환해 재발 방지.',
        ],
        skills: 'Vue 3, TypeScript, Pinia, SCSS, Datadog, Jest, Storybook, Cypress, AWS',
        link: {
          href: 'https://www.coway.com/',
          label: '코웨이몰',
        },
      },
      {
        title: '실시간 코디매칭 서비스',
        period: '2022. 04 - 2023. 11',
        description:
          '약 2만 명의 영업직원과 고객을 연결하고 신청/대기/수락/실패/재시도 상태를 Polling으로 처리하는 비대면 매칭 플랫폼.',
        achievements: [
          'Vue 기반 레거시 화면을 React로 전환하고 반복 UI와 비즈니스 로직을 공통 컴포넌트/Custom Hook으로 재구성.',
          'TanStack Query의 서버 상태와 Jotai의 화면 상태를 분리하고 API 응답/호출 순서를 조정해 상태 불일치 구간 개선.',
          'CS 사례와 Datadog RUM 기반 오류 추적, 신청부터 재시도까지의 핵심 흐름을 Cypress E2E 테스트와 CI/CD에 연결.',
        ],
        skills: 'React, TypeScript, TanStack Query, Jotai, Datadog RUM, Cypress, Vite, AWS',
        link: {
          href: 'https://matching.coway.com/',
          label: '코디매칭 서비스',
        },
      },
      {
        title: '통합회원 어드민',
        period: '2021. 11 - 2024. 05',
        description:
          '코웨이몰과 ioCare 등 여러 서비스의 일반/휴면 회원, 약관, 로그와 관리자 권한을 관리하는 내부 운영 도구.',
        achievements: [
          '프로젝트 초기 환경 구축과 회원/휴면회원 조회, 통계, 회원 검색 필터 및 관리자 설정 기능 개발.',
          '약관 에디터와 통합회원 약관 매퍼 개발을 통해 별도 퍼블리싱 없는 약관 작성/배포 환경 구축.',
          '사내 SSO 로그인과 ISMS-P 심사 대응.',
        ],
        skills: 'React, TypeScript, Redux Toolkit, Redux Thunk, Emotion, AWS, Cypress, Jest',
      },
    ],
  },
  {
    company: 'KSNET',
    location: '서울',
    period: '2020. 02 - 2021. 09',
    role: 'Web/App Developer',
    projects: [
      {
        title: 'KSTA Mobile 및 사내 기술 공유 서비스',
        period: '2020. 04 - 2021. 09',
        description:
          '가맹점 매출 정보를 확인하는 KSTA Mobile 리뉴얼 및 사내 개발 이슈와 기술 자료 공유 서비스 구축.',
        achievements: [
          '모바일 환경의 VAN/PG 매출 정보 조회 화면 개발 및 서비스 유지보수.',
          '기술본부의 개발 이슈 관리와 영업 지원을 위한 사내 웹 페이지 구현.',
        ],
        skills: 'JavaScript, React, Redux, jQuery, HTML5, CSS',
      },
    ],
  },
];

interface ExperienceProjectProps {
  project: ProjectExperience;
}

const ExperienceProject = ({ project }: ExperienceProjectProps) => (
  <article className="border-b border-grey-200 pb-6">
    <div className="flex flex-col items-start justify-between gap-1 sm:flex-col sm:items-baseline sm:gap-2">
      <h4>{project.title}</h4>
      <small className="shrink-0">{project.period}</small>
    </div>
    <p className="mt-2">{project.description}</p>
    <ul className="resume-bullet-list">
      {project.achievements.map((achievement) => (
        <li key={achievement}>{achievement}</li>
      ))}
    </ul>
    <small className="block">{project.skills}</small>
    {project.link && (
      <a
        className="mt-3 inline-block text-blue-600 underline decoration-blue-300 underline-offset-4 hover:text-blue-700"
        href={project.link.href}
        rel="noreferrer"
        target="_blank">
        {project.link.label} ↗
      </a>
    )}
  </article>
);

export const Experience = () => (
  <div className="space-y-14">
    {experiences.map((experience) => (
      <section
        className="grid grid-cols-1 gap-4 sm:grid-cols-[minmax(140px,180px)_minmax(0,1fr)] sm:gap-8"
        key={experience.company}>
        <div className="space-y-1">
          <p>{experience.period}</p>
          <h3 className="flex items-center gap-2">{experience.company}</h3>
          <small>
            {experience.role} · {experience.location}
          </small>
        </div>
        <div className="space-y-8">
          {experience.projects.map((project) => (
            <ExperienceProject key={project.title} project={project} />
          ))}
        </div>
      </section>
    ))}
  </div>
);
