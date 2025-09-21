#!/bin/bash

# Issue #3: Centralize GSAP animation logic

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

echo "✅ Issue #3 created: Centralize GSAP animation logic"
