"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { twMerge } from "tailwind-merge";
import { portfolioPath } from "@/constants/portfolio";

export const Profile = () => {
  const sectionRef = useRef<HTMLElement>(null);
  gsap.registerPlugin(SplitText);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        SplitText.create(".hero-title", {
          type: "lines",
          mask: "lines",
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.lines, {
              yPercent: 100,
              duration: 0.9,
              stagger: 0.12,
              ease: "expo.out",
            }),
        });

        gsap.from(".hero-fade", {
          opacity: 0,
          y: 12,
          duration: 0.8,
          delay: 0.3,
          stagger: 0.1,
          ease: "power3.out",
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      aria-labelledby="hero-heading"
      className={twMerge(
        "flex w-full flex-col justify-center text-(--color-neutral-100)",
        "pt-10 pb-16 sm:pt-16 lg:min-h-[70svh] lg:pt-0 lg:pb-0",
      )}
    >
      <div className="hero-fade flex items-center gap-3">
        <Image
          src={portfolioPath("/my_profile.png")}
          alt=""
          width={48}
          height={48}
          priority
          className="h-10 w-10 shrink-0 rounded-full object-cover sm:h-12 sm:w-12"
        />
        <p className="text-sm text-neutral-400 sm:text-base">
          <span className="font-semibold text-white">민병찬</span>
          <span aria-hidden="true"> · </span>
          Frontend Engineer at Coway
          <span className="hidden sm:inline">
            <span aria-hidden="true"> · </span>
            서울
          </span>
        </p>
      </div>

      <h1
        id="hero-heading"
        className={twMerge(
          "hero-title mt-8 max-w-5xl font-bold text-balance break-keep text-white",
          "text-4xl leading-tight sm:text-5xl lg:text-7xl lg:leading-[1.1]",
        )}
      >
        느린 화면을 숫자로 찾아 고치는{" "}
        <span className="text-(--color-primary) sm:whitespace-nowrap">
          프론트엔드 엔지니어
        </span>
        입니다.
      </h1>

      <p
        className={twMerge(
          "hero-fade mt-8 max-w-2xl break-keep text-base leading-relaxed text-neutral-300",
          "sm:text-lg",
        )}
      >
        React와 TypeScript로 6년 넘게 일하며, 기획과 백엔드와 먼저 이야기해
        병목을 찾는 방식을 중요하게 여깁니다. 요즘은 업무 문서를 벡터화한 로컬
        RAG와 에이전트 스킬로 팀의 AI 기반 개발 정확도를 높이고 있습니다.
      </p>
    </section>
  );
};
