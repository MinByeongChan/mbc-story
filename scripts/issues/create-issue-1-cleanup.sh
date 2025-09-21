#!/bin/bash

# Issue #1: Remove console.log and cleanup code

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

echo "✅ Issue #1 created: Remove console.log and cleanup code"
