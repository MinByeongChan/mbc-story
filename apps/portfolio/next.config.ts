import type { NextConfig } from "next";
import { PORTFOLIO_BASE_PATH } from "./src/constants/portfolio";

const RESUME_ZONE_URL = "https://resume.byeongchan.space";
const BLOG_ZONE_URL = "https://mbc-story-dev-blog.vercel.app";

const nextConfig: NextConfig = {
  basePath: PORTFOLIO_BASE_PATH,
  async rewrites() {
    return [
      {
        source: "/resume",
        destination: `${RESUME_ZONE_URL}/resume`,
        basePath: false,
      },
      {
        source: "/resume/:path*",
        destination: `${RESUME_ZONE_URL}/resume/:path*`,
        basePath: false,
      },
      {
        source: "/blog",
        destination: `${BLOG_ZONE_URL}/blog`,
        basePath: false,
      },
      {
        source: "/blog/:path*",
        destination: `${BLOG_ZONE_URL}/blog/:path*`,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;
