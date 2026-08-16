# gocheok-project 작업 규칙

- 이 지침은 `packages/gocheok-project`의 source, Storybook, public asset, package 설정에 적용한다. `dist/`, `dist-ssr/`, `storybook-static/`, `node_modules/`, cache와 generated artifact는 수정하지 않는다.
- 이 package는 React, Vite, Tailwind 기반 Storybook design system이다. global style과 font는 `src/tailwind.css` 등 기존 entry를 따른다.
- component는 `src/components/` 아래의 기존 domain 폴더(`actions`, `presenter`, `layout`, `navigation` 등)에 배치한다.
- `src/` 내부 import에는 상대 경로 대신 `@gocheok/...` alias를 사용한다. package `tsconfig`, Vite alias, 소비 app의 `paths`에도 같은 접두사를 유지한다.
- style은 utility class를 우선하고 variant는 기존 `cva` 패턴을 재사용한다. 기존 theme과 token에 맞는 값이 있으면 임의 값을 추가하지 않는다.
- DOM `ref`는 일반 prop으로 받고 props에 `ref?: React.Ref<HTMLElementType>`을 명시한다. legacy interop이 필요한 경우가 아니면 `forwardRef`를 추가하지 않는다.
- Storybook 파일은 `*.stories.tsx` 이름과 기존 story 구조를 따른다.
- 검증에는 변경 범위에 맞춰 `pnpm --filter gocheok-project run lint`와 `pnpm --filter gocheok-project run build`를 사용한다.
