#!/bin/bash

# Issue #2: Extract hardcoded project data

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

echo "✅ Issue #2 created: Extract hardcoded project data"
