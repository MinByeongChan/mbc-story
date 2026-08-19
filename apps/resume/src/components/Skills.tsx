import React from 'react';

type SkillGroup = SkillGroupText | SkillGroupList;
type SkillGroupCommon = {
  title: string;
};

type SkillGroupText = {
  type: 'TEXT';
  skills: string;
} & SkillGroupCommon;

type SkillGroupList = {
  type: 'LIST';
  skills: string[];
} & SkillGroupCommon;

const skillGroups: SkillGroup[] = [
  {
    type: 'TEXT',
    title: 'Frontend',
    skills:
      'Next.js, TanStack Query, Tailwind CSS, Styled Components, Sass/SCSS, Storybook, Cypress, Sentry, Datadog(RUM, Dashboard, APM)',
  },
  {
    type: 'LIST',
    title: 'React',
    skills: [
      '재사용성 높은 컴포넌트 생성과 컴포지션으로 관심사 분리를 준수합니다.',
      'UI는 스토어, 서버 데이터는 Tanstack Query를 활용하여 스토어 처리를 최소화합니다.',
      'Atomic, Composition, FSD 등 다양한 디자인패턴 경험을 통해 최적의 디자인패턴을 활용하려고 합니다.',
    ],
  },
  {
    type: 'LIST',
    title: 'Typescript',
    skills: [
      '타입을 활용하여 빌드 및 컴파일 에러를 사전에 방지합니다.',
      '유니온, 인터섹션 등 유틸리티를 활용하여 타입 구성을 합니다.',
    ],
  },
  {
    type: 'LIST',
    title: 'Infra',
    skills: ['AWS (EC2, CloudFront, S3)'],
  },
];

export const Skills = () => (
  <div>
    <p className="mb-6 text-grey-700">현재 업무 또는 사이드 프로젝트에서 사용했던 기술들입니다.</p>
    <dl className="grid grid-cols-1 border-t border-grey-200 sm:grid-cols-[minmax(140px,180px)_minmax(0,1fr)]">
      {skillGroups.map((group) => (
        <React.Fragment key={group.title}>
          <dt className="border-b border-grey-200 py-5">
            <h3>{group.title}</h3>
          </dt>
          {group.type === 'TEXT' && (
            <dd className="border-b border-grey-200 pb-5 sm:py-5">{group.skills}</dd>
          )}
          {group.type === 'LIST' && (
            <dd className="border-b border-grey-200 pb-5 sm:py-5">
              <ul className="m-0">
                {group.skills.map((data) => (
                  <li>{data}</li>
                ))}
              </ul>
            </dd>
          )}
        </React.Fragment>
      ))}
    </dl>
  </div>
);
