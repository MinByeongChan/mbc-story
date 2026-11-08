"use client";

import React from "react";
import { StressButton, Anchor } from "gocheok-project";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Observer } from "gsap/all";
import Link from "next/link";
import { portfolioPath } from "@/constants/portfolio";

export const Navigation = () => {
  gsap.registerPlugin(Observer);

  useGSAP(() => {
    Observer.create({
      target: window,
      type: "wheel,touch,pointer",
      wheelSpeed: 2,
      onUp: () => {
        gsap.from(".nav-container", {
          transitionDuration: 0.3,
          yPercent: 0,
          ease: "power2",
        });
      },
      onDown: () => {
        gsap.from(".nav-container", {
          transitionDuration: 0.3,
          yPercent: -100,
          ease: "power2",
        });
      },
    });
  });

  return (
    <nav className="nav-container w-full z-1000 h-16 flex items-center justify-between px-8 fixed">
      <div className="w-full h-full flex items-center justify-between">
        <div className="w-1/2 h-full flex items-center justify-start">
          <Anchor className="w-24 h-8 text-lg font-bold" href={portfolioPath()}>
            B.C Min
          </Anchor>
        </div>
      </div>
      <div className="w-1/2 h-full flex items-center justify-end">
        <StressButton className="w-20 h-7" noneBorder>
          <Link className="text-lg" href="/work">
            Work
          </Link>
        </StressButton>
        {/* /resume은 rewrites로 연결된 별도 앱이라 basePath가 붙는 next/link를 쓸 수 없고,
            button 안의 a는 클릭해도 이동하지 않아 직접 이동시킨다. */}
        <StressButton
          className="w-25 h-7"
          noneBorder
          onClick={() => window.location.assign("/resume")}
        >
          <span className="text-lg">Resume</span>
        </StressButton>
      </div>
    </nav>
  );
};
