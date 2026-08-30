import { MetadataRoute } from "next";
import { PORTFOLIO_ORIGIN, portfolioPath } from "@/constants/portfolio";
import { baseUrl } from "./constant";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: `${portfolioPath()}/`,
      disallow: [
        `${portfolioPath("/private")}/`,
        `${portfolioPath("/admin")}/`,
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: PORTFOLIO_ORIGIN,
  };
}
