---
name: panda-css
description: Styles UI with Panda CSS (css, cva, sva, tokens, conditions) and repo panda.config conventions. Use when editing styles, recipes, or panda.config—especially apps/h3; when the user mentions Panda CSS, styled-system, cva, or design tokens.
---

# Panda CSS

- Style with **`css()`**; use **`cva`** (or **`sva`** for multi-part) for variants—avoid long chains of one-off inline styles.
- Prefer **`theme` tokens and semantic tokens** from `panda.config`; replace ad-hoc hex/raw px with tokens when a match exists.
- Use **condition keys** (`_hover`, `_focusVisible`, breakpoints like `md:`) inside `css`/`cva` instead of stringly class juggling.
- Respect **preflight** and global CSS entry conventions; avoid heavy global `*` overrides in components.
- Import from the project’s **generated styled-system path** and aliases—match existing imports in the codebase.

## Defaults

- **Colocate** styles with components unless the repo already uses a `*.styles.ts` (or similar) pattern—then follow that.
- Pair styles with **semantic HTML** and visible focus styles (`_focusVisible`) for accessibility.

## apps/h3 (`panda.config.ts` 기준)

- **스캔 범위**: `include`는 `./src/**/*.{js,jsx,ts,tsx}`와 `./pages/**/*.{js,jsx,ts,tsx}`만 포함한다. 스타일·레시피는 이 경로 안에 두어 codegen에 잡히게 한다.
- **출력**: `outdir`은 **`styled-system`**이다. 생성물 import는 이 앱의 기존 패턴(예: `styled-system/css`, `styled-system/patterns`)을 따른다.
- **색 토큰**: `theme.extend.tokens.colors`에 **ivory**(50–200), **blush**(100–300), **sage**(100–300), **gold**(100–300), **charcoal**(600–700), **grey**(100–500)가 정의되어 있다. 새 UI 색은 이 스케일과 맞추고, 임의 hex는 토큰 추가 후 참조하는 편을 우선한다.
- **시맨틱 색**: `semanticTokens.colors`는 **primary** → `{colors.blush.200}`, **secondary** → `{colors.sage.300}`, **default** → `{colors.grey.300}`이다. 브랜드/강조/보조 의미가 있으면 이 셋을 먼저 쓴다.
- **전역**: `preflight: true`이고 `globalCss`에 `html, body`가 있다. 리셋·문서 루트 스타일은 여기(또는 앱 엔트리 CSS 정책)에 모으고, 컴포넌트에서 전역 셀렉터 남용을 피한다.

## Progressive detail

- 다른 앱은 각자 `panda.config.ts`를 본다. 패턴·레시피·codegen 세부는 해당 앱 설정과 동일 폴더의 기존 컴포넌트를 먼저 읽고 맞춘다.
