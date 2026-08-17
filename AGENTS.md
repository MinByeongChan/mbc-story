# mbc-story 작업 규칙

## 기본 응답

- 사용자가 다른 언어를 요청하지 않으면 설명, 진행 상황, 리뷰 결과, 커밋 메시지, PR 제목과 본문을 한국어로 작성한다.
- 코드, 명령어, 파일 경로, API 필드명, 라이브러리명은 원문을 유지한다.

## 저장소

- 이 저장소는 `pnpm` 워크스페이스다. 패키지별 명령은 가능하면 `pnpm --filter <package> <command>`로 실행한다.
- 사용자가 만들었거나 현재 작업 범위와 무관한 변경을 수정하거나 커밋하지 않는다.
- 새 production dependency를 추가하기 전에 사용자에게 확인한다.

## Next.js App Router

- `app/`에서는 폴더 기반 라우팅을 사용하고 `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`의 역할을 지킨다.
- URL에 영향을 주지 않는 구조화에는 route group, 라우팅 제외 폴더에는 `_` 접두사를 사용한다.
- Server Component를 기본으로 사용한다. 상태, effect, browser API, event listener가 필요할 때만 파일 상단에 `'use client'`를 선언한다.
- 서버 데이터는 Server Component에서 `async`/`await`로 가져오고 요구사항에 맞는 `fetch` cache와 revalidation 정책을 명시한다.
- form submission과 mutation에는 적절한 경우 Server Action을 사용하고, 변경 뒤에는 `revalidatePath` 또는 `revalidateTag`를 적용한다.

## React와 TypeScript

- 새 React 코드는 function component로 작성한다.
- component 파일은 PascalCase로 이름 짓고, page component처럼 framework가 요구하는 경우를 제외하면 named export를 우선한다.
- props는 component 바로 위의 TypeScript `interface`로 선언한다.
- hook은 조건문이나 조기 return보다 앞선 component 최상위에서 호출한다.
- import는 React, 외부 라이브러리, 내부 모듈과 component, asset과 style 순으로 정리하되 기존 파일 규칙을 우선한다.
- React 19에서는 DOM `ref`를 일반 prop으로 받는 방식을 우선하고, legacy interop이 필요한 경우에만 `forwardRef`를 사용한다.
- 단순 local state는 `useState`, 복잡한 state transition은 `useReducer`, 단순 shared state는 Context를 우선 검토한다. 과도한 prop drilling을 피한다.
- semantic HTML과 visible focus style을 유지한다.

## Tailwind CSS

- JSX/HTML의 utility class를 우선하고, 반복되는 variant 조합은 기존 `cva` 패턴을 재사용한다.
- package별 Tailwind config와 기존 design token을 따른다. 재사용 가능한 값은 `theme.extend`에 정의하고 arbitrary value는 일회성 예외에만 사용한다.
- `content`에는 utility를 사용하는 source와 Storybook 경로가 정확히 포함되도록 한다.
- `@apply`는 global base style이나 component abstraction으로 해결하기 어려운 공유 패턴에만 제한적으로 사용한다.
- 긴 class 목록은 저장소의 `prettier-plugin-tailwindcss` 정렬 결과를 따른다.

## Pull Request

- 사용자가 PR 생성을 요청하면 `.agents/skills/pull-request/SKILL.md`의 절차를 따른다.
- PR에 필요한 커밋은 사용자가 커밋까지 명시적으로 요청한 경우에만 생성한다.
