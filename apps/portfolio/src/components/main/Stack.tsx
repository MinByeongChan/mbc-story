"use client";

import React from "react";
import { Typography } from "gocheok-project";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import { StackItem } from "./StackItem";

export const Stack = () => {
  gsap.registerPlugin(ScrollTrigger);

  const setGsapScrollTrigger = (
    className: string,
    start: string,
    end: string
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
    setGsapScrollTrigger(".scroll-trigger-frontend", "top 90%", "+=200");
    setGsapScrollTrigger(".scroll-trigger-collaboration", "top 90%", "+=200");
    setGsapScrollTrigger(".scroll-trigger-devops", "top 90%", "+=200");
  });

  const frontendStackItems = [
    {
      index: 1,
      label: "TypeScript",
      imageSrc: "/portfolio/main/typescript-icon.svg",
    },
    {
      index: 2,
      label: "JavaScript",
      imageSrc: "/portfolio/main/javascript-icon.svg",
    },
    {
      index: 3,
      label: "React",
      imageSrc: "/portfolio/main/react-icon.svg",
    },
    {
      index: 4,
      label: "Next.js",
      imageSrc: "/portfolio/main/nextjs-icon.svg",
      isBackground: true,
    },
    {
      index: 5,
      label: "Tailwind CSS",
      imageSrc: "/portfolio/main/tailwind-icon.png",
    },
    {
      index: 6,
      label: "Emotion",
      imageSrc: "/portfolio/main/emotion-icon.png",
    },

    {
      index: 7,
      label: "Jotai",
      imageSrc: "/portfolio/main/jotai-icon.png",
    },
    {
      index: 8,
      label: "Recoil",
      imageSrc: "/portfolio/main/recoil-logo.svg",
      isBackground: true,
    },
    {
      index: 9,
      label: "Sass/Scss",
      imageSrc: "/portfolio/main/sass.png",
    },
    {
      index: 10,
      label: "Styled Components",
      imageSrc: "/portfolio/main/styled-components-icon.png",
      isBackground: true,
    },
  ];

  const devOpsStackItems = [
    {
      index: 11,
      label: "AWS EC2",
      imageSrc: "/portfolio/main/ec2-icon.png",
    },
    {
      index: 12,
      label: "AWS CloudFront",
      imageSrc: "/portfolio/main/cloudfront-icon.webp",
    },
    {
      index: 13,
      label: "AWS S3",
      imageSrc: "/portfolio/main/s3-icon.webp",
    },
  ];

  const collaborationStackItems = [
    {
      index: 14,
      label: "Jira",
      imageSrc: "/portfolio/main/jira-icon.svg",
    },
    {
      index: 15,
      label: "Github",
      imageSrc: "/portfolio/main/github-icon.png",
    },
  ];

  return (
    <div className="my-50 flex flex-col gap-16">
      <div>
        <Typography className="scroll-trigger-my-stack text-4xl font-bold text-(--color-neutral-100)">
          My Stack
        </Typography>
      </div>

      <article>
        <Typography className="scroll-trigger-frontend text-2xl font-bold text-(--color-neutral-100)">
          Frontend
        </Typography>
        <ul className="flex flex-row flex-wrap items-center justify-center gap-8 mt-10 mx-4">
          {frontendStackItems.map((item) => (
            <StackItem key={item.label} {...item} index={Number(item.index)} />
          ))}
        </ul>
      </article>

      <article>
        <Typography className="scroll-trigger-collaboration text-2xl font-bold text-(--color-neutral-100)">
          Collaboration Tools
        </Typography>
        <ul className="flex flex-row flex-wrap items-center justify-center gap-8 mt-10 mx-4">
          {collaborationStackItems.map((item) => (
            <StackItem key={item.label} {...item} index={Number(item.index)} />
          ))}
        </ul>
      </article>

      <article>
        <Typography className="scroll-trigger-devops text-2xl font-bold text-(--color-neutral-100)">
          DevOps
        </Typography>
        <ul className="flex flex-row flex-wrap items-center justify-center gap-8 mt-10 mx-4">
          {devOpsStackItems.map((item) => (
            <StackItem key={item.label} {...item} index={Number(item.index)} />
          ))}
        </ul>
      </article>
    </div>
  );
};
