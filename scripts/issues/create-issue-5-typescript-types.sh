#!/bin/bash

# Issue #5: Improve TypeScript type definitions

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

echo "✅ Issue #5 created: Improve TypeScript type definitions"
