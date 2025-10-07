"use client";

import React, { PropsWithChildren, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { Typography } from "../../../components/atom/typography/Typography";
import gsap from "gsap";
import { SplitText } from "gsap/all";

export type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  PropsWithChildren;

export const Anchor = ({ children, className, ...rest }: AnchorProps) => {
  const downTypoRef = useRef<HTMLSpanElement>(null);
  const upTypoRef = useRef<HTMLSpanElement>(null);
  gsap.registerPlugin(SplitText);

  const handleMouseEnterButton = () => {
    gsap.from(downTypoRef.current, {
      yPercent: -100,
    });
    gsap.to(downTypoRef.current, {
      duration: 0.5,
      yPercent: 0,
      ease: "circ.inOut",
    });
    gsap.from(upTypoRef.current, {
      yPercent: 0,
    });
    gsap.to(upTypoRef.current, {
      duration: 0.5,
      yPercent: 100,
      ease: "circ.inOut",
    });
  };

  const handleMouseLeaveButton = () => {
    gsap.from(downTypoRef.current, {
      yPercent: 0,
    });
    gsap.to(downTypoRef.current, {
      duration: 0.5,
      yPercent: -100,
      ease: "circ.inOut",
    });
    gsap.from(upTypoRef.current, {
      yPercent: 100,
    });
    gsap.to(upTypoRef.current, {
      duration: 0.5,
      yPercent: 0,
      ease: "circ.inOut",
    });
  };

  return (
    <a
      className={twMerge(
        "group relative inline-block h-[1.5rem] text-white font-light cursor-pointer",
        className,
      )}
      onMouseEnter={handleMouseEnterButton}
      onMouseLeave={handleMouseLeaveButton}
      style={{
        overflow: "hidden",
      }}
      {...rest}
    >
      <Typography
        ref={downTypoRef}
        className="absolute w-full text-white h-full inline-block left-0"
      >
        {children}
      </Typography>
      <Typography
        ref={upTypoRef}
        className="absolute text-white w-full h-full inline-block left-0"
      >
        {children}
      </Typography>
    </a>
  );
};
