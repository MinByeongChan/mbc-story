import { defineConfig } from 'eslint/config';
import storybook from 'eslint-plugin-storybook';
import { mbcReactViteConfig } from 'mbc-eslint';

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
  ...storybook.configs['flat/recommended'],
]);
