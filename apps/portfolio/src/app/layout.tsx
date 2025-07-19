import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "gocheok-project/src/tailwind.css";
import "@/app/globals.css";
import { AsideLink } from "@/components/layouts/AsideLink";
import { Navigation } from "@/components/layouts/Navigation";
import { twMerge } from "tailwind-merge";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "민병찬 | 프론트엔드 개발자 포트폴리오",
    template: "%s | 민병찬 포트폴리오",
  },
  description:
    "React, TypeScript, Next.js 전문 프론트엔드 개발자 민병찬의 포트폴리오. 코웨이에서 대내외 서비스 개발 및 운영 경험을 보유한 프론트엔드 개발자입니다.",
  keywords: [
    "민병찬",
    "MinByeongChan",
    "프론트엔드 개발자",
    "Frontend Developer",
    "React",
    "TypeScript",
    "Next.js",
    "JavaScript",
    "포트폴리오",
    "Portfolio",
    "웹 개발",
    "Web Development",
    "코웨이",
    "Coway",
    "TailwindCSS",
    "Emotion",
    "Jotai",
    "Recoil",
    "AWS",
    "UI/UX",
    "SPA",
    "SSR",
    "개발자",
    "Developer",
    "한국",
    "Korea",
  ],
  authors: [{ name: "민병찬", url: "https://github.com/minbyeongchan" }],
  creator: "민병찬",
  publisher: "민병찬",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mbc-story-portfolio.vercel.app/"),
  alternates: {
    canonical: "/",
    languages: {
      "ko-KR": "/",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://mbc-story-portfolio.vercel.app/",
    siteName: "민병찬 포트폴리오",
    title: "민병찬 | 프론트엔드 개발자 포트폴리오",
    description:
      "React, TypeScript, Next.js 전문 프론트엔드 개발자 민병찬의 포트폴리오. 코웨이에서 대내외 서비스 개발 및 운영 경험을 보유한 프론트엔드 개발자입니다.",
    images: [
      {
        url: "/main_profile.png",
        width: 1200,
        height: 630,
        alt: "민병찬 프론트엔드 개발자 포트폴리오",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "민병찬 | 프론트엔드 개발자 포트폴리오",
    description:
      "React, TypeScript, Next.js 전문 프론트엔드 개발자 민병찬의 포트폴리오",
    images: ["/main_profile.png"],
    creator: "@minbyeongchan",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Google Search Console 검증 코드 (실제 사용 시 교체 필요)
  },
  category: "portfolio",
  classification: "Portfolio Website",
  referrer: "origin-when-cross-origin",
  bookmarks: ["https://mbc-story-portfolio.vercel.app/"],
  applicationName: "MinByeongChan Portfolio",
  generator: "Next.js",
  abstract:
    "민병찬 프론트엔드 개발자의 포트폴리오 웹사이트. React, TypeScript, Next.js를 활용한 프로젝트 경험과 기술 스택을 소개합니다.",
  archives: [
    "https://mbc-story-portfolio.vercel.app//work",
    "https://mbc-story-portfolio.vercel.app//portfolio/Resume.pdf",
  ],
  assets: ["https://mbc-story-portfolio.vercel.app/"],
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon-large.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      {
        url: "/favicon.png",
        sizes: "40x40",
        type: "image/png",
      },
      {
        url: "/favicon-large.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    shortcut: [{ url: "/favicon.png", type: "image/png" }],
  },
  other: {
    "theme-color": "#4ECDC4",
    "msapplication-TileColor": "#4ECDC4",
    "msapplication-config": "/browserconfig.xml",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "민병찬 Portfolio",
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "민병찬",
              alternateName: "MinByeongChan",
              jobTitle: "프론트엔드 개발자",
              worksFor: {
                "@type": "Organization",
                name: "코웨이",
                url: "https://www.coway.com",
              },
              url: "https://mbc-story-portfolio.vercel.app/",
              sameAs: [
                "https://github.com/minbyeongchan",
                "https://www.instagram.com/byongchan",
              ],
              email: "mbc0481@naver.com",
              knowsAbout: [
                "React",
                "TypeScript",
                "Next.js",
                "JavaScript",
                "Frontend Development",
                "Web Development",
                "TailwindCSS",
                "Emotion",
                "Jotai",
                "Recoil",
                "AWS",
              ],
              description:
                "React, TypeScript, Next.js 전문 프론트엔드 개발자. 코웨이에서 대내외 서비스 개발 및 운영 경험을 보유한 프론트엔드 개발자입니다.",
              image: "https://mbc-story-portfolio.vercel.app//main_profile.png",
              nationality: "KR",
              alumniOf: {
                "@type": "Organization",
                name: "코웨이",
              },
              hasCredential: {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "degree",
                name: "프론트엔드 개발자",
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://mbc-story-portfolio.vercel.app/",
              },
            }),
          }}
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <main className="flex flex-col min-h-lvh font-[family-name:var(--font-geist-sans)] bg-black">
          <Navigation />
          <AsideLink />
          <div
            className={twMerge(
              "text-md p-6",
              "lg:p-18 sm:text-md",
              "sm:p-12 sm:text-md"
            )}
          >
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
