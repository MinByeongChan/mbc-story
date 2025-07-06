import React from "react";
import { twMerge } from "tailwind-merge";
import { Typography } from "@/components/ui/typography";
import { Anchor } from "../ui/anchor";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";

export const ContactMe = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.set(".load", { opacity: 0, yPercent: 100 });
    gsap.to(".load", {
      scrollTrigger: {
        trigger: ".load",
        start: "top 100%",
        end: "+=200",
      },
      opacity: 1,
      duration: 0.5,
      yPercent: 0,
      ease: "power2",
    });
  });

  return (
    <div
      className={twMerge(
        "load w-full gap-16 items-center justify-center text-(--color-neutral-100) my-50",
        "text-md p-6",
        "sm:text-md sm:px-20 sm:flex-row"
      )}
    >
      <div className="flex flex-col justify-center items-center">
        <Typography className="text-6xl font-bold sm:text-8xl">
          Contact Me
        </Typography>
        <div className="mt-10">
          <p>
            <Typography className="text-md sm:text-lg">
              저에 대한 관심이 있거나 연락을 원하시면,
            </Typography>
          </p>
          <p>
            <Typography className="text-md sm:text-lg">
              아래 이메일 및 SNS로 언제든 연락주세요!
            </Typography>
          </p>
        </div>

        <div className="flex flex-row items-center gap-8 mt-10 sm:text-xl">
          <Anchor href="mailto:mbc0481@naver.com">EMAIL</Anchor>
          <Anchor href="https://www.instagram.com/byongchan">INSTAGRAM</Anchor>
          <Anchor href="https://www.github.com/minbyeongchan">GITHUB</Anchor>
        </div>
      </div>
    </div>
  );
};
