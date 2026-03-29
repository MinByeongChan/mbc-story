# mbc-eslint

MBC 모노레포용 **ESLint 9 flat config** 공유 패키지입니다. React + Vite + TypeScript 앱에서 권장 규칙·Prettier 연동을 한 번에 가져옵니다.

## 포함되는 것

- `@eslint/js` recommended
- `typescript-eslint` recommended
- `eslint-plugin-react-hooks` (flat recommended)
- `eslint-plugin-react-refresh` (Vite)
- `eslint-plugin-prettier` + `defaultPrettierOptions`로 포맷 일관성 유지

## 설치

pnpm workspace 기준으로 앱의 `devDependencies`에 추가합니다.

```json
{
  "devDependencies": {
    "eslint": "^9.0.0",
    "mbc-eslint": "workspace:*"
  }
}
```

루트에서 `pnpm install` 후 앱 디렉터리에 `eslint.config.js`를 둡니다.

## 앱에서 사용

`mbcReactViteConfig`는 **반드시 `tsconfigRootDir`**를 넘겨야 합니다. 앱의 `eslint.config.js`가 있는 디렉터리 기준으로 TypeScript 프로젝트를 잡기 위함입니다.

```js
import { defineConfig } from 'eslint/config';
import { mbcReactViteConfig } from 'mbc-eslint';

export default defineConfig([
  ...mbcReactViteConfig({
    tsconfigRootDir: import.meta.dirname,
    ignores: ['dist', 'styled-system'],
  }),
]);
```

| 옵션 | 필수 | 설명 |
|------|------|------|
| `tsconfigRootDir` | 예 | 보통 `import.meta.dirname` (해당 `eslint.config.js`가 있는 폴더) |
| `ignores` | 아니오 | `globalIgnores`에 넘길 경로. 기본값 `['dist']` |
| `prettierOptions` | 아니오 | `defaultPrettierOptions`에 병합해 `prettier/prettier` 규칙에 적용 |

Prettier 기본값은 `defaultPrettierOptions`로 export 되어 있으며, 패키지 내부 설정과 동일합니다.

## 패키지 자체 린트

이 패키지의 `eslint.config.js`는 `mbcReactViteConfig`에 더해 `**/*.{js,mjs,cjs}`용 JS + Prettier 규칙을 포함합니다.

## peerDependencies

- `eslint`: `^9.0.0`

앱/패키지에 맞는 `eslint` 버전을 함께 설치해야 합니다.
