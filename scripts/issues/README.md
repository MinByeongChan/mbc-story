# GitHub 이슈 생성 스크립트

Portfolio 개선을 위한 8개의 GitHub 이슈를 생성하는 스크립트들입니다.

## 📋 스크립트 목록

### 🚀 전체 이슈 생성

```bash
# 모든 이슈를 한 번에 생성
./scripts/issues/create-all-issues.sh
```

### 📝 개별 이슈 생성

#### 🚨 High Priority (우선순위: 높음)

```bash
# Issue #1: console.log 제거 및 코드 정리
./scripts/issues/create-issue-1-cleanup.sh

# Issue #2: 하드코딩된 프로젝트 데이터 분리
./scripts/issues/create-issue-2-hardcoded-data.sh

# Issue #3: GSAP 애니메이션 로직 중앙화
./scripts/issues/create-issue-3-gsap-animation.sh
```

#### 🟡 Medium Priority (우선순위: 중간)

```bash
# Issue #4: 일관된 스타일링 패턴 구축
./scripts/issues/create-issue-4-styling-patterns.sh

# Issue #5: TypeScript 타입 정의 개선
./scripts/issues/create-issue-5-typescript-types.sh

# Issue #6: 컴포넌트 책임 분리
./scripts/issues/create-issue-6-component-responsibilities.sh
```

#### 🟢 Low Priority (우선순위: 낮음)

```bash
# Issue #7: 성능 최적화
./scripts/issues/create-issue-7-performance.sh

# Issue #8: 에러 처리 및 로딩 상태
./scripts/issues/create-issue-8-error-handling.sh
```

## 🎯 이슈별 세부 내용

| #   | 제목                                  | 라벨                                       | 우선순위 |
| --- | ------------------------------------- | ------------------------------------------ | -------- |
| 1   | Remove console.log and cleanup code   | bug, cleanup, good first issue             | 🚨 높음  |
| 2   | Extract hardcoded project data        | refactor, data-management, maintainability | 🚨 높음  |
| 3   | Centralize GSAP animation logic       | refactor, animation, code-duplication      | 🚨 높음  |
| 4   | Establish consistent styling patterns | styling, architecture                      | 🟡 중간  |
| 5   | Improve TypeScript type definitions   | refactor, typescript                       | 🟡 중간  |
| 6   | Separate component responsibilities   | refactor, architecture                     | 🟡 중간  |
| 7   | Add performance optimizations         | performance, react                         | 🟢 낮음  |
| 8   | Add error handling and loading states | feature, ui                                | 🟢 낮음  |

## ⚡ 빠른 시작

### 1. 라벨 먼저 생성 (선택사항)

```bash
./scripts/create-github-labels.sh
```

### 2. 모든 이슈 생성

```bash
./scripts/issues/create-all-issues.sh
```

### 3. 특정 우선순위만 생성

```bash
# High Priority만 생성
./scripts/issues/create-issue-1-cleanup.sh
./scripts/issues/create-issue-2-hardcoded-data.sh
./scripts/issues/create-issue-3-gsap-animation.sh
```

## 📋 필수 조건

- GitHub CLI (`gh`) 설치
- GitHub 계정 로그인 (`gh auth login`)
- 저장소 접근 권한

## 💡 사용 팁

1. **우선순위별 작업**: High → Medium → Low 순서로 진행
2. **라벨 활용**: 생성된 라벨로 이슈 필터링 및 관리
3. **체크리스트**: 각 이슈의 Tasks를 체크하며 진행
4. **담당자**: 모든 이슈는 자동으로 본인에게 할당됩니다

## 🔧 커스터마이징

각 스크립트에서 다음 항목들을 수정할 수 있습니다:

- `--assignee`: 담당자 변경
- `--label`: 라벨 추가/제거
- `--milestone`: 마일스톤 지정
- `--body`: 이슈 내용 수정
