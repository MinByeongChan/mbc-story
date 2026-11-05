import {
  ContactMe,
  ExperienceHighlights,
  Profile,
  Stack,
} from "@/components/main";
import { twMerge } from "tailwind-merge";
import { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "React, TypeScript 기반 6년차 프론트엔드 엔지니어 민병찬의 포트폴리오입니다. 코웨이에서 통합회원, 실시간 코디매칭, 미국 신사업 어드민, 배정 시스템 등 대내외 서비스를 구축하고 운영했습니다.",
  openGraph: {
    type: "profile", // 메인 페이지는 프로필 타입으로 설정
  },
};

export default function Main() {
  return (
    <section
      className={twMerge(
        "mx-0",
        "sm:mx-16",
        "lg:mx-32",
        "2xl:mx-auto 2xl:max-w-6xl",
      )}
    >
      <div className="mt-16">
        <Profile />
      </div>

      <ExperienceHighlights />

      <Stack />

      <ContactMe />
    </section>
  );
}
