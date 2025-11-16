# TanStack Query + FSD + Router Loaders (Fake Store API)

## 소개

React + TypeScript + Vite 기반으로 TanStack Query v5, React Router 로더 기반 프리페칭, FSD(feature-sliced) 스타일 구조를 적용한 예제입니다.

## 실행

```bash
pnpm i
pnpm dev
```

## 구조(FSD 스타일)

```
src/
  components/            # entities/ui 수준 공용 컴포넌트 (예: Product, AddProductForm)
  pages/                 # route-level 페이지 (Products, ProductDetails, ProductsInfinite)
  services/              # feature/entity의 API/훅/타입
    fetchProductList/
    fetchProductById/
    fetchCategories/
    mutations/
    types.ts
  shared/
    apiClient.ts         # fetch 래퍼
    queryKeys.ts         # 쿼리 키 중앙관리
  routes.tsx             # createAppRouter(queryClient)
  routesLoaders.ts       # loader로 프리페칭
  App.tsx                # QueryClientProvider, Devtools, RouterProvider
```

## React Query v5 핵심 포인트

- 전역 에러 핸들링: `QueryCache.onError` 사용
- 로더 프리페칭: `queryClient.fetchQuery`로 데이터 시드 후 컴포넌트에서 `useSuspenseQuery` 재사용
- 쿼리 키 일원화: `src/shared/queryKeys.ts`
- Devtools 포함: `@tanstack/react-query-devtools`

## 구현 기능

- 제품 목록/상세, 카테고리 필터, hover prefetch
- 로더 기반 프리페칭(목록/상세)
- 무한 스크롤 페이지(`/infinite`)
- 낙관적 추가(Add Product) 폼 및 캐시 업데이트

## 명령어

- 개발: `pnpm dev`
- 빌드: `pnpm build`
- 미리보기: `pnpm preview`
