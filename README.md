# MBC Story - 민병찬 개발 프로젝트 모노레포

> PNPM Workspace를 활용한 프론트엔드 개발자 민병찬의 통합 프로젝트 저장소

![Project Overview](./apps/portfolio/public/favicon-large.png)

## 📋 프로젝트 개요

이 저장소는 민병찬의 개발 프로젝트들을 통합 관리하는 모노레포입니다. PNPM Workspace를 활용하여 여러 프로젝트 간의 의존성을 효율적으로 관리하고, 공통 컴포넌트와 설정을 공유합니다.

현재 포트폴리오 웹사이트와 재사용 가능한 UI 컴포넌트 라이브러리를 포함하고 있으며, 향후 추가 프로젝트들이 확장될 예정입니다.

## 🏗 모노레포 구조

```
mbc-story/
├── apps/                       # 애플리케이션들
│   └── portfolio/              # 포트폴리오 웹사이트 (Next.js)
├── packages/                   # 공유 패키지들
│   └── gocheok-project/        # UI 컴포넌트 라이브러리 (React + Vite)
├── pnpm-workspace.yaml         # PNPM 워크스페이스 설정
├── package.json                # 루트 패키지 설정
└── tsconfig.base.json          # 공통 TypeScript 설정
```

## 🚀 주요 프로젝트

### 📱 Portfolio (apps/portfolio)

**기술 스택**: Next.js 15 + React 19 + TypeScript + TailwindCSS + GSAP

민병찬의 개인 포트폴리오 웹사이트로, 프론트엔드 개발자로서의 경험과 프로젝트들을 소개합니다.

**주요 기능**:

- 반응형 디자인 (모바일/태블릿/데스크톱 최적화)
- GSAP 기반 인터랙티브 애니메이션
- SEO 최적화 (메타데이터, Open Graph, JSON-LD)
- 프로젝트 상세 페이지 (마크다운 기반)
- PWA 지원

**배포**: https://byeongchan.space/portfolio

### 🧾 Resume (apps/resume)

**배포**: https://byeongchan.space/resume

### ✍️ Blog (apps/dev-blog)

**배포**: https://byeongchan.space/blog

### 🎨 Gocheok Project (packages/gocheok-project)

**기술 스택**: React + TypeScript + Vite + TailwindCSS + Storybook

재사용 가능한 UI 컴포넌트 라이브러리로, **역할별(actions, layout, navigation, presenter 등)** 폴더로 구성합니다.

**컴포넌트 구조 (예시)**:

- **actions**: Button, Anchor, ButtonContainer
- **layout**: Divider
- **navigation**: Header
- **presenter**: Typography, Chip, Profile

**개발 도구**:

- Storybook을 통한 컴포넌트 문서화
- Vitest를 활용한 단위 테스트
- ESLint + Prettier를 통한 코드 품질 관리

## 🛠 기술 스택

### 공통 기술

- **언어**: TypeScript 5.7
- **패키지 매니저**: PNPM 9.1.0
- **모노레포**: PNPM Workspaces
- **스타일링**: TailwindCSS 4.1.10
- **코드 품질**: ESLint + Prettier

### 카탈로그 기반 의존성 관리

```yaml
# pnpm-workspace.yaml
catalogs:
  react:
    react: ^19.1.0
    react-dom: ^19.1.0
    "@types/react": ^19.1.8
    "@types/react-dom": ^19.1.6

  tailwindcss:
    tailwindcss: ^4.1.10
    tailwind-merge: ^3.3.1
    "@tailwindcss/postcss": ^4.1.10
```

## 🚦 시작하기

### 필수 조건

- Node.js 18.0.0 이상
- PNPM 9.1.0 이상

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/minbyeongchan/mbc-story.git
cd mbc-story

# 의존성 설치 (모든 워크스페이스)
pnpm install

# 포트폴리오 개발 서버 실행
pnpm --filter portfolio dev

# UI 라이브러리 개발 서버 실행
pnpm --filter gocheok-project dev

# Storybook 실행 (UI 컴포넌트 문서화)
pnpm --filter gocheok-project storybook
```

### 개별 프로젝트 명령어

```bash
# 포트폴리오 관련 명령어
pnpm --filter portfolio build
pnpm --filter portfolio start
pnpm --filter portfolio lint

# UI 라이브러리 관련 명령어
pnpm --filter gocheok-project build
pnpm --filter gocheok-project preview
pnpm --filter gocheok-project build-storybook
```

## 📦 워크스페이스 구성

### Apps (애플리케이션)

- `apps/portfolio`: Next.js 기반 포트폴리오 웹사이트

### Packages (공유 패키지)

- `packages/gocheok-project`: 재사용 가능한 UI 컴포넌트 라이브러리

### 의존성 관리

- 공통 의존성은 루트 `package.json`에서 관리
- 프로젝트별 의존성은 각각의 `package.json`에서 관리
- `catalog:` 프로토콜을 통한 버전 일관성 유지

## 🎯 개발 철학

### 코드 품질

- TypeScript strict 모드 활성화
- ESLint + Prettier를 통한 일관된 코드 스타일
- 컴포넌트 단위 테스트 작성

### 재사용성

- 역할별 UI 컴포넌트 구조(actions, layout, navigation 등)
- 공통 컴포넌트 라이브러리 구축
- 설정 파일 공유를 통한 일관성 유지

### 성능 최적화

- Next.js의 자동 코드 분할 활용
- 이미지 최적화 (WebP 지원)
- TailwindCSS를 통한 CSS 번들 크기 최적화

## 🔧 개발 환경 설정

### VSCode 추천 확장

- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- TypeScript Importer
- Prettier - Code formatter
- ESLint

### 코드 품질 도구

- **ESLint**: 코드 품질 및 일관성 검사
- **Prettier**: 코드 포맷팅
- **TypeScript**: 타입 안전성
- **Vitest**: 단위 테스트

## 📈 향후 계획

### 단기 계획

- [ ] 공통 UI 컴포넌트 라이브러리 확장
- [ ] 테스트 커버리지 향상
- [ ] CI/CD 파이프라인 구축

### 장기 계획

- [ ] 추가 애플리케이션 프로젝트 통합
- [ ] 디자인 시스템 문서화

## 🤝 기여 가이드

1. 이슈 생성 또는 기존 이슈 확인
2. 새 브랜치 생성 (`feature/기능명` 또는 `fix/버그명`)
3. 변경사항 커밋
4. Pull Request 생성
5. 나홀로 코드 리뷰 후 병합

## 📞 연락처

- **개발자**: 민병찬 (MinByeongChan)
- **이메일**: mbc0481@naver.com
- **GitHub**: https://github.com/minbyeongchan
- **포트폴리오**: https://byeongchan.space/portfolio
- **이력서**: https://byeongchan.space/resume
- **블로그**: https://byeongchan.space/blog

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 및 학습 목적으로 제작되었습니다.

---

**버전**: 1.0.0
