#!/bin/bash

# Issue #7: Add performance optimizations

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

echo "✅ Issue #7 created: Add performance optimizations"
