#!/bin/bash

# GitHub 라벨 생성 스크립트
# 사용법: ./scripts/create-github-labels.sh
# 필수: GitHub CLI (gh) 설치 및 로그인 필요

echo "🏷️  GitHub 라벨 생성을 시작합니다..."

# 현재 디렉토리가 git 저장소인지 확인
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ 에러: 현재 디렉토리가 Git 저장소가 아닙니다."
    exit 1
fi

# GitHub CLI 설치 확인
if ! command -v gh &> /dev/null; then
    echo "❌ 에러: GitHub CLI (gh)가 설치되어 있지 않습니다."
    echo "설치 방법: https://cli.github.com/"
    exit 1
fi

# GitHub 로그인 확인
if ! gh auth status &> /dev/null; then
    echo "❌ 에러: GitHub에 로그인되어 있지 않습니다."
    echo "로그인: gh auth login"
    exit 1
fi

echo "✅ GitHub CLI 준비 완료"

# 🏷️ 이슈 타입 (Type) 라벨
echo "📋 이슈 타입 라벨 생성 중..."
gh label create "bug" --color "d73a49" --description "🐛 버그 수정" --force
gh label create "feature" --color "a2eeef" --description "✨ 새로운 기능" --force
gh label create "refactor" --color "0075ca" --description "🔧 코드 리팩토링" --force
gh label create "documentation" --color "0052cc" --description "📝 문서 관련" --force
gh label create "cleanup" --color "f9d0c4" --description "🧹 코드 정리/청소" --force
gh label create "performance" --color "fbca04" --description "⚡ 성능 개선" --force
gh label create "styling" --color "e99695" --description "🎨 스타일링 관련" --force
gh label create "security" --color "b60205" --description "🔒 보안 이슈" --force

# 🎯 우선순위 (Priority) 라벨
echo "🎯 우선순위 라벨 생성 중..."
gh label create "priority: critical" --color "b60205" --description "🚨 즉시 수정 필요" --force
gh label create "priority: high" --color "d73a49" --description "🔴 높은 우선순위" --force
gh label create "priority: medium" --color "fbca04" --description "🟡 중간 우선순위" --force
gh label create "priority: low" --color "0e8a16" --description "🟢 낮은 우선순위" --force

# 📊 난이도 (Difficulty) 라벨
echo "📊 난이도 라벨 생성 중..."
gh label create "good first issue" --color "7057ff" --description "🟢 초보자 친화적" --force
gh label create "easy" --color "c2e0c6" --description "🟡 쉬움" --force
gh label create "medium" --color "fef2c0" --description "🟠 보통" --force
gh label create "hard" --color "f9d0c4" --description "🔴 어려움" --force

# 🏗️ 컴포넌트/영역 (Area) 라벨
echo "🏗️ 영역별 라벨 생성 중..."
gh label create "area: components" --color "0052cc" --description "🎯 컴포넌트 관련" --force
gh label create "area: ui" --color "5319e7" --description "🎨 UI 관련" --force
gh label create "area: layout" --color "1d76db" --description "📱 레이아웃 관련" --force
gh label create "area: animation" --color "f9d0c4" --description "🎭 애니메이션 관련" --force
gh label create "area: data" --color "0e8a16" --description "📊 데이터 관련" --force
gh label create "area: config" --color "6f42c1" --description "⚙️ 설정 관련" --force
gh label create "area: build" --color "d4c5f9" --description "🔧 빌드/배포 관련" --force

# 🔄 상태 (Status) 라벨
echo "🔄 상태 라벨 생성 중..."
gh label create "status: investigating" --color "fbca04" --description "🔍 조사 중" --force
gh label create "status: in progress" --color "0075ca" --description "🚧 진행 중" --force
gh label create "status: ready" --color "0e8a16" --description "✅ 작업 준비 완료" --force
gh label create "status: deployed" --color "28a745" --description "🚀 배포 완료" --force
gh label create "status: wontfix" --color "ffffff" --description "❌ 수정하지 않음" --force
gh label create "status: duplicate" --color "cfd3d7" --description "🔄 중복 이슈" --force

# 📚 기술 스택 (Tech) 라벨
echo "📚 기술 스택 라벨 생성 중..."
gh label create "tech: react" --color "61dafb" --description "⚛️ React 관련" --force
gh label create "tech: typescript" --color "3178c6" --description "🔷 TypeScript 관련" --force
gh label create "tech: tailwindcss" --color "38b2ac" --description "🎨 TailwindCSS 관련" --force
gh label create "tech: gsap" --color "88ce02" --description "🎬 GSAP 애니메이션" --force
gh label create "tech: nextjs" --color "000000" --description "📱 Next.js 관련" --force
gh label create "tech: testing" --color "fef2c0" --description "🧪 테스트 관련" --force

# 💡 개선 유형 (Improvement) 라벨
echo "💡 개선 유형 라벨 생성 중..."
gh label create "code-duplication" --color "d73a49" --description "🔄 코드 중복 제거" --force
gh label create "data-management" --color "0075ca" --description "📊 데이터 관리 개선" --force
gh label create "architecture" --color "0052cc" --description "🏗️ 아키텍처 개선" --force
gh label create "accessibility" --color "7057ff" --description "♿ 접근성 개선" --force
gh label create "responsive" --color "1d76db" --description "📱 반응형 개선" --force
gh label create "maintainability" --color "0e8a16" --description "🎯 유지보수성 개선" --force

# 🎯 특별 라벨 (Special) 라벨
echo "🎯 특별 라벨 생성 중..."
gh label create "help wanted" --color "008672" --description "📚 도움 요청" --force
gh label create "question" --color "d876e3" --description "❓ 질문" --force
gh label create "discussion" --color "c5def5" --description "💬 토론 필요" --force
gh label create "breaking change" --color "b60205" --description "🔥 호환성 깨지는 변경" --force

echo ""
echo "🎉 모든 GitHub 라벨이 성공적으로 생성되었습니다!"
echo ""
echo "📋 생성된 라벨 카테고리:"
echo "  - 이슈 타입 (8개)"
echo "  - 우선순위 (4개)"
echo "  - 난이도 (4개)"
echo "  - 영역별 (7개)"
echo "  - 상태 (6개)"
echo "  - 기술 스택 (6개)"
echo "  - 개선 유형 (6개)"
echo "  - 특별 라벨 (4개)"
echo ""
echo "총 45개의 라벨이 생성되었습니다! 🏷️"
echo ""
echo "💡 사용법:"
echo "  - GitHub 이슈 생성 시 적절한 라벨을 선택하세요"
echo "  - 라벨은 조합해서 사용할 수 있습니다 (예: bug + priority: high + area: components)"
echo "  - 라벨 수정이 필요하면 GitHub 웹에서 Settings > Labels에서 편집하세요"
