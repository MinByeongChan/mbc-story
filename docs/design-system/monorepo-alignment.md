# 모노레포 정렬 (Tailwind · Panda 공존)

## 현황

- 일부 앱은 **Tailwind** ([예: `packages/gocheok-project`](../../packages/gocheok-project/tailwind.config.js))
- 일부 앱은 **Panda CSS** ([예: `apps/h3/panda.config.ts`](../../apps/h3/panda.config.ts))

스타일 엔진을 당장 하나로 합치지 않아도, **토큰과 원칙**은 공유할 수 있습니다.

## 권장 방침

1. **단일 토큰 소스**: [`mbc-design-tokens`](../../packages/mbc-design-tokens/README.md)의 JSON을 기준으로, 각 앱의 `theme.extend`에 **동일한 값**을 반영합니다.
2. **컴포넌트는 앱별 유지** 가능: React 컴포넌트를 꼭 하나의 패키지로 모으지 않아도 되지만, **이름·variant·a11y 패턴**은 [컴포넌트·a11y](./components-and-a11y.md)에 맞춥니다.
3. **드리프트 방지**: 디자인 시스템 관련 PR에는 “토큰 패키지와 수치 일치”를 리뷰 체크리스트에 넣습니다.

## 이행 로드맵 (예시 — 팀에서 날짜·필요 시 조정)

| 단계 | 내용 | 완료 기준 |
| --- | --- | --- |
| **0** | [범위·목표](./scope-and-goals.md) 합의 | 표가 채워짐 |
| **1** | `mbc-design-tokens`를 신규 화면·리팩터에 우선 적용 | 최소 1앱에서 Tailwind 또는 Panda 설정이 토큰과 정렬 |
| **2** | 자주 쓰는 컴포넌트(Button, Input 등)를 문서화·Storybook에 고정 | variant 표와 스토리 존재 |
| **3** (선택) | 신규 앱은 한 스택만 쓰기 등 **수렴 규칙** 도입 | RFC 승인 |
| **4** (선택) | Style Dictionary 등으로 JSON → CSS 변수·Panda 산출 자동화 | CI에서 토큰 빌드 |

## 한 스택으로 수렴할 때 고려할 점

- 팀 숙련도, 번들 크기, RSC/SSR 호환, 기존 코드량
- 수렴은 **신규 + 터치한 파일**부터 적용하고, 레거시는 [거버넌스](./governance.md)의 점진 채택 규칙을 따릅니다.

---

다음: [컴포넌트·a11y](./components-and-a11y.md)
