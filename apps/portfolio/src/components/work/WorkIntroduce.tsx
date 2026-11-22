import React from "react";

export const WorkIntroduce = () => {
  return (
    <header className="max-w-2xl">
      <h1
        id="work-heading"
        className="text-3xl font-bold text-white sm:text-5xl"
      >
        Work
      </h1>
      <p className="mt-5 text-base break-keep text-neutral-300 leading-relaxed sm:text-lg">
        KSNET과 코웨이에서 구축하고 운영한 서비스, 그리고 개인 프로젝트를
        모았습니다. 가맹점 매출 조회 앱과 B2C 인증 서비스부터 물류·회계 어드민,
        실시간 매칭, 설치 배정 플랫폼까지 JavaScript, React, TypeScript, Vue 3
        환경에서 개발했습니다. 각 프로젝트에는 담당한 업무, 문제를 해결한 과정,
        수치로 확인한 결과를 정리했습니다.
      </p>
    </header>
  );
};
