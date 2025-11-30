import { defineConfig, loadEnv } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      react({
        babel: {
          plugins: [['babel-plugin-react-compiler']],
        },
      }),
      tsconfigPaths(),
      createHtmlPlugin({
        inject: {
          data: {
            title: 'ABC x CDF 결혼',
            KAKAO_MAP_API_KEY: env.VITE_KAKAO_MAP_APP_KEY,
          },
        },
      }),
    ],
    resolve: {
      alias: {
        '@pages': path.resolve(__dirname, './src/pages'),
        '@components': path.resolve(__dirname, './src/components'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@styled-system': path.resolve(__dirname, './styled-system'),
      },
    },
  };
});
