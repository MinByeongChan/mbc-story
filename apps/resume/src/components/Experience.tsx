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
        title: 'AI 에이전트 기반 개발 업무 개선',
        period: '2026. 01 - 현재',
        description:
          '분산된 업무 문서 검색과 반복 코드 전환, UI 퍼블리싱처럼 맥락과 검증이 필요한 개발 업무에 AI 에이전트를 적용했습니다.',
        achievements: [
          '화면설계서, 회의록, 인수인계 문서와 용어를 ChromaDB에 벡터화하고 MCP로 검색하는 로컬 RAG 환경을 구축했습니다.',
          'Recoil에서 Zustand로 전환하는 반복 작업을 AI Skill로 구성하고 영향도 분석, 기준 테스트, 변환과 결과 검증 절차를 표준화했습니다.',
          'Figma와 기존 소스를 함께 참조하는 디자인시스템 기반 AI 퍼블리싱 방식을 도입하여 외주 비용 및 기획과의 소통 병목현상을 줄이는데 기여했습니다.',
        ],
        skills: 'Claude Code, Claude Code Skill, MCP, ChromaDB, Figma',
      },
      {
        title: '통합배정판 및 Datadog 모니터링',
        period: '2026. 01 - 현재',
        description:
          '설치 업무를 배정하는 운영 플랫폼에 신규 제품 정책을 반영하고 사용자 흐름과 성능을 관찰할 수 있는 모니터링 체계를 구축했습니다.',
        achievements: [
          '에어컨과 소파 등 신규 제품의 배정 정책 UI, 슬롯 구간 컴포넌트와 배정 관련 모달을 개발했습니다.',
          'Datadog RUM 대시보드에서 LCP/FCP, 오류율, 브라우저, 작업자/주문 유형별 지표를 구성해 성능 저하 원인을 추적했습니다.',
          '배정 전환율과 이탈 구간을 확인할 수 있도록 세션 집계 기준과 대시보드를 정리해 운영 판단 기반을 마련했습니다.',
        ],
        skills: 'React, TypeScript, TanStack Query, Datadog RUM, Vite',
      },
      {
        title: '배정관리툴 및 전국 모니터링',
        period: '2022. 10 - 2024. 01, 2026. 04 - 현재',
        description:
          '지점장과 운영자가 작업자, 일정, 이관과 배정 현황을 지도/목록/캘린더로 확인하고 조정하는 내부 운영 도구입니다.',
        achievements: [
          'Naver Map 기반 마커/폴리곤/범례/툴팁과 react-big-calendar 기반 주간/월간 작업자 일정 화면을 개발했습니다.',
          '수천 개 단위 마커 렌더링 병목을 분석하고 지도와 목록의 표시 기준/렌더링 범위를 조정해 운영 화면 사용성을 개선했습니다.',
          '분산된 Recoil Atom/Selector를 기능별 Zustand Store로 재구성하고 서버 상태를 TanStack Query로 분리했으며, Characterization Test와 MSW로 기존 동작을 검증했습니다.',
        ],
        skills:
          'React, TypeScript, Zustand, Recoil, TanStack Query, Naver Map, react-big-calendar, MSW',
      },
      {
        title: '미국 신사업 어드민',
        period: '2024. 04 - 2025. 10',
        description:
          '미국 법인의 모니터링, OMS, WMS, 작업 관리와 회계 업무를 지원하는 통합 백오피스입니다.',
        achievements: [
          '화면 진입 시 필요한 데이터와 사용자 액션 이후 데이터를 분리하고 TanStack Query 호출/캐시 흐름을 정리해 최대 3초 수준의 지연을 약 1초로 개선했습니다.',
          'LNB, 데이터 테이블, 검색 폼과 React Hook Form 기반 입력 구조를 공통 컴포넌트/Custom Hook으로 분리해 반복 구현을 줄였습니다.',
          'FSD와 Composition 패턴으로 메뉴별 도메인, UI와 공통 로직의 책임을 분리해 변경 영향 범위와 유지보수 비용을 줄였습니다.',
          '운영자 작업 흐름을 기준으로 화면과 API 구조를 기획/백엔드와 조율하고, 개발 환경에서 기획자가 직접 피드백을 남기는 내부 헬프데스크 기능으로 협업 주기를 단축했습니다.',
          'Sentry로 런타임 오류를 추적하고 Vitest와 GitHub Actions로 테스트와 코드 검증을 자동화했습니다.',
        ],
        skills:
          'React, TypeScript, TanStack Query, Recoil, MUI, React Hook Form, Sentry, Vitest, Vite',
      },
      {
        title: '통합회원 서비스 및 어드민',
        period: '2021. 11 - 2024. 04',
        description:
          '레거시와 신규 서비스의 회원을 통합하는 30만 회원/DAU 약 5천 규모의 B2C 플랫폼과 운영 어드민을 개발했습니다.',
        achievements: [
          '회원가입, 로그인, 계정 찾기, 마이페이지와 회원 마이그레이션 등 핵심 사용자 흐름을 개발하고 WCAG 2.1 접근성과 크로스 브라우징 이슈에 대응했습니다.',
          'Datadog으로 디바이스/OS/언어별 런타임 오류를 추적하고 QA에서 발견한 예외 케이스를 Jest/Cypress 테스트로 전환해 재발을 방지했습니다.',
          '회원 조회/권한/통계/약관 관리 기능과 서비스 스타일을 반영한 에디터를 구현해 운영자가 회원 체계를 관리할 수 있도록 했습니다.',
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
          '약 2만 명의 영업직원과 고객을 연결하며 신청/대기/수락/실패/재시도 상태를 Polling으로 처리하는 비대면 매칭 플랫폼입니다.',
        achievements: [
          'Vue 기반 레거시 화면을 React로 전환하고 반복 UI와 비즈니스 로직을 공통 컴포넌트/Custom Hook으로 재구성했습니다.',
          'TanStack Query가 서버 데이터 생명주기를, Jotai가 화면 상태를 담당하도록 분리하고 백엔드와 API 응답/호출 순서를 조정해 상태 불일치 구간을 개선했습니다.',
          'CS 사례와 Datadog RUM 기록으로 오류를 추적하고 신청부터 재시도까지의 핵심 흐름을 Cypress E2E 테스트와 CI/CD에 연결했습니다.',
        ],
        skills: 'React, TypeScript, TanStack Query, Jotai, Datadog RUM, Cypress, Vite, AWS',
        link: {
          href: 'https://matching.coway.com/',
          label: '코디매칭 서비스',
        },
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
          '가맹점 매출 정보를 확인하는 KSTA Mobile을 리뉴얼하고, 사내 개발 이슈와 기술 자료를 공유하는 서비스를 구축했습니다.',
        achievements: [
          '가맹점이 모바일 환경에서 VAN/PG 매출 정보를 조회할 수 있는 웹 화면을 개발하고 서비스를 유지보수했습니다.',
          '기술본부의 개발 이슈 관리와 영업 지원을 위한 사내 웹 페이지를 구현했습니다.',
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
