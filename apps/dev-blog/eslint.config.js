import { defineConfig } from 'eslint/config';
import { mbcNextConfig } from 'mbc-eslint/next';

export default defineConfig([
  ...mbcNextConfig({
    ignores: [
      '.next',
      'out',
      'dist',
      'node_modules',
      'next-env.d.ts',
      'next.config.mjs',
      'postcss.config.js',
      'tailwind.config.js',
    ],
    tsconfigRootDir: import.meta.dirname,
    nextPreset: 'core-web-vitals',
    prettierOptions: {
      singleQuote: true,
      semi: true,
      useTabs: false,
      tabWidth: 2,
      trailingComma: 'all',
      printWidth: 100,
      arrowParens: 'always',
      bracketSpacing: true,
      bracketSameLine: true,
      jsxBracketSameLine: false,
      endOfLine: 'auto',
    },
  }),
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      'react-hooks/exhaustive-deps': 'off',
      'react-hooks/set-state-in-effect': 'off',
    },
  },
]);
