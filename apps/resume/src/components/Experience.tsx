import React from "react";

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
  description: string;
  projects: ProjectExperience[];
}

const experiences: CompanyExperience[] = [
  {
    company: "코웨이",
    location: "서울",
    period: "2021. 09 - 현재",
    role: "Frontend Developer",
    description:
      "생활가전 서비스의 고객용 웹과 사내 운영 어드민을 개발하고 있습니다. 기획·백엔드·프론트엔드 팀과 협업하며 신규 서비스 구축부터 운영 안정화까지 담당했습니다.",
    projects: [
      {
        title: "미국 신사업 어드민",
        period: "2024. 04 - 현재",
        description:
          "미국 사업의 주문, 배정, 물류, 회계와 시스템 운영을 지원하는 내부 어드민 서비스입니다.",
        achievements: [
          "React Hook Form의 Controller와 register 방식을 함께 지원하는 폼 템플릿을 설계해 반복되는 입력 화면의 구현 방식을 표준화했습니다.",
          "기획·백엔드와 API 호출 순서와 렌더링 구조를 조율하고, 공통 로직을 분리해 메뉴별 코드 일관성과 유지보수성을 높였습니다.",
          "GitHub Actions, CODEOWNERS, Husky를 적용해 코드 검증 과정을 자동화하고 Sentry와 테스트 코드로 운영 오류의 재발을 방지했습니다.",
        ],
        skills:
          "React, TypeScript, TanStack Query, Recoil, MUI, React Hook Form, Sentry, Vite",
      },
      {
        title: "통합회원 서비스 및 어드민",
        period: "2021. 11 - 2024. 04",
        description:
          "코웨이의 여러 서비스를 하나의 회원 체계로 연결하고, 회원과 약관을 관리하는 운영 도구를 개발했습니다.",
        achievements: [
          "회원가입, 로그인, 계정 찾기, 마이페이지와 회원 마이그레이션 화면을 구축했습니다.",
          "권한에 따라 메뉴 접근을 제어하고, 서비스 스타일이 반영되는 약관 에디터를 구현해 운영 효율을 높였습니다.",
          "Vue 2에서 Vue 3로 전환하며 Jest와 Cypress 테스트를 보강해 리팩터링 이후 발생한 회귀 이슈를 관리했습니다.",
        ],
        skills:
          "React, Vue 3, TypeScript, Pinia, Redux Toolkit, SCSS, Jest, Storybook, Cypress",
        link: {
          href: "https://www.coway.com/",
          label: "코웨이몰",
        },
      },
      {
        title: "코디매칭 서비스",
        period: "2022. 04 - 2023. 11",
        description:
          "고객이 온라인으로 원하는 코디를 찾아 상담과 렌탈 서비스를 신청할 수 있는 웹 서비스입니다.",
        achievements: [
          "Vue 기반 화면을 React로 마이그레이션하며 중복 컴포넌트와 비즈니스 로직을 공통화했습니다.",
          "브라우저 타이머에 의존하던 매칭 판정 로직을 백엔드와 함께 재설계해 탭 비활성화 상황에서도 안정적으로 동작하도록 개선했습니다.",
          "Datadog RUM, Cypress, GA360과 배포 자동화를 적용해 오류 추적, 회귀 테스트와 서비스 지표 수집 기반을 마련했습니다.",
        ],
        skills:
          "React, TypeScript, TanStack Query, Jotai, Cypress, Datadog RUM, Vite, AWS",
        link: {
          href: "https://matching.coway.com/",
          label: "코디매칭 서비스",
        },
      },
    ],
  },
  {
    company: "KSNET",
    location: "서울",
    period: "2020. 02 - 2021. 09",
    role: "Web/App Developer",
    description:
      "VAN·PG 서비스를 제공하는 KSNET의 모바일 파트에서 가맹점용 웹과 앱을 개발하고 운영했습니다.",
    projects: [
      {
        title: "KSTA Mobile 및 사내 기술 공유 서비스",
        period: "2020. 04 - 2021. 09",
        description:
          "가맹점 매출 정보를 확인하는 KSTA Mobile을 리뉴얼하고, 사내 개발 이슈와 기술 자료를 공유하는 서비스를 구축했습니다.",
        achievements: [
          "가맹점이 모바일 환경에서 VAN·PG 매출 정보를 조회할 수 있는 웹 화면을 개발하고 서비스를 유지보수했습니다.",
          "기술본부의 개발 이슈 관리와 영업 지원을 위한 사내 웹 페이지를 구현했습니다.",
        ],
        skills: "JavaScript, React, Redux, jQuery, HTML5, CSS",
      },
    ],
  },
];

interface ExperienceProjectProps {
  project: ProjectExperience;
}

const ExperienceProject = ({ project }: ExperienceProjectProps) => (
  <article className="border-t border-grey-200 pt-6">
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
        target="_blank"
      >
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
        key={experience.company}
      >
        <div className="space-y-1">
          <p>{experience.period}</p>
          <h3 className="flex items-center gap-2">{experience.company}</h3>
          <small>
            {experience.role} · {experience.location}
          </small>
        </div>
        <div className="space-y-8">
          <p>{experience.description}</p>
          {experience.projects.map((project) => (
            <ExperienceProject key={project.title} project={project} />
          ))}
        </div>
      </section>
    ))}
  </div>
);
