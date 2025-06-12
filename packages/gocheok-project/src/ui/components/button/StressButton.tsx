import gsap from "gsap";
import React, { PropsWithChildren, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { Typography } from "../typography/Typography";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren;
export const StressButton = ({
  children,
  className,
  color,
  ...restProps
}: ButtonProps) => {
  const ref = useRef(null);
  const typoRef = useRef(null);
  const typo2Ref = useRef(null);
  const hoverBackgroundRef = useRef(null);
  gsap.registerPlugin(SplitText);

  useGSAP(() => {
    gsap.set(typoRef.current, { opacity: 1 });
    gsap.set(typo2Ref.current, { opacity: 0 });
  });

  const splitStart = (target: HTMLSpanElement | null, direction: number) => {
    SplitText.create(target, {
      type: "words,lines",
      autoSplit: true,
      mask: "lines",
      onSplit: (self) => {
        return gsap.from(self.lines, {
          duration: 1,
          yPercent: 100,
          opacity: direction,
          stagger: 0.3,
          ease: "expo.out",
        });
      },
      onRevert: (self) => {
        return gsap.from(self.lines, {
          duration: 1,
          yPercent: 0,
          opacity: 1 - direction,
          stagger: 0.3,
          ease: "expo.out",
        });
      },
    });
  };

  const handleMouseEnterButton = () => {
    splitStart(typoRef.current, 1);
    splitStart(typo2Ref.current, 0);
  };

  return (
    <button
      ref={ref}
      className={twMerge(
        "group",
        "z-1000 flex items-center rounded-2xl border-[1px] border-(--color-neutral-200)/70 bg-(--color-bg-100) text-xs tracking-tight text-(--color-neutral-100) cursor-pointer relative",
        "relative w-[10rem] h-[1.7rem]",
        className
      )}
      {...restProps}
      onMouseEnter={handleMouseEnterButton}
    >
      <div
        ref={hoverBackgroundRef}
        className={twMerge(
          "absolute left-1/2 bottom-0 w-0 h-0 transition-all duration-300 rounded-[80%] ease-in-out scale-0",
          "group-hover:rounded-xl group-hover:w-full group-hover:left-0 group-hover:bottom-0 group-hover:h-full group-hover:bg-white group-hover:scale-100"
        )}
      />
      <Typography
        ref={typoRef}
        className="absolute w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white group-hover:text-black"
      >
        {children}
      </Typography>
      <Typography
        ref={typo2Ref}
        className="absolute w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black"
      >
        {children}
      </Typography>
    </button>
  );
};
