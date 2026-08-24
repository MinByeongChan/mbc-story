import React from 'react';

interface OtherExperienceItem {
  title: string;
  details: string[];
}

const otherExperiences: OtherExperienceItem[] = [
  {
    title: '포트폴리오 및 이력서',
    details: [
      'Next.js 기반 포트폴리오와 웹 이력서를 직접 설계하고 운영하고 있습니다.',
      '프로젝트 상세 내용을 Markdown으로 관리하고 동적 라우팅, sitemap, robots 설정을 적용했습니다.',
    ],
  },
  {
    title: '디자인 시스템',
    details: [
      'Primitive token과 semantic token을 분리해 확장 가능한 디자인 토큰 구조를 설계했습니다.',
      '여러 앱에서 공통 값을 재사용할 수 있도록 workspace 패키지로 관리하고 있습니다.',
    ],
  },
  {
    title: '모노레포 구성',
    details: [
      'Next.js와 Vite 앱을 pnpm workspace 기반 모노레포에서 함께 관리하고 있습니다.',
      '공통 TypeScript 설정과 패키지를 공유하고 workspace filter로 개발·검증 명령을 실행합니다.',
    ],
  },
];

export const OtherExperience = () => (
  <div className="space-y-8">
    {otherExperiences.map((experience) => (
      <section key={experience.title}>
        <h3>{experience.title}</h3>
        <ul className="resume-bullet-list">
          {experience.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </section>
    ))}
  </div>
);
