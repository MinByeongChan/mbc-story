import React from "react";

type SkillGroup = SkillGroupText | SkillGroupList;
type SkillGroupCommon = {
  title: string;
};

type SkillGroupText = {
  type: "TEXT";
  skills: string;
} & SkillGroupCommon;

type SkillGroupList = {
  type: "LIST";
  skills: string[];
} & SkillGroupCommon;

const skillGroups: SkillGroup[] = [
  {
    type: "TEXT",
    title: "Frontend",
    skills:
      "Next.js, TanStack Query, Tailwind CSS, Styled Components, Sass/SCSS, Storybook, Cypress, Sentry, Datadog(RUM, Dashboard, APM)",
  },
  {
    type: "LIST",
    title: "React",
    skills: ["Tailwind CSS, Styled Components, Sass/SCSS, Storybook"],
  },
  {
    type: "LIST",
    title: "Typescript",
    skills: ["Tailwind CSS, Styled Components, Sass/SCSS, Storybook"],
  },
  {
    type: "LIST",
    title: "Infra",
    skills: ["AWS (EC2, CloudFront, S3)"],
  },
];

export const Skills = () => (
  <div>
    <p className="mb-6 text-grey-700">
      현재 업무 또는 사이드 프로젝트에서 사용했던 기술들입니다.
    </p>
    <dl className="grid grid-cols-1 border-t border-grey-200 sm:grid-cols-[minmax(140px,180px)_minmax(0,1fr)]">
      {skillGroups.map((group) => (
        <React.Fragment key={group.title}>
          <dt className="border-b border-grey-200 py-5">
            <h3>{group.title}</h3>
          </dt>
          {group.type === "TEXT" && (
            <dd className="border-b border-grey-200 pb-5 sm:py-5">
              {group.skills}
            </dd>
          )}
          {group.type === "LIST" && (
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
