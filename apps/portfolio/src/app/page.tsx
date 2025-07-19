import { ContactMe, Profile, Stack } from "@/components/main";
import { Dividor } from "@/components/ui/divider/Dividor";
import { twMerge } from "tailwind-merge";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "B.C Min | Frontend",
  description:
    "안녕하세요. 민병찬입니다. React, TypeScript, Next.js 전문 프론트엔드 개발자입니다. 코웨이에서 대내외 서비스 개발 및 운영 경험을 보유하고 있습니다. 즉각적인 UI 개발에 매료되어 프론트엔드 개발을 시작하게 되었습니다.",
  keywords: [
    "B.C Min",
    "민병찬",
    "MinByeongChan",
    "프론트엔드 개발자",
    "Frontend Developer",
    "React",
    "TypeScript",
    "Next.js",
    "JavaScript",
    "코웨이",
    "Coway",
    "프로젝트 안정성",
    "렌더링 이슈",
    "운영 이슈",
    "UI 개발",
    "웹 개발",
    "자기발전",
    "프론트엔드",
    "개발자 포트폴리오",
  ],
  openGraph: {
    title: "민병찬 | 프론트엔드 개발자",
    description:
      "안녕하세요. 민병찬입니다. React, TypeScript, Next.js 전문 프론트엔드 개발자입니다. 코웨이에서 대내외 서비스 개발 및 운영 경험을 보유하고 있습니다.",
    url: "https://mbc-story-portfolio.vercel.app/",
    images: [
      {
        url: "/main_profile.png",
        width: 1200,
        height: 630,
        alt: "민병찬 프론트엔드 개발자 프로필",
      },
    ],
    type: "profile",
  },
  twitter: {
    title: "민병찬 | 프론트엔드 개발자",
    description: "React, TypeScript, Next.js 전문 프론트엔드 개발자입니다.",
    images: ["/main_profile.png"],
  },
};

export default function Main() {
  return (
    <section className={twMerge("mx-0", "sm:mx-16", "md:mx-16", "lg:mx-32")}>
      <div className="w-full h-full flex items-center grow-1 mt-30">
        <Profile />
      </div>

      <Stack />

      <Dividor />

      <ContactMe />
    </section>
  );
}
