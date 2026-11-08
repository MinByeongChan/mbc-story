## 개요

단조로운 스타일과 SPA 구조였던 포트폴리오를 Next.js로 다시 만들었습니다. 이때 pnpm workspace 모노레포를 도입해 기술 블로그와 이후 프로젝트를 한곳에서 관리할 수 있게 했습니다.

## 핵심 사례

### SPA에서 Next.js App Router로

처음 써보는 Next.js 15로 포트폴리오를 옮겼습니다. 프로젝트 상세는 서버에서 파일 시스템의 Markdown을 직접 읽어 렌더링하도록 구성했고, GSAP과 Tailwind CSS로 스크롤 애니메이션과 반응형 UI를 만들었습니다.

CSS-in-JS 대신 Tailwind CSS를 써서 번들 사이즈를 줄일 수 있었습니다. 직접 GSAP 애니메이션을 적용해 보며 애니메이션 표현의 폭도 넓힐 수 있었습니다.

## 그 외 작업

- pnpm workspace 기반 모노레포 구성
- GSAP과 Tailwind CSS 기반 반응형 레이아웃과 스크롤 애니메이션 구현
