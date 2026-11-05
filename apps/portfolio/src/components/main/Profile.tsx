"use client";

import { twMerge } from "tailwind-merge";
import { Typography } from "gocheok-project";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import Link from "next/link";
import { StressButton } from "gocheok-project";
import { portfolioPath } from "@/constants/portfolio";

export const Profile = () => {
  gsap.registerPlugin(SplitText);

  useGSAP(() => {
    gsap.set(".split", { opacity: 1 });
    let split;
    SplitText.create(".split", {
      type: "words,lines",
      linesClass: "line",
      autoSplit: true,
      mask: "lines",
      onSplit: (self) => {
        split = gsap.from(self.lines, {
          duration: 1,
          yPercent: 100,
          opacity: 0,
          stagger: 0.3,
          ease: "expo.out",
        });
        return split;
      },
    });
    gsap.from(".profile-img", {
      duration: 1,
      opacity: 0,
      scale: 0.8,
      ease: "expo.out",
    });
  });

  return (
    <section
      className={twMerge(
        "flex w-full gap-16 items-center justify-between text-(--color-neutral-100)",
        "text-md flex-col-reverse p-6",
        "sm:text-md sm:p-0 sm:flex-row",
      )}
    >
      <article>
        <div>
          <Typography
            className={twMerge("split text-2xl font-bold", "sm:text-6xl")}
          >
            안녕하세요.
          </Typography>
          <div className="mt-2">
            <Typography
              className={twMerge("split text-4xl font-bold", "sm:text-8xl")}
            >
              민병찬 입니다.
            </Typography>
          </div>
          <div className="mt-4">
            <Typography
              className={twMerge(
                "split text-4xl font-semibold text-(--color-primary)",
                "sm:text-8xl",
              )}
            >
              Frontend Developer
            </Typography>
          </div>
        </div>
        <div className="max-w-xl mt-8 text-sm">
          <div>
            <Typography className="split text-md text-(--color-accent-200) font-semibold">
              React와 TypeScript 기반으로 6년 넘게 일한 프론트엔드 엔지니어입니다.
              코웨이에서 통합회원, 실시간 코디매칭, 미국 신사업 어드민, 배정
              시스템 등 7개 서비스를 구축하고 운영했습니다.
            </Typography>
          </div>
          <div className="mt-2">
            <Typography className="split text-md text-(--color-accent-200) font-semibold">
              화면 지연과 메모리 누수 같은 문제를 수치로 확인하고 해결하는 것,
              기획과 백엔드와 먼저 소통해 병목을 찾아내는 것을 중요하게
              생각합니다.
            </Typography>
          </div>
          <div className="mt-2">
            <Typography className="split text-md text-(--color-accent-200) font-semibold">
              최근에는 업무 문서를 벡터화한 로컬 RAG와 에이전트 스킬을 팀 개발
              과정에 적용해 AI 기반 개발의 정확도를 높이고 있습니다.
            </Typography>
          </div>
        </div>

        <div className="mt-8">
          <StressButton
            className="w-48 h-10 text-xl text-bold border-[2px]"
            noneRadius
          >
            <Link href="/work">VIEW MY WORK</Link>
          </StressButton>
        </div>
      </article>

      <figure>
        <div
          role="img"
          aria-label="My Profile"
          className={twMerge(
            "profile-img relative w-[200px] h-[250px] rounded-[1rem] bg-white inset-shadow-[1px_1px_8px_rgba(0,0,0,0.8)]",
            "sm:w-[400px] sm:h-[450px] sm:rounded-[2rem] sm:inset-shadow-[1px_1px_15px_rgba(0,0,0,0.8)]",
            "bg-cover bg-center",
          )}
          style={{
            backgroundImage: `url(${portfolioPath("/my_profile.png")})`,
          }}
        />
      </figure>
    </section>
  );
};
