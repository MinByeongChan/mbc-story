import { defineConfig } from 'eslint/config';
import { mbcReactViteConfig, mbcStorybookFlatRecommended } from 'mbc-eslint';

export default defineConfig([
  ...mbcReactViteConfig({
    tsconfigRootDir: import.meta.dirname,
    ignores: ['dist', 'storybook-static'],
    prettierOptions: {
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
  ...mbcStorybookFlatRecommended(),
]);
