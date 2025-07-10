"use client";

import { twMerge } from "tailwind-merge";
import { Typography } from "@/components/ui/typography";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import Image from "next/image";
import { StressButton } from "../ui/button";
import Link from "next/link";

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
        "sm:text-md sm:p-0 sm:flex-row"
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
                "sm:text-8xl"
              )}
            >
              Frontend Developer
            </Typography>
          </div>
        </div>
        <div className="max-w-xl mt-8 text-sm">
          <div>
            <Typography className="split text-md text-(--color-accent-200) font-semibold">
              즉각적인 UI 개발에 매료되어 프론트엔드 개발을 시작하게 되었습니다.
              현재는 Coway 에서 대내 및 대외 서비스를 개발하고 서비스를
              유지보수하고 있습니다. 프로젝트의 안정성을 확보하기위해 렌더링
              이슈와 운영 버그들을 잡으려고 노력하고 있습니다.
            </Typography>
          </div>
          <div className="mt-2">
            <Typography className="split text-md text-(--color-accent-200) font-semibold">
              React 환경과 Javascript/Typescript 언어를 종아합니다.
            </Typography>
          </div>
          <div className="mt-2">
            <Typography className="split text-md text-(--color-accent-200) font-semibold">
              쉬는 날엔 운동을하거나, 정적인 환경에서 쉬며 자기개발하는 것을
              선호합니다.
            </Typography>
          </div>
          <div className="mt-2">
            <Typography className="split text-md text-(--color-accent-200) font-semibold">
              자기 발전을 위해 행동하는 것을 추구합니다.
            </Typography>
          </div>
        </div>

        <div className="mt-8">
          <Link className="text-lg" href="/work">
            <StressButton
              className="w-48 h-10 text-xl text-bold border-[2px]"
              noneRadius
            >
              VIEW MY WORK
            </StressButton>
          </Link>
        </div>
      </article>

      <figure>
        <div
          className={twMerge(
            "profile-img relative w-[200px] h-[250px] rounded-[1rem] bg-white inset-shadow-[1px_1px_8px_rgba(0,0,0,0.8)]",
            "sm:w-[400px] sm:h-[450px] sm:rounded-[2rem] sm:inset-shadow-[1px_1px_15px_rgba(0,0,0,0.8)]"
          )}
        >
          <Image
            src="/main_profile.png"
            alt="main_profile"
            width={300}
            height={300}
            className={twMerge(
              "profile-img absolute w-[170px] bottom-0 left-[50%] translate-x-[-50%]",
              "sm:w-[300px]"
            )}
          />
        </div>
      </figure>
    </section>
  );
};
