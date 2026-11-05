"use client";

import React from "react";
import { Typography } from "gocheok-project";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import { StackItem } from "./StackItem";
import { portfolioPath } from "@/constants/portfolio";

interface StackGroup {
  id: string;
  title: string;
  items: { label: string; imageSrc?: string; isBackground?: boolean }[];
}

const icon = (file: string) => portfolioPath(`/main/${file}`);

const stackGroups: StackGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    items: [
      { label: "TypeScript", imageSrc: icon("typescript-icon.svg") },
      { label: "JavaScript", imageSrc: icon("javascript-icon.svg") },
      { label: "React", imageSrc: icon("react-icon.svg") },
      { label: "Next.js", imageSrc: icon("nextjs-icon.svg"), isBackground: true },
      { label: "Vue 3" },
      { label: "Tailwind CSS", imageSrc: icon("tailwind-icon.png") },
      { label: "Emotion", imageSrc: icon("emotion-icon.png") },
      { label: "Sass/Scss", imageSrc: icon("sass.png") },
      {
        label: "Styled Components",
        imageSrc: icon("styled-components-icon.png"),
        isBackground: true,
      },
    ],
  },
  {
    id: "state",
    title: "State & Data",
    items: [
      { label: "TanStack Query", imageSrc: icon("tanstack-icon.png") },
      { label: "Zustand" },
      { label: "Jotai", imageSrc: icon("jotai-icon.png") },
      { label: "Recoil", imageSrc: icon("recoil-logo.svg"), isBackground: true },
      { label: "Redux Toolkit" },
      { label: "React Hook Form" },
      { label: "Zod" },
    ],
  },
  {
    id: "quality",
    title: "Quality & Monitoring",
    items: [
      { label: "Vitest" },
      { label: "Jest" },
      { label: "Cypress" },
      { label: "Storybook" },
      { label: "MSW" },
      { label: "Sentry" },
      { label: "Datadog RUM" },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    items: [
      { label: "AWS EC2", imageSrc: icon("ec2-icon.png") },
      { label: "AWS CloudFront", imageSrc: icon("cloudfront-icon.webp") },
      { label: "AWS S3", imageSrc: icon("s3-icon.webp") },
      { label: "GitHub Actions" },
    ],
  },
  {
    id: "collaboration",
    title: "Collaboration & AI",
    items: [
      { label: "Jira", imageSrc: icon("jira-icon.svg") },
      { label: "Github", imageSrc: icon("github-icon.png") },
      { label: "Claude Code" },
      { label: "MCP" },
      { label: "ChromaDB" },
    ],
  },
];

export const Stack = () => {
  gsap.registerPlugin(ScrollTrigger);

  const setGsapScrollTrigger = (
    className: string,
    start: string,
    end: string,
  ) => {
    gsap.set(className, { opacity: 0 });
    gsap.to(className, {
      scrollTrigger: {
        trigger: className,
        start: start,
        end: end,
        scrub: true,
      },
      opacity: 1,
      duration: 0.5,
      ease: "power2",
    });
  };

  useGSAP(() => {
    setGsapScrollTrigger(".scroll-trigger-my-stack", "top 90%", "+=200");
    stackGroups.forEach((group) => {
      setGsapScrollTrigger(`.scroll-trigger-${group.id}`, "top 90%", "+=200");
    });
  });

  const firstIndexByGroup = stackGroups.reduce<Record<string, number>>(
    (acc, group, groupIndex) => {
      const previous = stackGroups[groupIndex - 1];
      acc[group.id] = previous
        ? acc[previous.id] + previous.items.length
        : 1;
      return acc;
    },
    {},
  );

  return (
    <div className="my-50 flex flex-col gap-16">
      <div>
        <Typography className="scroll-trigger-my-stack text-4xl font-bold text-(--color-neutral-100)">
          My Stack
        </Typography>
      </div>

      {stackGroups.map((group) => (
        <article key={group.id}>
          <Typography
            className={`scroll-trigger-${group.id} text-2xl font-bold text-(--color-neutral-100)`}
          >
            {group.title}
          </Typography>
          <ul className="flex flex-row flex-wrap items-center justify-center gap-8 mt-10 mx-4">
            {group.items.map((item, index) => (
              <StackItem
                key={item.label}
                {...item}
                index={firstIndexByGroup[group.id] + index}
              />
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
};
