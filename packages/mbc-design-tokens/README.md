# mbc-design-tokens

모노레포 공용 **디자인 토큰** JSON입니다. Tailwind `theme.extend`, Panda `theme.extend.tokens`, Figma Variables와 **같은 값**을 맞출 때 이 패키지를 단일 소스로 사용합니다.

## 패키지

| 파일 | 내용 |
| --- | --- |
| `primitives.json` | 색 스케일, spacing, radius, fontSize 등 프리미티브 |
| `semantic.json` | 배경·텍스트·보더·액션 등 시맨틱 (프리미티브 참조) |

형식은 [Design Tokens Community Group](https://design-tokens.github.io/community-group/format/)을 따릅니다. `semantic.json`의 `{color.neutral.50}` 참조는 **문서화·도구 체인**용이며, 런타임에서 해석하려면 Style Dictionary 등으로 평탄화하거나 앱에서 매핑합니다.

## 설치

워크스페이스 의존성:

```json
{
  "dependencies": {
    "mbc-design-tokens": "workspace:*"
  }
}
```

## 소비 예시

### Tailwind (v4 / `@tailwindcss/vite`)

`tailwind.config`에서 JSON을 읽어 `theme.extend`에 반영합니다. 값 복사 시 **이 패키지의 숫자와 동일한지** PR에서 확인합니다.

### Panda CSS

`panda.config.ts`의 `theme.extend.tokens`에 동일한 hex·rem을 입력하거나, 빌드 스크립트로 JSON에서 생성합니다.

### Figma

- **코드 우선**: Figma Variables를 이 JSON과 수치 일치로 유지 (주기적 감사).
- **Figma 우선**: Variables 내보내기 → 이 repo의 JSON 갱신 → 앱 설정 반영.

---

상위 문서: [docs/design-system/token-strategy.md](../../docs/design-system/token-strategy.md)
