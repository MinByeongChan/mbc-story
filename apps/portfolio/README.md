# 민병찬 포트폴리오 (B.C Min Portfolio)

> React, TypeScript, Next.js 전문 프론트엔드 개발자 민병찬의 포트폴리오 웹사이트

![Portfolio Preview](./public/favicon-large.png)

## 📋 프로젝트 개요

이 프로젝트는 민병찬의 개인 포트폴리오 웹사이트로, 프론트엔드 개발자로서의 경험과 기술 스택, 그리고 다양한 프로젝트들을 소개하는 웹사이트입니다.

코웨이에서의 실무 경험과 개인 프로젝트들을 통해 쌓아온 기술적 역량을 시각적으로 보여주며, 반응형 디자인과 애니메이션 효과를 통해 사용자 경험을 극대화했습니다.

## 🚀 주요 기능

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 환경에 최적화
- **GSAP 애니메이션**: 부드럽고 인상적인 스크롤 애니메이션 및 인터랙션
- **SEO 최적화**: 메타데이터, Open Graph, JSON-LD 스키마 적용
- **다국어 지원 준비**: 한국어/영어 지원을 위한 구조 설계
- **프로젝트 상세 페이지**: 개별 프로젝트에 대한 상세한 정보 제공
- **PWA 지원**: 매니페스트 파일을 통한 앱 설치 가능

## 🛠 기술 스택

### Frontend

- **Next.js 15.3.5** - React 기반 풀스택 프레임워크
- **React 19.1.0** - 사용자 인터페이스 라이브러리
- **TypeScript** - 타입 안전성을 위한 정적 타입 시스템
- **TailwindCSS 4.1.10** - 유틸리티 우선 CSS 프레임워크

### 애니메이션 & 인터랙션

- **GSAP 3.13.0** - 고성능 애니메이션 라이브러리
- **@gsap/react** - React용 GSAP 훅
- **SplitText** - 텍스트 애니메이션을 위한 GSAP 플러그인

### 개발 도구

- **PNPM** - 효율적인 패키지 매니저
- **ESLint** - 코드 품질 관리
- **Vitest** - 단위 테스트 프레임워크
- **Turbopack** - 빠른 개발 서버

### 기타 라이브러리

- **Swiper** - 터치 슬라이더 컴포넌트
- **React Markdown** - 마크다운 렌더링
- **Axios** - HTTP 클라이언트
- **tailwind-merge** - 동적 클래스 병합

## 📁 프로젝트 구조

```
apps/portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # 루트 레이아웃
│   │   ├── page.tsx            # 메인 페이지
│   │   ├── constant.ts         # 전역 상수
│   │   └── work/               # 프로젝트 페이지들
│   │       ├── page.tsx        # 프로젝트 목록
│   │       └── [slug]/         # 개별 프로젝트 상세
│   ├── components/
│   │   ├── layouts/            # 레이아웃 컴포넌트
│   │   │   ├── Navigation.tsx  # 네비게이션 바
│   │   │   └── AsideLink.tsx   # 사이드 링크
│   │   ├── main/               # 메인 페이지 컴포넌트
│   │   │   ├── Profile.tsx     # 프로필 섹션
│   │   │   ├── Stack.tsx       # 기술 스택 섹션
│   │   │   └── ContactMe.tsx   # 연락처 섹션
│   │   ├── ui/                 # 재사용 가능한 UI 컴포넌트
│   │   │   ├── button/         # 버튼 컴포넌트
│   │   │   ├── typography/     # 타이포그래피 컴포넌트
│   │   │   ├── card/           # 카드 컴포넌트
│   │   │   ├── chip/           # 칩 컴포넌트
│   │   │   └── anchor/         # 앵커 컴포넌트
│   │   └── work/               # 프로젝트 관련 컴포넌트
│   │       ├── WorkCardList.tsx
│   │       ├── WorkIntroduce.tsx
│   │       └── MarkdownRenderer/
│   └── hooks/                  # 커스텀 훅
│       └── useGsapSplit.ts     # GSAP 텍스트 애니메이션 훅
├── public/                     # 정적 자산
│   ├── portfolio/              # 프로젝트 이미지들
│   └── manifest.json           # PWA 매니페스트
├── tailwind.config.ts          # TailwindCSS 설정
├── next.config.ts              # Next.js 설정
└── package.json                # 의존성 관리
```

## 🎨 주요 페이지

### 메인 페이지 (`/`)

- 프로필 소개와 GSAP 애니메이션
- 기술 스택 시각화
- 연락처 정보

### 프로젝트 페이지 (`/work`)

- 프로젝트 카드 그리드 레이아웃
- 반응형 그리드 (모바일: 1열, 태블릿: 2열, 데스크톱: 3열)

### 프로젝트 상세 페이지 (`/work/[slug]`)

- 마크다운 기반 프로젝트 상세 정보
- 이미지 스와이퍼
- 기술 스택 태그

## 🚦 시작하기

### 필수 조건

- Node.js 18.0.0 이상
- PNPM 9.1.0 이상

### 설치 및 실행

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev

# 프로덕션 빌드
pnpm build

# 프로덕션 서버 실행
pnpm start

# 테스트 실행
pnpm test

# 린팅
pnpm lint
```

개발 서버는 [http://localhost:3000](http://localhost:3000)에서 실행됩니다.

## 📱 배포

이 프로젝트는 Vercel을 통해 배포되어 있습니다:

- **Production**: https://byeongchan.space/portfolio

### 배포 설정

- **Platform**: Vercel
- **Domain**: byeongchan.space/portfolio
- **Build Command**: `pnpm build`
- **Output Directory**: `.next`

## 🎯 성능 최적화

### 이미지 최적화

- Next.js Image 컴포넌트 사용
- WebP 포맷 지원
- 반응형 이미지 제공

### 코드 분할

- Next.js 자동 코드 분할
- 동적 임포트 활용

### SEO 최적화

- 메타데이터 최적화
- Open Graph 태그
- JSON-LD 구조화 데이터
- 사이트맵 자동 생성

## 🔧 개발 환경 설정

### 코드 품질

- ESLint 설정으로 코드 품질 관리
- TypeScript strict 모드 활성화
- Prettier를 통한 코드 포맷팅

## 📞 연락처

- **이메일**: mbc0481@naver.com
- **GitHub**: https://github.com/minbyeongchan
- **Instagram**: https://www.instagram.com/byongchan
- **LinkedIn**: https://www.linkedin.com/in/병찬-민-2b2414200

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 용도로 제작되었습니다.

---

**개발자**: 민병찬 (MinByeongChan)
