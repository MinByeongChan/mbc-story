import { defineConfig } from 'eslint/config';
import { mbcReactViteConfig, mbcStorybookFlatRecommended } from 'mbc-eslint';

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
  ...mbcStorybookFlatRecommended(),
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
