import React, { PropsWithChildren, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { Typography } from "../typography/Typography";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

export type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  PropsWithChildren;

export const Anchor = ({ children, className, ...rest }: AnchorProps) => {
  const typoRef = useRef(null);
  const typo2Ref = useRef(null);
  gsap.registerPlugin(SplitText);

  useGSAP(() => {
    // 초기 상태 설정
    gsap.set(typoRef.current, {
      opacity: 1,
      yPercent: 0,
      z: 0,
    });
    gsap.set(typo2Ref.current, {
      opacity: 1,
      yPercent: 0,
      z: 0,
    });
  });

  const handleMouseEnterButton = () => {
    gsap.from(typoRef.current, {
      duration: 0.5,
      yPercent: 0,
    });
    gsap.to(typoRef.current, {
      duration: 0.5,
      yPercent: -100,
      ease: "circ.inOut",
    });
    gsap.from(typo2Ref.current, {
      duration: 0.5,
      yPercent: 100,
    });
    gsap.to(typo2Ref.current, {
      duration: 0.5,
      yPercent: 0,
      ease: "circ.inOut",
    });
  };

  return (
    <a
      className={twMerge(
        "group relative inline-block h-[1.5rem] text-white font-light cursor-pointer",
        className
      )}
      onMouseEnter={handleMouseEnterButton}
      style={{
        overflow: "hidden",
      }}
      {...rest}
    >
      <Typography
        ref={typoRef}
        className="w-full text-white cursor-pointer h-full inline-block"
        style={{
          cursor: "pointer",
        }}
      >
        {children}
      </Typography>
      <Typography
        ref={typo2Ref}
        className="absolute text-white z-3 w-full h-full cursor-pointer -translate-y-0 inline-block"
        style={{
          left: 0,
          cursor: "pointer",
        }}
      >
        {children}
      </Typography>
    </a>
  );
};
