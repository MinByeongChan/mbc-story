import js from '@eslint/js';
import globals from 'globals';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { globalIgnores } from 'eslint/config';

/** @type {import("prettier").Options} */
export const defaultPrettierOptions = {
  singleQuote: true,
  semi: true,
  useTabs: false,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 100,
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'auto',
};

/**
 * React + TypeScript + Prettier + react-hooks (Vite의 react-refresh 없음).
 * Next.js 등에서 공통 베이스로 사용합니다.
 *
 * @param {object} [options]
 * @param {string[]} [options.ignores=['dist']] — `globalIgnores`에 넘길 경로
 * @param {string} options.tsconfigRootDir — 앱 루트(보통 `import.meta.dirname`). eslint.config.js 기준 tsconfig 위치
 * @param {Partial<import("prettier").Options>} [options.prettierOptions] — `defaultPrettierOptions`에 병합
 * @returns {import('eslint').Linter.Config[]}
 */
export function mbcReactTsPrettierConfig(options = {}) {
  const { ignores = ['dist'], tsconfigRootDir, prettierOptions = {} } = options;

  if (typeof tsconfigRootDir !== 'string') {
    throw new Error(
      'mbcReactTsPrettierConfig: `tsconfigRootDir` is required (pass `import.meta.dirname` from the app eslint.config.js)',
    );
  }

  const prettierRuleOptions = {
    ...defaultPrettierOptions,
    ...prettierOptions,
  };

  return [
    globalIgnores(ignores),
    {
      files: ['**/*.{ts,tsx}'],
      extends: [
        js.configs.recommended,
        tseslint.configs.recommended,
        reactHooks.configs.flat.recommended,
        prettierRecommended,
      ],
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
        parser: tseslint.parser,
        parserOptions: {
          tsconfigRootDir,
        },
      },
      rules: {
        'prettier/prettier': ['error', prettierRuleOptions],
      },
    },
  ];
}

/**
 * @param {object} [options]
 * @param {string[]} [options.ignores=['dist']] — `globalIgnores`에 넘길 경로
 * @param {string} options.tsconfigRootDir — 앱 루트(보통 `import.meta.dirname`). eslint.config.js 기준 tsconfig 위치
 * @param {Partial<import("prettier").Options>} [options.prettierOptions] — `defaultPrettierOptions`에 병합
 * @returns {import('eslint').Linter.Config[]}
 */
export function mbcReactViteConfig(options = {}) {
  const { ignores = ['dist'], tsconfigRootDir, prettierOptions = {} } = options;

  if (typeof tsconfigRootDir !== 'string') {
    throw new Error(
      'mbcReactViteConfig: `tsconfigRootDir` is required (pass `import.meta.dirname` from the app eslint.config.js)',
    );
  }

  const prettierRuleOptions = {
    ...defaultPrettierOptions,
    ...prettierOptions,
  };

  return [
    globalIgnores(ignores),
    {
      files: ['**/*.{ts,tsx}'],
      extends: [
        js.configs.recommended,
        tseslint.configs.recommended,
        reactHooks.configs.flat.recommended,
        reactRefresh.configs.vite,
        prettierRecommended,
      ],
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
        parser: tseslint.parser,
        parserOptions: {
          tsconfigRootDir,
        },
      },
      rules: {
        'prettier/prettier': ['error', prettierRuleOptions],
      },
    },
  ];
}
