#!/bin/bash

# Issue #4: Establish consistent styling patterns

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

echo "✅ Issue #4 created: Establish consistent styling patterns"
