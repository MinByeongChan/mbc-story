"use client";

import React from "react";
import { Typography } from "../ui/typography";

export const WorkIntroduce = () => {
  return (
    <div className="flex flex-col scroll-my-24">
      <Typography className="text-3xl font-bold text-neutral-200">
        제가 작업한 프로젝트를 소개합니다.
      </Typography>
      <div className="flex flex-col my-6">
        <Typography className="text-md text-neutral-300">
          아래 프로젝트는 회사와 개인적으로 작업한 프로젝트 목록 입니다.
        </Typography>
        <Typography className="text-md text-neutral-200 mt-4">
          React, Typescript, Vite 를 다루는 SPA 환경에 능숙하여 대부분 해당하는
          환경에서 많은 개발을 수행했습니다.
        </Typography>
        <Typography className="text-md text-neutral-200">
          현재는 Next.js을 사용하여 SSR 환경에서 개발하는 것,
        </Typography>
        <Typography className="text-md text-neutral-200">
          레포지토리를 보다 효율적으로 관리하기 위한 모노레포를 공부하고
          있습니다.
        </Typography>
      </div>
    </div>
  );
};
