#!/bin/bash

# 모든 Portfolio 개선 이슈를 한 번에 생성하는 스크립트

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
echo ""

# 스크립트 디렉토리 확인
SCRIPT_DIR="$(dirname "$0")"

echo "🚨 High Priority 이슈 생성 중..."
$SCRIPT_DIR/create-issue-1-cleanup.sh
$SCRIPT_DIR/create-issue-2-hardcoded-data.sh
$SCRIPT_DIR/create-issue-3-gsap-animation.sh

echo ""
echo "🟡 Medium Priority 이슈 생성 중..."
$SCRIPT_DIR/create-issue-4-styling-patterns.sh
$SCRIPT_DIR/create-issue-5-typescript-types.sh
$SCRIPT_DIR/create-issue-6-component-responsibilities.sh

echo ""
echo "🟢 Low Priority 이슈 생성 중..."
$SCRIPT_DIR/create-issue-7-performance.sh
$SCRIPT_DIR/create-issue-8-error-handling.sh

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
