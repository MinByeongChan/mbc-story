"use client";

import { Typography } from "gocheok-project";
import { twMerge } from "tailwind-merge";

const summaryItems = [
  { label: "Frontend Career", value: "6+ Years" },
  { label: "Coway Projects", value: "7 Services" },
  { label: "Main Focus", value: "React / TypeScript" },
];

const experienceItems = [
  {
    title: "성능 개선",
    description:
      "TanStack Query 호출·캐시 구조를 개선해 미국 신사업 어드민의 화면 지연을 최대 약 3초에서 1초로 줄였고, 지도 인스턴스를 싱글턴으로 전환해 조회당 약 290개씩 쌓이던 detached DOM을 0개로 만들었습니다.",
  },
  {
    title: "운영 안정성",
    description:
      "30만 회원, DAU 약 5K 규모의 통합회원 서비스를 운영하고 React로 마이그레이션했습니다. Datadog RUM, Sentry, Cypress로 운영 이슈를 추적하고 QA 예외 케이스를 테스트로 고정해 재발을 막습니다.",
  },
  {
    title: "개발 생산성과 AI 활용",
    description:
      "react-hook-form 기반 공통 템플릿, 코드 컨벤션, PR 리뷰 프로세스로 팀 개발 속도를 높였고, 업무 문서를 벡터화한 로컬 RAG와 에이전트 스킬을 팀에 도입해 AI 기반 개발 정확도를 높이고 있습니다.",
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
          <Typography className="block text-3xl font-bold sm:text-5xl">
            Experience
          </Typography>
          <Typography className="mt-5 block text-sm font-semibold text-(--color-accent-200) sm:text-base">
            코웨이에서 통합회원, 실시간 코디매칭, 미국 신사업 어드민, 배정
            시스템 등 대내외 서비스의 프론트엔드 개발과 운영 대응을
            담당했습니다.
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
              <Typography className="block text-xl font-bold text-white">
                {item.title}
              </Typography>
              <Typography className="mt-3 block text-sm font-semibold text-(--color-accent-200) sm:text-base">
                {item.description}
              </Typography>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
