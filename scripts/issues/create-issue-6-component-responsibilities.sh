#!/bin/bash

# Issue #6: Separate component responsibilities

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

echo "✅ Issue #6 created: Separate component responsibilities"
