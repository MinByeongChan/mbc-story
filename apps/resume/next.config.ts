import type { NextConfig } from 'next';

import { RESUME_BASE_PATH } from './src/constants/resume';

const nextConfig: NextConfig = {
  basePath: RESUME_BASE_PATH,
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
