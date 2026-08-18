const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export const Config = {
  siteName: "Min Byeongchan Resume",
  title: "Frontend Developer Min Byeongchan",
  description: "프론트엔드 개발자 민병찬 이력서",
  siteUrl,
  email: "mbc0481@naver.com",
  locale: "ko_KR",
  author: "Min Byeongchan",
};
