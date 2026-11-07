"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import Link from "next/link";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import {
  COMPANY_LABEL,
  formatYearRange,
  getProjectThumbnailPath,
  projects,
} from "@/content/projects";

/** 행에 바로 보여줄 기술 수. 나머지는 +N으로 줄인다. */
const MAX_VISIBLE_SKILLS = 4;

export const WorkList = () => {
  const listRef = useRef<HTMLOListElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".work-reveal", {
          y: 24,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 80%",
            once: true,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: listRef },
  );

  return (
    <ol ref={listRef} className="mt-12 border-b border-neutral-800 sm:mt-14">
      {projects.map((project) => {
        const thumbnail = getProjectThumbnailPath(project);
        const hiddenSkillCount = project.skills.length - MAX_VISIBLE_SKILLS;

        return (
          <li
            key={project.slug}
            className="work-reveal border-t border-neutral-800"
          >
            <Link
              href={`/work/${project.slug}`}
              className={twMerge(
                "group grid grid-cols-1 gap-y-2 py-8",
                "sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-x-6",
                thumbnail &&
                  "lg:grid-cols-[8rem_minmax(0,1fr)_minmax(0,15rem)] lg:gap-x-8",
                "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-primary)",
              )}
            >
              <span className="text-sm text-neutral-500 tabular-nums sm:pt-2">
                {formatYearRange(project.period)}
              </span>

              <div>
                <h3
                  className={twMerge(
                    "text-xl font-bold text-white transition-colors sm:text-2xl",
                    "group-hover:text-(--color-primary)",
                  )}
                >
                  {project.title}{" "}
                  <span
                    aria-hidden="true"
                    className={twMerge(
                      "inline-block text-neutral-500 transition-all duration-200",
                      "group-hover:translate-x-1 group-hover:text-(--color-primary)",
                    )}
                  >
                    →
                  </span>
                </h3>
                <p className="mt-1 text-sm text-neutral-500">
                  {COMPANY_LABEL[project.kind]} · {project.role}
                </p>
                <p className="mt-3 leading-relaxed break-keep text-neutral-300">
                  {project.summary}
                </p>
                {project.headline && (
                  <p className="mt-3 text-base leading-relaxed text-neutral-400">
                    <span className="font-semibold text-white">
                      {project.headline.value}
                    </span>
                    <span aria-hidden="true"> · </span>
                    {project.headline.label}
                  </p>
                )}
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.skills.slice(0, MAX_VISIBLE_SKILLS).map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-neutral-800 px-3 py-1 text-sm text-neutral-200"
                    >
                      {skill}
                    </li>
                  ))}
                  {hiddenSkillCount > 0 && (
                    <li className="rounded-full border border-neutral-800 px-3 py-1 text-sm text-neutral-500">
                      +{hiddenSkillCount}
                    </li>
                  )}
                </ul>
              </div>

              {thumbnail && (
                <div className="mt-4 hidden self-start overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900 lg:mt-2 lg:block">
                  <Image
                    src={thumbnail}
                    alt={`${project.title} 대표 화면`}
                    width={480}
                    height={300}
                    className="aspect-[16/10] w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
