"use client";

import React from "react";
import { StressButton } from "../ui/button";
import { Anchor } from "../ui/anchor";

export const Navigation = () => {
  return (
    <nav className="w-full h-16 flex items-center justify-between px-8">
      <div className="w-full h-full flex items-center justify-between">
        <div className="w-1/2 h-full flex items-center justify-start">
          <Anchor className="w-24 h-8 text-lg font-bold" href="/">
            B.C Min
          </Anchor>
        </div>
      </div>
      <div className="w-1/2 h-full flex items-center justify-end">
        <StressButton className="w-20 h-7 text-bold" noneBorder>
          <a className="text-lg" href="/about">
            About
          </a>
        </StressButton>
        <StressButton className="w-20 h-7" noneBorder>
          <a className="text-lg" href="/career">
            Career
          </a>
        </StressButton>
      </div>
    </nav>
  );
};
