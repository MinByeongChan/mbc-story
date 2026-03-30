import { createRequire } from 'node:module';
import { mbcReactTsPrettierConfig } from './index.js';

const require = createRequire(import.meta.url);
/** @type {typeof import('@next/eslint-plugin-next')['flatConfig']} */
const { flatConfig } = require('@next/eslint-plugin-next');

/**
 * Next.js App Router / Pages용 flat config.
 * `@next/eslint-plugin-next`는 앱에 설치해야 합니다( peer optional ).
 *
 * @param {object} [options]
 * @param {string[]} [options.ignores] — 기본값: `['.next', 'out', 'dist']`
 * @param {string} options.tsconfigRootDir
 * @param {Partial<import("prettier").Options>} [options.prettierOptions]
 * @param {'recommended' | 'core-web-vitals'} [options.nextPreset='core-web-vitals'] — Next 공식 flat 프리셋
 * @returns {import('eslint').Linter.Config[]}
 */
export function mbcNextConfig(options = {}) {
  const {
    ignores = ['.next', 'out', 'dist'],
    tsconfigRootDir,
    prettierOptions = {},
    nextPreset = 'core-web-vitals',
  } = options;

  const nextFlat =
    nextPreset === 'recommended' ? flatConfig.recommended : flatConfig.coreWebVitals;

  return [
    ...mbcReactTsPrettierConfig({
      ignores,
      tsconfigRootDir,
      prettierOptions,
    }),
    {
      ...nextFlat,
      files: ['**/*.{js,jsx,ts,tsx}'],
    },
  ];
}
