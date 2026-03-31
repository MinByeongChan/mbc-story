# 토큰 전략

## 1. 계층

### 1.1 프리미티브 (Primitive)

색 단계, 숫자 스케일, raw 값에 **역할과 무관한** 이름을 붙입니다.

- 예: `grey.500`, `blue.600`, `space.4`, `radius.md`
- 용도: 디자이너·개발자가 “팔레트에서 몇 번째인지”를 공유하는 최하위 레이어

### 1.2 시맨틱 (Semantic)

UI **용도**에 붙인 이름입니다. 테마·브랜드 전환은 이 레이어에서 매핑합니다.

- 예: `color.background.default`, `color.text.primary`, `color.border.focus`
- 컴포넌트는 가능하면 프리미티브가 아니라 **시맨틱 토큰**을 참조합니다.

### 1.3 컴포넌트 (선택)

특정 컴포넌트에만 쓰는 토큰이 필요하면 `button.primary.bg`처럼 스코프를 둡니다. 남용하면 유지보수가 어려워지므로, 우선 시맨틱으로 해결할 수 있는지 검토합니다.

## 2. 스페이싱·타이포·모션

| 영역 | 원칙 |
| --- | --- |
| Spacing | 4 또는 8pt 그리드 등 **고정 스케일**을 문서화하고, 임의 픽셀은 예외로만 |
| Typography | 스케일(예: `text.sm` ~ `text.2xl`)과 용도(제목/본문/캡션) 매핑 표 |
| Radius / Shadow / z-index | 이름 있는 토큰으로 제한 |
| Motion | 지속시간·이징 토큰화, `prefers-reduced-motion` 정책은 [컴포넌트·a11y](./components-and-a11y.md)와 연동 |

## 3. Figma ↔ 코드 동기화

팀이 선택할 수 있는 패턴입니다. 하나를 **공식**으로 정하고 나머지는 예외 경로만 둡니다.

| 방식 | 장점 | 단점 |
| --- | --- | --- |
| **A. 코드가 소스** | 빌드·타입과 일치하기 쉬움 | 디자이너가 Figma Variables를 수동 반영할 수 있음 |
| **B. Figma Variables가 소스** | 시각적 진실 공급원 | 토큰 JSON 추출·빌드 파이프라인 필요 |
| **C. 중간 JSON (Style Dictionary 등)** | 멀티 플랫폼 산출물에 유리 | 초기 설정 비용 |

현재 저장소의 **단일 진실 공급원 시작점**은 [`packages/mbc-design-tokens`](../../packages/mbc-design-tokens/README.md)의 JSON입니다. Figma를 소스로 바꾸면 이 패키지를 생성 단계의 입력으로 바꾸면 됩니다.

## 4. 네이밍

- Figma 변수명, CSS 변수명, TypeScript 상수에서 **시맨틱 키를 동일하게** 쓰면 핸드오프 비용이 줄어듭니다.
- 언어: 팀 표준(영문 권장)을 정하고 축약어 사전을 유지합니다.

---

다음: [모노레포 정렬](./monorepo-alignment.md)에서 Tailwind·Panda에 이 토큰을 어떻게 연결할지 정리합니다.
