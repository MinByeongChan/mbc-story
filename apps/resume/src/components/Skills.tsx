import React from 'react';

interface SkillGroup {
  title: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    skills: [
      'Next.js, TanStack Query',
      'Tailwind CSS, Styled Components, Sass/SCSS, Storybook',
      'Cypress, Sentry, Datadog(RUM, Dashboard, APM)',
    ],
  },
  {
    title: 'React',
    skills: [
      '재사용성 높은 컴포넌트 생성과 컴포지션으로 관심사 분리를 준수합니다.',
      'UI는 스토어, 서버 데이터는 Tanstack Query를 활용하여 스토어 처리를 최소화합니다.',
      'Atomic, Composition, FSD 등 다양한 디자인패턴 경험을 통해 최적의 디자인패턴을 활용하려고 합니다.',
    ],
  },
  {
    title: 'Typescript',
    skills: [
      '타입을 활용하여 빌드 및 컴파일 에러를 사전에 방지합니다.',
      '유니온, 인터섹션 등 유틸리티를 활용하여 타입 구성을 합니다.',
    ],
  },
  {
    title: 'Infra',
    skills: [
      'AWS S3, CloudFront, Lambda를 활용할 수 있습니다.',
      'CloudFront를 통해 내/외부망 연결 및 커스텀 헤더를 통해 캐싱제어 등 경험이 있습니다.',
    ],
  },
];

export const Skills = () => (
  <div>
    <p className="mb-6 text-grey-700">현재 업무 또는 사이드 프로젝트에서 사용했던 기술들입니다.</p>
    <dl className="grid grid-cols-1 border-t border-grey-200 sm:grid-cols-[minmax(140px,180px)_minmax(0,1fr)]">
      {skillGroups.map((group) => (
        <React.Fragment key={group.title}>
          <dt className="border-b border-grey-200 py-5 sm:py-2">
            <h3>{group.title}</h3>
          </dt>
          <dd className="border-b border-grey-200 pb-5 sm:py-2">
            <ul className="resume-bullet-list resume-bullet-list--flush">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </dd>
        </React.Fragment>
      ))}
    </dl>
  </div>
);
