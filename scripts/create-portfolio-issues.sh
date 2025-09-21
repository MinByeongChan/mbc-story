#!/bin/bash

# Portfolio 개선 이슈 생성 스크립트
# 사용법: ./scripts/create-portfolio-issues.sh

echo "📝 Portfolio 개선 이슈들을 생성합니다..."

# GitHub CLI 및 로그인 확인
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI (gh)가 설치되어 있지 않습니다."
    exit 1
fi

if ! gh auth status &> /dev/null; then
    echo "❌ GitHub에 로그인되어 있지 않습니다."
    echo "로그인: gh auth login"
    exit 1
fi

echo "✅ GitHub CLI 준비 완료"

# High Priority Issues
echo "🚨 High Priority 이슈 생성 중..."

# Issue #1: Remove console.log
gh issue create \
  --title "[CLEANUP] Remove console.log and cleanup code" \
  --body "## 📋 Description
프로덕션 코드에서 디버깅용 console.log가 남아있어 제거가 필요합니다.

## 📁 Files to fix
- \`src/components/ui/card/WorkCard.tsx\` (line 30)

## ✅ Tasks
- [ ] console.log 제거
- [ ] 다른 파일들에서 추가 console.log 검색 및 제거
- [ ] ESLint 규칙에 no-console 추가

## 🎯 Acceptance Criteria
- [ ] 모든 console.log 제거 완료
- [ ] 빌드 시 console 관련 경고 없음" \
  --label "bug,cleanup,good first issue,priority: critical" \
  --assignee "@me"

# Issue #2: Extract hardcoded data
gh issue create \
  --title "[REFACTOR] Extract hardcoded project data" \
  --body "## 📋 Description
\`apps/portfolio/src/app/work/page.tsx\`에서 프로젝트 데이터가 하드코딩되어 있어 유지보수가 어려운 상태입니다. 데이터 레이어 분리가 필요합니다.

## ⚠️ Current Problem
\`\`\`typescript
// work/page.tsx에서 147줄의 하드코딩된 데이터
const list = [
  {
    imgSrc: \"/portfolio/work/abcAdmin/abc_admin_홈화면.png\",
    // ... 하드코딩된 데이터들
  }
];
\`\`\`

## 💡 Proposed Solution
\`\`\`typescript
// data/projects.ts 생성
export const projectsData = [
  // 프로젝트 데이터들
];

// types/project.ts 생성
export interface Project {
  id: string;
  title: string;
  // ... 기타 프로퍼티들
}
\`\`\`

## ✅ Tasks
- [ ] \`src/data/projects.ts\` 파일 생성
- [ ] \`src/types/project.ts\` 타입 정의 생성
- [ ] \`work/page.tsx\`에서 데이터 import로 변경
- [ ] 프로젝트 데이터 유효성 검증 로직 추가" \
  --label "refactor,data-management,maintainability,priority: high" \
  --assignee "@me"

# Issue #3: Centralize GSAP animation
gh issue create \
  --title "[REFACTOR] Centralize GSAP animation logic" \
  --body "## 📋 Description
GSAP 애니메이션 로직이 여러 컴포넌트에서 중복되고 있습니다. 공통 훅으로 중앙화가 필요합니다.

## 📁 Files with duplicated logic
- \`src/components/main/Profile.tsx\`
- \`src/components/main/Stack.tsx\`
- \`src/components/main/ContactMe.tsx\`

## 💡 Proposed Solution
\`\`\`typescript
// hooks/useScrollAnimation.ts 생성
export const useScrollAnimation = (selector: string, options?: AnimationOptions) => {
  // 공통 스크롤 애니메이션 로직
};

// hooks/useTextAnimation.ts 생성  
export const useTextAnimation = (selector: string) => {
  // 텍스트 애니메이션 로직
};
\`\`\`

## ✅ Tasks
- [ ] \`useScrollAnimation\` 훅 생성
- [ ] \`useTextAnimation\` 훅 생성
- [ ] 기존 컴포넌트들에서 공통 훅 사용으로 변경
- [ ] 중복 코드 제거" \
  --label "refactor,animation,code-duplication,tech: gsap,priority: high" \
  --assignee "@me"

echo "🟡 Medium Priority 이슈 생성 중..."

# Issue #4: Consistent styling patterns
gh issue create \
  --title "[IMPROVEMENT] Establish consistent styling patterns" \
  --body "## 📋 Description
반응형 스타일링 패턴이 일관성 없이 작성되어 있어 디자인 시스템 구축이 필요합니다.

## ⚠️ Current Problem
\`\`\`typescript
className={twMerge(\"text-md p-6\", \"lg:p-18 sm:text-md\", \"sm:p-12 sm:text-md\")}
\`\`\`

## 💡 Proposed Solution
\`\`\`typescript
// styles/variants.ts
export const buttonVariants = {
  primary: \"bg-primary text-white\",
  secondary: \"bg-secondary text-black\",
};

export const spacingVariants = {
  section: \"my-50\",
  container: \"mx-0 sm:mx-16 md:mx-16 lg:mx-32\",
};
\`\`\`

## ✅ Tasks
- [ ] \`src/styles/variants.ts\` 생성
- [ ] 공통 스타일 패턴 정의
- [ ] 컴포넌트들에서 일관된 패턴 적용
- [ ] Tailwind 설정 최적화" \
  --label "styling,architecture,tech: tailwindcss,priority: medium" \
  --assignee "@me"

# Issue #5: Improve TypeScript types
gh issue create \
  --title "[REFACTOR] Improve TypeScript type definitions" \
  --body "## 📋 Description
일부 컴포넌트의 타입 정의가 너무 광범위하거나 부정확합니다.

## ⚠️ Current Problem
\`\`\`typescript
// Typography.tsx - 너무 광범위한 타입
export type TypographyProps = React.HTMLAttributes<
  HTMLSpanElement | HTMLParagraphElement | HTMLHeadingElement
>;
\`\`\`

## 💡 Proposed Solution
\`\`\`typescript
// types/ui.ts
export interface TypographyProps {
  variant?: 'h1' | 'h2' | 'body' | 'caption';
  color?: 'primary' | 'secondary' | 'accent';
  children: React.ReactNode;
  className?: string;
}
\`\`\`

## ✅ Tasks
- [ ] \`src/types/ui.ts\` 생성
- [ ] Typography 컴포넌트 타입 개선
- [ ] 기타 UI 컴포넌트 타입 정의 개선
- [ ] Props 유효성 검증 추가" \
  --label "refactor,tech: typescript,area: ui,priority: medium" \
  --assignee "@me"

# Issue #6: Component responsibilities
gh issue create \
  --title "[REFACTOR] Separate component responsibilities" \
  --body "## 📋 Description
일부 컴포넌트가 단일 책임 원칙을 위배하고 있습니다. 특히 \`StressButton\`이 복잡한 애니메이션 로직까지 담당하고 있습니다.

## ⚠️ Current Problem
\`\`\`typescript
// StressButton.tsx - 버튼 컴포넌트가 복잡한 애니메이션 로직까지 담당 (98줄)
\`\`\`

## 💡 Proposed Solution
\`\`\`typescript
// components/ui/button/Button.tsx - 기본 버튼
// components/ui/button/AnimatedButton.tsx - 애니메이션 버튼
// hooks/useButtonAnimation.ts - 버튼 애니메이션 로직
\`\`\`

## ✅ Tasks
- [ ] 기본 Button 컴포넌트 분리
- [ ] AnimatedButton 컴포넌트 생성
- [ ] \`useButtonAnimation\` 훅 생성
- [ ] StressButton 리팩토링" \
  --label "refactor,architecture,area: components,priority: medium" \
  --assignee "@me"

echo "🟢 Low Priority 이슈 생성 중..."

# Issue #7: Performance optimizations
gh issue create \
  --title "[PERFORMANCE] Add performance optimizations" \
  --body "## 📋 Description
성능 최적화를 위한 메모이제이션 및 동적 임포트 적용이 필요합니다.

## 💡 Proposed Improvements
\`\`\`typescript
// 동적 임포트 활용
const LazyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Skeleton />,
});

// 메모이제이션 적용
export const WorkCard = memo(({ ... }: WorkCardProps) => {
  // ...
});
\`\`\`

## ✅ Tasks
- [ ] 무거운 컴포넌트들 동적 임포트 적용
- [ ] React.memo 적용이 필요한 컴포넌트 식별
- [ ] useMemo, useCallback 최적화
- [ ] 번들 크기 분석 및 최적화" \
  --label "performance,tech: react,priority: low" \
  --assignee "@me"

# Issue #8: Error handling
gh issue create \
  --title "[FEATURE] Add error handling and loading states" \
  --body "## 📋 Description
에러 처리 및 로딩 상태 관리를 위한 공통 컴포넌트가 필요합니다.

## 💡 Proposed Components
\`\`\`typescript
// components/ui/ErrorBoundary.tsx
// components/ui/LoadingSpinner.tsx  
// hooks/useAsyncState.ts
\`\`\`

## ✅ Tasks
- [ ] ErrorBoundary 컴포넌트 생성
- [ ] LoadingSpinner 컴포넌트 생성
- [ ] useAsyncState 훅 생성
- [ ] 이미지 로딩 실패 처리 개선" \
  --label "feature,area: ui,priority: low" \
  --assignee "@me"

echo ""
echo "🎉 모든 Portfolio 개선 이슈가 성공적으로 생성되었습니다!"
echo ""
echo "📊 생성된 이슈 요약:"
echo "  🚨 High Priority: 3개"
echo "  🟡 Medium Priority: 3개"  
echo "  🟢 Low Priority: 2개"
echo ""
echo "총 8개의 이슈가 생성되었습니다! 📝"
echo ""
echo "💡 다음 단계:"
echo "  1. GitHub에서 이슈들을 확인하세요"
echo "  2. 우선순위에 따라 작업을 시작하세요"
echo "  3. 각 이슈의 체크리스트를 완료해가세요"
