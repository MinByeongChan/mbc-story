import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "gocheok-project/src/tailwind.css";
import "@/app/globals.css";
import { AsideLink } from "@/components/layouts/AsideLink";
import { Navigation } from "@/components/layouts/Navigation";
import { twMerge } from "tailwind-merge";
import { portfolioPath } from "@/constants/portfolio";
import { keywords, metaInfo } from "./constant";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: metaInfo.title,
    template: "%s | 민병찬 포트폴리오",
  },
  description: metaInfo.description,
  keywords: keywords,
  authors: [{ name: metaInfo.name, url: metaInfo.github }],
  creator: metaInfo.name,
  publisher: metaInfo.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(metaInfo.url),
  alternates: {
    canonical: metaInfo.url,
    languages: {
      "ko-KR": metaInfo.url,
      "en-US": `${metaInfo.url}/en`,
    },
  },
  openGraph: {
    type: "website", // 기본값은 website, 각 페이지에서 필요시 override
    locale: "ko_KR",
    url: metaInfo.url,
    siteName: "민병찬 포트폴리오",
    title: metaInfo.title,
    description: metaInfo.description,
    images: [
      {
        url: `${metaInfo.url}/favicon-large.png`,
        width: 1200,
        height: 630,
        alt: "민병찬 프론트엔드 개발자 포트폴리오",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metaInfo.title,
    description: metaInfo.description,
    images: [`${metaInfo.url}/favicon-large.png`],
    creator: metaInfo.twitter,
    site: metaInfo.twitter,
  },
  // Facebook Open Graph
  facebook: {
    appId: "your-facebook-app-id", // 필요시 실제 Facebook App ID로 변경
  },
  // Kakao Open Graph
  other: {
    "theme-color": "#4ECDC4",
    "msapplication-TileColor": "#4ECDC4",
    "msapplication-config": `${metaInfo.url}/browserconfig.xml`,
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "민병찬 Portfolio",
    "mobile-web-app-capable": "yes",
    // Kakao 공유하기용 메타 태그
    "kakao:card": "summary",
    "kakao:title": metaInfo.title,
    "kakao:description": metaInfo.description,
    "kakao:image": `${metaInfo.url}/favicon-large.png`,
    "kakao:url": metaInfo.url,
    // LinkedIn용 메타 태그
    "linkedin:owner": metaInfo.name,
    "linkedin:title": metaInfo.title,
    "linkedin:description": metaInfo.description,
    "linkedin:image": `${metaInfo.url}/favicon-large.png`,
    // WhatsApp용 메타 태그
    "whatsapp:title": metaInfo.title,
    "whatsapp:description": metaInfo.description,
    "whatsapp:image": `${metaInfo.url}/favicon-large.png`,
    // Telegram용 메타 태그
    "telegram:card": "summary_large_image",
    "telegram:title": metaInfo.title,
    "telegram:description": metaInfo.description,
    "telegram:image": `${metaInfo.url}/favicon-large.png`,
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
  category: "portfolio",
  classification: "Portfolio Website",
  referrer: "origin-when-cross-origin",
  bookmarks: [metaInfo.url],
  applicationName: "MinByeongChan Portfolio",
  generator: "Next.js",
  abstract:
    "민병찬 프론트엔드 개발자의 포트폴리오 웹사이트. React, TypeScript, Next.js를 활용한 프로젝트 경험과 기술 스택을 소개합니다.",
  archives: [`${metaInfo.url}/work`, `${metaInfo.url}/Resume.pdf`],
  assets: [metaInfo.url],
  manifest: portfolioPath("/manifest.json"),
  icons: {
    icon: [
      { url: portfolioPath("/favicon.png"), type: "image/png" },
      {
        url: portfolioPath("/favicon-large.png"),
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: portfolioPath("/favicon.png"),
        sizes: "40x40",
        type: "image/png",
      },
      {
        url: portfolioPath("/favicon-large.png"),
        sizes: "192x192",
        type: "image/png",
      },
    ],
    shortcut: [{ url: portfolioPath("/favicon.png"), type: "image/png" }],
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
              name: metaInfo.name,
              alternateName: "MinByeongChan",
              jobTitle: "프론트엔드 개발자",
              worksFor: {
                "@type": "Organization",
                name: "코웨이",
                url: "https://www.coway.com",
              },
              url: metaInfo.url,
              sameAs: [metaInfo.github, metaInfo.instagram],
              email: metaInfo.email,
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
              description: metaInfo.description,
              image: `${metaInfo.url}/favicon-large.png`,
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
                "@id": metaInfo.url,
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
              "sm:p-12 sm:text-md",
            )}
          >
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
