import { twMerge } from "tailwind-merge";
import { Typography } from "@/components/ui/typography";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import Image from "next/image";
import { StressButton } from "../ui/button";

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
  });

  return (
    <section
      className={twMerge(
        "flex w-full gap-16 items-center justify-center text-(--color-neutral-100)",
        "md:text-md",
        "sm:p-6"
      )}
    >
      <article>
        <div>
          <Typography className="split text-6xl font-bold">
            안녕하세요.
          </Typography>
          <div className="mt-2">
            <Typography className="split text-8xl font-bold">
              민병찬 입니다.
            </Typography>
          </div>
          <div className="mt-4">
            <Typography className="split text-6xl font-semibold text-(--color-primary)">
              Frontend Developer
            </Typography>
          </div>
        </div>
        <div className="max-w-xl mt-8 text-sm">
          <div>
            <Typography className="split text-md text-(--color-accent-200) font-semibold">
              즉각적인 UI 개발에 매료되어 프론트엔드 개발을 시작하게 되었습니다.
              현재는 &quot;Coway&quot; 에서 대내 및 대외 서비스를 개발하고
              서비스를 유지보수하고 있습니다. 렌더링 이슈와 운영 버그들을
              잡으려고 노력하고 있습니다.
            </Typography>
          </div>
          <div className="mt-2">
            <Typography className="split text-md text-(--color-accent-200) font-semibold">
              쉬는날엔 운동을하거나, 정적인 환경에서 쉬며 자기개발하는 것을
              선호합니다.
            </Typography>
          </div>
        </div>

        <div className="mt-8">
          <StressButton
            className="w-48 h-10 text-xl text-bold border-[2px]"
            noneRadius
          >
            VIEW MY WORK
          </StressButton>
        </div>
      </article>

      <figure>
        <div className="relative w-[400px] h-[450px] rounded-[2rem] bg-white">
          <Image
            src="/main_profile.png"
            alt="main_profile"
            width={300}
            height={300}
            className="absolute bottom-0 left-[50%] translate-x-[-50%]"
          />
        </div>
      </figure>
    </section>
  );
};
