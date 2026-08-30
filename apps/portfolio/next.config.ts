import type { NextConfig } from "next";
import { PORTFOLIO_BASE_PATH } from "./src/constants/portfolio";

const nextConfig: NextConfig = {
  basePath: PORTFOLIO_BASE_PATH,
};

export default nextConfig;
