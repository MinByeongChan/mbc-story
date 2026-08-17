# Portfolio V2

민병찬 프론트엔드 포트폴리오의 두 번째 버전입니다. 기존 `apps/portfolio`를 참고하되 독립 Next.js 앱으로 구성했습니다.

## Content Harness

- `src/content/portfolio.ts`에 소개, 강점, 기술, 경력, 프로젝트 상세 데이터를 구조화합니다.
- `src/components/PortfolioApp.tsx`에서 SPA 상태와 상세 모달을 관리합니다.
- `src/lib/harness.ts`가 콘텐츠 품질과 자산 경로를 검증합니다.
- 테스트 실패 메시지를 기준으로 누락된 프로젝트, 이미지, 상세 항목을 보강합니다.

## Commands

```bash
pnpm --filter portfolio-v2 dev
pnpm --filter portfolio-v2 test
pnpm --filter portfolio-v2 typecheck
pnpm --filter portfolio-v2 build
```
