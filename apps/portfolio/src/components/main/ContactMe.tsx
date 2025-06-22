import React from "react";
import { twMerge } from "tailwind-merge";
import { Typography } from "@/components/ui/typography";
import { Anchor } from "../ui/anchor";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const ContactMe = () => {
  gsap.registerPlugin(SplitText);

  useGSAP(() => {
    let load;
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].intersectionRatio <= 0) return;
        SplitText.create(".load", {
          type: "words,lines",
          linesClass: "line",
          autoSplit: true,
          mask: "lines",
          onSplit: (self) => {
            load = gsap.from(self.lines, {
              duration: 1,
              yPercent: 100,
              opacity: 0,
              stagger: 0.3,
              ease: "expo.out",
            });
            return load;
          },
        });
      },
      {
        root: null,
        threshold: 1,
      }
    );

    intersectionObserver.observe(document.querySelector(".load") as Element);
  });

  return (
    <div
      className={twMerge(
        "w-full gap-16 items-center justify-center text-(--color-neutral-100) my-20",
        "text-md p-6",
        "sm:text-md sm:px-20 sm:flex-row"
      )}
    >
      <div className="flex flex-col justify-center items-center">
        <Typography className="load text-4xl font-bold sx:text-8xl">
          Contact Me
        </Typography>
        <div className="mt-10">
          <p>
            <Typography className="load text-md">
              저에 대한 관심이 있거나 연락을 원하시면,
            </Typography>
          </p>
          <p>
            <Typography className="load text-md">
              아래 이메일 및 SNS로 언제든 연락주세요!
            </Typography>
          </p>
        </div>

        <div className="flex flex-row items-center gap-8 mt-10">
          <Anchor className="load" href="mailto:mbc0481@naver.com">
            EMAIL
          </Anchor>
          <Anchor className="load" href="https://www.instagram.com/byongchan">
            INSTAGRAM
          </Anchor>
          <Anchor className="load" href="https://www.github.com/minbyeongchan">
            GITHUB
          </Anchor>
        </div>
      </div>
    </div>
  );
};
