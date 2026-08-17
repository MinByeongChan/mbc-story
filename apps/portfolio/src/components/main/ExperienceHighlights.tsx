"use client";

import { Typography } from "gocheok-project";
import { twMerge } from "tailwind-merge";

const summaryItems = [
  { label: "Frontend Career", value: "5+ Years" },
  { label: "Coway Projects", value: "5+ Services" },
  { label: "Main Focus", value: "React / TypeScript" },
];

const experienceItems = [
  {
    title: "운영 안정성",
    description:
      "Sentry, Datadog RUM, Cypress 테스트를 활용해 QA와 운영에서 반복되는 이슈를 추적하고 재발 방지 흐름을 만들었습니다.",
  },
  {
    title: "렌더링 최적화",
    description:
      "API 호출 순서와 화면 컴포지션을 조정해 FCP와 사용자 대기 시간을 줄이고, 화면 단위 로직을 명확하게 분리했습니다.",
  },
  {
    title: "개발 생산성",
    description:
      "공통 템플릿, react-hook-form 기반 폼, 코드 컨벤션과 PR 리뷰 프로세스를 정리해 팀 단위 개발 속도와 일관성을 높였습니다.",
  },
];

export const ExperienceHighlights = () => {
  return (
    <section
      className={twMerge(
        "my-32 border-y border-neutral-800 py-14 text-(--color-neutral-100)",
        "sm:my-40 sm:py-20"
      )}
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <Typography className="text-3xl font-bold sm:text-5xl">
            Experience
          </Typography>
          <Typography className="mt-5 text-sm font-semibold text-(--color-accent-200) sm:text-base">
            코웨이에서 통합회원, 코디매칭, 미국 신사업 어드민 등 대내외
            서비스의 프론트엔드 개발과 운영 대응을 담당했습니다.
          </Typography>

          <dl className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-1">
            {summaryItems.map((item) => (
              <div
                key={item.label}
                className="border-l-2 border-(--color-primary) pl-4"
              >
                <dt className="text-sm text-(--color-accent-200)">
                  {item.label}
                </dt>
                <dd className="mt-1 text-2xl font-bold text-white">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {experienceItems.map((item) => (
            <article
              key={item.title}
              className="border border-neutral-800 bg-neutral-950 p-6"
            >
              <Typography className="text-xl font-bold text-white">
                {item.title}
              </Typography>
              <Typography className="mt-3 text-sm font-semibold text-(--color-accent-200) sm:text-base">
                {item.description}
              </Typography>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
