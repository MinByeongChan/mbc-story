import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mbc-story-portfolio-v2.vercel.app"),
  title: "민병찬 | Portfolio V2",
  description:
    "React, TypeScript, Next.js 기반 프론트엔드 개발자 민병찬의 두 번째 포트폴리오입니다.",
  openGraph: {
    title: "민병찬 | Portfolio V2",
    description:
      "코웨이 대내외 서비스 개발과 운영 개선 경험을 정리한 프론트엔드 포트폴리오입니다.",
    type: "profile",
    images: ["/assets/my_profile.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
