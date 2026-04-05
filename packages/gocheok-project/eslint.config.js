import storybook from "eslint-plugin-storybook";

import { defineConfig } from 'eslint/config';
import { mbcReactViteConfig } from 'mbc-eslint';

export default defineConfig([
  { 
    ignores: ['storybook-static/**', 'dist/**'] 
  },
  ...mbcReactViteConfig({ tsconfigRootDir: import.meta.dirname }),
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }, 
  ...storybook.configs["flat/recommended"],
]);
