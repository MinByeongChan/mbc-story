# 컴포넌트·인벤토리·a11y·문서 채널

## 1. 인벤토리

1. 기존 화면을 훑어 **중복 UI**를 목록화합니다 (버튼, 입력, 카드, 모달 등).
2. 각 항목에 **우선순위** (P0~P2)와 **통합 후보 이름**을 붙입니다.
3. “원자 → 분자 → 템플릿”으로 쪼갤지, **패턴 단위**로 묶을지 팀에서 한 가지 기준을 택합니다.

| 컴포넌트 | 발견 위치(앱/경로) | 변형 수 | 우선순위 | 비고 |
| --- | --- | --- | --- | --- |
| 예: Button | | | | |

## 2. 조직화 모델 (Atomic 외 대안)

**Atomic Design**(원자 → 분자 → 유기체 → 템플릿 → 페이지)은 UI를 크기 순으로 나누는 데 유리하지만, **도메인 경계가 애매하거나** “분자 vs 유기체”를 두는 논쟁이 잦으면 다른 프레임을 쓰는 편이 낫습니다.

### 2.1 계층형(티어) — Carbon / Polaris / Material 스타일

| 층 | 역할 | 예시 |
| --- | --- | --- |
| **Foundation** | 토큰, 타이포, 그리드, 모션 원칙 | `mbc-design-tokens` |
| **Components** | 재사용 가능한 UI 조각 (한 화면 조각이 아님) | Button, TextField, Dialog |
| **Patterns** | **특정 사용자 과제**를 풀기 위한 검증된 조합 | 필터 바, 빈 상태, 에러 요약 |
| **Templates / Page types** (선택) | 자주 반복되는 페이지 뼈대 | 설정 2단 레이아웃, 대시보드 그리드 |

Atomic의 “크기” 대신 **“재사용 범위와 책임”**으로 나눕니다. *Pattern*은 컴포넌트 묶음이지만, **디자인 결정이 이미 내려진 솔루션**이라는 점에서 단순 합성과 구분합니다.

### 2.2 Primitives vs Patterns (역할 기준)

- **Primitives**: 스타일·접근성·variant만 정하고, **비즈니스 문맥 이름을 붙이지 않음** (Button, Input, Stack).
- **Patterns**: “검색 결과 없음”, “결제 요약 카드”처럼 **문제/시나리오**가 이름에 드러남. 내부는 Primitives로만 구성.

Atomic의 분자/유기체를 **“크기”가 아니라 “문맥이 붙었는가”**로 재정의한 것에 가깝습니다.

### 2.3 Headless + Presentation

- **Headless** (Radix, React Aria 등): 포커스, 키보드, `aria`, 상태 머신.
- **Presentation** (팀 DS): 토큰·클래스·시각 variant.

한 축은 **행동**, 한 축은 **외형**이라 Atomic 층위와 직교합니다. 디자인 시스템 문서에는 “Primitives = 스타일드 래퍼”로만 적어도 됩니다.

### 2.4 컴포지션 (Composition)

`children`, 슬롯 props, 필요 시 `Parent.Child` 형태 등으로 **부품을 조합**해 화면을 만듭니다. Atomic의 “층”보다 **조합 책임과 슬롯 경계**를 기준으로 잡는 편이 맞을 때가 많습니다.

상세 규칙(Figma·React·a11y·Storybook)은 **[컴포지션 가이드](./composition.md)**를 따릅니다.

### 2.5 도메인·기능별 그룹 (대규모 제품)

결제, 설정, 온보딩처럼 **팀/경계가 나뉜 경우** 폴더·문서를 도메인으로 묶습니다. Atomic 레벨과 병행해도 되고, **충돌 시 도메인 패키지가 우선**이라고 정하면 혼선이 줄어듭니다.

### 2.6 권장 하이브리드 (실무)

1. 문서 네비게이션은 **Foundation → Components → Patterns**처럼 티어를 기본으로 한다.
2. 컴포넌트는 필요 시 **컴포지션**(children·슬롯·조합)·**Headless**로 나눈다.
3. “원자/분자” 용어는 **필수 라벨로 두지 않고**, 팀이 이해하기 쉬운 **역할·시나리오** 이름을 우선한다.

---

## 3. Variant API 가이드

- **권장 props**: `variant`, `size`, `state`(또는 개별 `disabled`, `loading` 등 명시적 이름)
- **지양**: 의미가 겹치는 boolean 다수 (`primary` + `secondary` 동시 true 등)
- **합성**: 레이아웃이 자주 바뀌면 `children` / 슬롯으로 나누고, 고정 레이아웃만 필요하면 단일 컴포넌트로 둡니다.
- **상태**: 로딩, 비어 있음, 에러, 비활성을 디자인·스토리에 모두 포함할지 체크리스트로 관리합니다.

### Variant 조합표 (템플릿)

| variant \\ size | sm | md | lg |
| --- | --- | --- | --- |
| primary | ✓ | ✓ | ✓ |
| secondary | ✓ | ✓ | |

(필요 시 `destructive`, `ghost` 등 열 추가)

## 4. 접근성 체크리스트 (컴포넌트 출시 전)

- [ ] **색**: 텍스트·아이콘 대비 WCAG 기준 (역할에 따라 AA 이상)
- [ ] **키보드**: Tab 순서, Enter/Space 동작, 포커스가 화면에서 보임
- [ ] **포커스**: `focus-visible` 스타일이 `mbc-design-tokens` 시맨틱 `border.focus` 등과 일치
- [ ] **스크린 리더**: 버튼/링크에 접근 가능한 이름, 폼에 라벨 연결
- [ ] **모달·드롭다운**: 포커스 트랩, 닫기 후 포커스 복귀
- [ ] **모션**: `prefers-reduced-motion` 시 필수 애니메이션 완화 또는 비활성

## 5. 문서 채널

| 채널 | 용도 |
| --- | --- |
| **Storybook** | 인터랙션·시각적 문서, variant 표현 |
| **이 저장소 `docs/design-system`** | 원칙·로드맵·거버넌스 |
| (선택) Notion / Zeroheight | 디자이너 중심 가이드, Do/Don’t |

### Storybook (현재 저장소)

[`packages/gocheok-project`](../../packages/gocheok-project/package.json)에 `storybook`, `build-storybook` 스크립트가 있습니다. **UI 패키지를 둘 앱**이 정해지면 그 앱(또는 `packages/ui`)에 Storybook을 집중시키고, 다른 패키지는 해당 스토리를 링크하거나 스토리를 패키지로 옮기는 방식을 택할 수 있습니다.

---

## 부록: 컴포넌트 RFC 템플릿

새 컴포넌트 또는 큰 API 변경 시 아래를 복사해 이슈·PR 또는 `docs/design-system/rfc/`에 저장합니다.

```markdown
## 제목
(컴포넌트 이름 또는 변경 요약)

## 배경 / 문제
왜 필요한가?

## 목표 / 비목표
- 목표:
- 하지 않을 것:

## 디자인
- Figma 링크:
- 토큰: 시맨틱 이름 (mbc-design-tokens 참조)

## API 초안
\`\`\`tsx
// props 예시
\`\`\`

## 접근성
- 키보드 / 스크린 리더 / 대비

## 마이그레이션
기존 사용처 대체 계획

## 승인
- [ ] 디자인
- [ ] FE
```

---

다음: [거버넌스](./governance.md)
