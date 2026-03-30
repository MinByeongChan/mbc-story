import { defineConfig } from 'eslint/config';
import { mbcReactViteConfig } from 'mbc-eslint';

// Storybook 9의 eslint-plugin-storybook은 ESLint 10과 호환되지 않음 (Storybook 10+에서 플러그인 재도입 가능).

export default defineConfig([
  ...mbcReactViteConfig({
    tsconfigRootDir: import.meta.dirname,
    prettierOptions: {
      singleQuote: true,
      semi: true,
      useTabs: false,
      tabWidth: 2,
      trailingComma: 'all',
      printWidth: 100,
      arrowParens: 'always',
      orderedImports: true,
      bracketSpacing: true,
      bracketSameLine: true,
      jsxBracketSameLine: false,
      endOfLine: 'auto',
      plugins: ['prettier-plugin-tailwindcss'],
    },
  }),
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]);
