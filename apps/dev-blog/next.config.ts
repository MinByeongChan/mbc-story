import type { NextConfig } from 'next';

import { BLOG_BASE_PATH } from './src/constants/blog';

const nextConfig: NextConfig = {
  basePath: BLOG_BASE_PATH,
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
