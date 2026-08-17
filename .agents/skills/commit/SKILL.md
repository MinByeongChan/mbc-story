---
name: commit
description: 현재 Git working tree의 변경사항을 분석하고 Conventional Commits 형식으로 안전하게 커밋한다. 사용자가 커밋 생성, 변경사항 커밋, 커밋 메시지 작성 후 커밋을 요청하거나 `$commit`을 호출할 때 사용한다. 메시지 제안만 요청한 경우에는 실제 커밋을 만들지 않는다.
---

# Commit

1. `git status --short`, `git diff`, `git diff --staged`로 tracked, staged, untracked 변경을 모두 확인한다.
2. 현재 branch 이름을 확인하고 변경 목적을 파악한다. 관련 없는 사용자 변경은 제외하고, 포함 범위가 불명확하면 커밋하지 않은 채 사용자에게 범위를 확인한다.
3. 필요한 검증을 실행한다. 실행하지 못한 검증이나 실패 항목은 숨기지 않는다.
4. 커밋 대상 파일만 명시적으로 stage한다. `git add .` 또는 `git add -A`로 무관한 변경을 한꺼번에 포함하지 않는다.
5. Conventional Commits 형식으로 한국어 메시지를 작성한다.
   - 형식: `<type>(<scope>): <요약>` 또는 `<type>: <요약>`
   - type은 `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore` 중 변경 목적에 맞게 고른다.
   - scope가 필요하면 feature 이름이나 현재 branch에서 의미 있는 부분을 사용한다. `feature`라는 고정 scope는 사용하지 않는다.
   - body에는 무엇을 왜 바꿨는지와 검증 결과를 간결한 개괄식으로 적는다.
6. 사용자가 실제 커밋을 요청했을 때만 `git commit`을 실행한다. Git hook 실패 시 우회하지 말고 원인을 보고한다.
7. 완료 후 commit hash와 제목, 포함한 파일, 검증 결과, 남은 미커밋 변경을 보고한다.
