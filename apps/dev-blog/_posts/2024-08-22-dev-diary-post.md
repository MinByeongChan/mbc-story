---
title: "[개발일지] 2024-08-22(목)"
description: ""
date: "2024-08-22"
modified_date: "2024-08-22"
tags: [개발일지]
---

google token을 갱신하는 로직을 개발했다. google api 에서는 token 유효시간 1시간만을 제공하기 때문에 refresh를 하기 위해서는 FE에서 직접 로직을 제어할 필요가 있었다.

요청사항은 google api에서 post를 할때 401에러로 token 유효성을 판단하지 말고 이전에 판단하길 원했다. 따라서 화면에서 interval을 준다음 interval 안에서 토큰 유효성을 현재시간과 계속 비교하여 로직을 처리하도록 했다. setInterval과 setTimeout 둘 줄 어느것을 사용해야할까 고민하다 setTimeout이 메모리 누수 측면에서 더 안정성이 있다는 글을봤다. setTimeout은 n초뒤에 실행하고 바로 종료되기 때문에 문제될게 없다. 하지만, setTimeout은 재귀함수로 setTimeout 내부에서 callback함수를 요청해야하므로 로직이 좀 복잡했다.

결국 A조건이 true일때, 토큰을 재발급하도록 하고, 아닌경우 loop를 돌게 설계하였다.

추가로, 물류 창고이동 메뉴의 화면이 변경되어 변경사항을 반영했다. snb에서 기존 calc로 되어있었다. 이것을 flex 또는 grid 템플릿으로 변경하려고 시도했지만, 최상위 로직에서 calc 속성으로 높이를 지정할 경우 적용시킬수 없다는 팀사람의견이 있었다. 이 부분은 한번 다시 찾아봐야될 것 같다. 오늘은 여기까지...
