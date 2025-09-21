#!/bin/bash

# Issue #8: Add error handling and loading states

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

echo "✅ Issue #8 created: Add error handling and loading states"
