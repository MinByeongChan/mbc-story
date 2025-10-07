import { ContactMe, Profile, Stack } from "@/components/main";
import { Divider } from "gocheok-project";
import { twMerge } from "tailwind-merge";
import { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "안녕하세요. 민병찬입니다. React, TypeScript, Next.js 전문 프론트엔드 개발자입니다. 코웨이에서 대내외 서비스 개발 및 운영 경험을 보유하고 있습니다. 즉각적인 UI 개발에 매료되어 프론트엔드 개발을 시작하게 되었습니다.",
  openGraph: {
    type: "profile", // 메인 페이지는 프로필 타입으로 설정
  },
};

export default function Main() {
  return (
    <section className={twMerge("mx-0", "sm:mx-16", "md:mx-16", "lg:mx-32")}>
      <div className="w-full h-full flex items-center grow-1 mt-30">
        <Profile />
      </div>

      <Stack />

      <Divider />

      <ContactMe />
    </section>
  );
}
