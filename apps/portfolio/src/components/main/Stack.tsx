"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import { twMerge } from "tailwind-merge";
import { getProjectsUsingSkill } from "@/content/projects";

interface CoreSkill {
  name: string;
  area: string;
  /** 프로젝트 수와 함께 보여줄 대표 근거 한 줄 */
  evidence: string;
}

interface ToolGroup {
  title: string;
  items: string[];
}

const coreSkills: CoreSkill[] = [
  {
    name: "TypeScript",
    area: "언어",
    evidence: "2021년부터 모든 회사 프로젝트에서 사용",
  },
  {
    name: "React",
    area: "UI",
    evidence: "Vue와 Keycloak 템플릿 기반 레거시 화면을 React로 전환",
  },
  {
    name: "TanStack Query",
    area: "서버 상태",
    evidence: "호출·캐시 구조 개선으로 화면 지연을 최대 3초에서 1초로 단축",
  },
];

const toolGroups: ToolGroup[] = [
  {
    title: "Frontend",
    items: [
      "Vue 3",
      "Next.js",
      "Vite",
      "Tailwind CSS",
      "Emotion",
      "SCSS",
      "MUI",
    ],
  },
  {
    title: "State & Form",
    items: [
      "Zustand",
      "Recoil",
      "Jotai",
      "Redux Toolkit",
      "Pinia",
      "React Hook Form",
      "Zod",
    ],
  },
  {
    title: "Quality",
    items: [
      "Cypress",
      "Vitest",
      "Jest",
      "MSW",
      "Storybook",
      "Datadog RUM",
      "Sentry",
    ],
  },
  {
    title: "Infra & AI",
    items: [
      "AWS S3",
      "CloudFront",
      "EC2",
      "GitHub Actions",
      "Vercel",
      "Claude Code",
      "MCP",
      "ChromaDB",
    ],
  },
];

export const Stack = () => {
  const sectionRef = useRef<HTMLElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".skill-reveal", {
          y: 24,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      aria-labelledby="skills-heading"
      className="mb-32 text-(--color-neutral-100) sm:mb-40"
    >
      <header className="max-w-2xl">
        <h2
          id="skills-heading"
          className="text-3xl font-bold text-white sm:text-5xl"
        >
          Stack
        </h2>
        <p className="mt-5 text-base break-keep text-neutral-300 leading-relaxed sm:text-lg">
          가장 많이 쓴 기술을 근거와 함께 먼저 소개하고, 함께 다뤄 온 도구는
          영역별로 정리했습니다. 프로젝트 수는 아래 Work에 소개한 프로젝트
          기준입니다.
        </p>
      </header>

      <h3 className="mt-14 text-xl font-bold text-white">주력 기술</h3>
      <ol className="mt-4 border-b border-neutral-800">
        {coreSkills.map((skill, index) => {
          const projectCount = getProjectsUsingSkill(skill.name).length;

          return (
            <li
              key={skill.name}
              className={twMerge(
                "skill-reveal grid grid-cols-[2.5rem_minmax(0,1fr)] items-baseline gap-x-4 gap-y-3 border-t border-neutral-800 py-8",
                "lg:grid-cols-[3.5rem_minmax(0,1fr)_minmax(0,20rem)] lg:gap-x-8",
              )}
            >
              <span className="text-sm text-neutral-500 tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-2xl font-bold text-white sm:text-4xl">
                {skill.name}
              </p>
              <p className="col-start-2 text-base leading-relaxed text-neutral-400 lg:col-start-3">
                <span className="font-semibold text-white">
                  {projectCount}개 프로젝트
                </span>
                <span aria-hidden="true"> · </span>
                {skill.area}
                <br />
                {skill.evidence}
              </p>
            </li>
          );
        })}
      </ol>

      <h3 className="mt-14 text-xl font-bold text-white">함께 쓰는 도구</h3>
      <dl className="skill-reveal mt-4 border-b border-neutral-800">
        {toolGroups.map((group) => (
          <div
            key={group.title}
            className="grid grid-cols-1 gap-3 border-t border-neutral-800 py-5 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6"
          >
            <dt className="text-sm font-semibold text-neutral-300 sm:pt-1">
              {group.title}
            </dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-neutral-800 px-3 py-1 text-sm text-neutral-200 sm:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};
