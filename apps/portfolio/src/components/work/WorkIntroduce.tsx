"use client";

import React from "react";
import { Typography } from "gocheok-project";

export const WorkIntroduce = () => {
  return (
    <div className="flex flex-col scroll-my-24">
      <Typography className="text-3xl font-bold text-neutral-200">
        제가 작업한 프로젝트를 소개합니다.
      </Typography>
      <div className="flex flex-col my-6">
        <Typography className="text-md text-neutral-300">
          코웨이에서 구축하고 운영한 서비스와 개인 프로젝트를 모았습니다.
        </Typography>
        <Typography className="text-md text-neutral-200 mt-4">
          B2C 인증 서비스부터 물류·회계 어드민, 실시간 매칭, 설치 배정
          플랫폼까지 React, TypeScript, Vue 3 환경에서 개발했습니다.
        </Typography>
        <Typography className="text-md text-neutral-200">
          각 프로젝트에는 담당한 업무, 문제를 해결한 과정, 수치로 확인한 결과를
          정리했습니다.
        </Typography>
      </div>
    </div>
  );
};
