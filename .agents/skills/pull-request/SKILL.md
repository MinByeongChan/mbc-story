---
name: pull-request
description: 현재 branch의 전체 변경을 검토하고 저장소 template에 맞는 한국어 GitHub Pull Request를 작성하거나 생성한다. 사용자가 PR 제목·본문 작성, PR 초안, PR 생성, `$pull-request`를 요청할 때 사용한다. 제목·본문 초안만 요청한 경우에는 push나 PR 생성을 하지 않는다.
---

# Pull Request

1. `gh auth status`로 인증 상태를 확인한다. 인증되지 않았다면 사용자에게 `gh auth login`을 요청하고 중단한다.
2. `git status`, `git diff`, `git diff --staged`, `git log`, `git diff <base>...HEAD`로 working tree와 branch 전체 변경을 확인한다.
3. 사용자가 지정하지 않으면 base branch를 `main`으로 사용한다. remote의 base를 조회할 수 있으면 최신 비교 기준을 확보한다.
4. 작업 범위와 무관한 미커밋 변경은 PR이나 커밋에 포함하지 않는다. PR 생성에 필요한 커밋은 사용자가 커밋까지 명시적으로 요청한 경우에만 만든다.
5. 변경에 맞는 검증을 실행하고 실제 결과만 기록한다. UI 변경이면 가능한 screenshot 또는 demo를 준비하고, 준비하지 못하면 그 사실을 명시한다.
6. PR 제목은 Conventional Commits 형식으로 한 줄에 핵심 변경을 드러내도록 한국어로 작성한다.
7. `.github/pull_request_template.md`가 있으면 해당 section 순서와 checklist를 그대로 사용한다. 전체 branch 변경을 한 번에 요약하고 다음 내용을 채운다.
   - 변경 유형: 해당 항목만 check
   - 관련 이슈: `Closes #<번호>` 또는 Jira key, 없으면 `없음`
   - 변경 사항: 주요 동작, API, migration, 파일
   - 테스트: 실행한 명령과 결과, skip 사유
   - checklist: 실제 확인한 항목만 check
8. PR을 실제 생성하라는 요청이면 현재 branch가 remote에 없거나 최신이 아닐 때 `git push -u origin HEAD`를 실행한 뒤 `gh pr create`를 사용한다.
9. 사용자가 지정하지 않으면 assignee를 `minbyeongchan`으로 설정한다. 변경 내용과 일치하는 기존 label을 조회해 1~3개를 선택한다.
10. 완료 후 PR URL, base/head branch, 포함된 commit hash, 검증 결과, 남은 미커밋 변경을 보고한다.
