import { defineConfig } from 'eslint/config';
import { mbcReactViteConfig } from 'mbc-eslint';

export default defineConfig([
  ...mbcReactViteConfig({
    ignores: ['dist', '.vite'],
    tsconfigRootDir: import.meta.dirname,
  }),
]);
