import js from '@eslint/js';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import { defineConfig } from 'eslint/config';
import { defaultPrettierOptions, mbcReactViteConfig } from './index.js';

export default defineConfig([
  ...mbcReactViteConfig({ tsconfigRootDir: import.meta.dirname }),
  {
    files: ['**/*.{js,mjs,cjs}'],
    extends: [js.configs.recommended, prettierRecommended],
    rules: {
      'prettier/prettier': ['error', defaultPrettierOptions],
    },
  },
]);
