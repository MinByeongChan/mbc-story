import React from 'react';
import styled from '@emotion/styled';
import { ObserveText } from '@/components/ui';
import { fontWeight } from '@/utils/StyleTheme';
import TextDefault from '@/components/ui/TextDefault';

const ProjTop = styled.div`
  margin-top: 50px;
`;
const OrderedListItems = styled.ol`
  list-style: decimal;
`;
const ListItem = styled.li`
  align-items: start;
`;
const ListItems = styled.ul`
  list-style: inherit;
  margin-left: 24px;
`;
const HoverLink = styled.a`
  transition: 0.1s linear;
  &:hover {
    box-shadow: 0px 1px 0px;
  }
`;

export const AboutProject = () => (
  <>
    <ProjTop>
      <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
        2024.04 – 현재
      </ObserveText>
    </ProjTop>
    <ObserveText size="xg" weight={fontWeight.bold} lineHeight="xg">
      미국 신사업 어드민, 코웨이
    </ObserveText>
    <ListItems>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          코웨이 미국 신사업을 위한 내부 어드민 서비스, FE 개발
        </ObserveText>
      </ListItem>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          주문 대시보드, 작업 리스트, 지점장 배정판, 고객용 배정판, 창고이동 화면, 출고, 회계,
          시스템 등 미국 작업자들이 사용할 어드민 메뉴 개발.
        </ObserveText>
      </ListItem>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          react-hook-form에서 제공하는 controller, form 두 기능을 모두 제공하는 템플릿 구조 설계 및
          개발. 템플릿을 활용하여 각 필드에 대한 form을 전송하도록 함.
        </ObserveText>
      </ListItem>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          기획, BE, FE 3팀과 협의하여 BE API 구조, 호출 순서, 페이지 렌더링 이슈 최적화. FE팀 내에서
          팀원들과 협의하에 공통으로 처리할 수 있는 부분을 추출하여 SRP원칙을 준수할 수 있도록 함.
        </ObserveText>
      </ListItem>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          프로젝트 코드의 유지보수성을 높이기 위해 코드 컨벤션을 주도적으로 제안하여 맞추고, 각
          메뉴별로 코드의 일관성을 맞도록 함.
        </ObserveText>
      </ListItem>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          github 자동화 작업 진행. 깃헙 코드 오너 추가 및 허스키 스크립트 추가. github action을
          사용하여 push 전 오류있는 코드를 올라가지 않도록 함.
        </ObserveText>
      </ListItem>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          sentry를 활용하여 stg에서 잡히는 에러를 트래킹 함. 타입에러 또는 비정상적인 api호출에 대한
          검출 한 이후 jira를 통해 이슈를 팀내 공론화 시키고 주도적으로 에러 수정.
        </ObserveText>
      </ListItem>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          유틸함수 관련하여 테스트코드를 작성하여 유틸함수개발 완성도를 높이려고 시도함. 테스트 코드
          spec과 dummy데이터를 다양하게 만들어 여러 방면으로 테스트를 진행할 수 있도록 함. dev, stg
          환경에서 에러 발생시, 테스트코드를 수정하여 에러가 재발하지 않도록 함.
        </ObserveText>
      </ListItem>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          React, Typescript, TanStack Query, Recoil, Mui, Styled-Component, Sentry, vite, AWS EC2
          사용
        </ObserveText>
      </ListItem>
    </ListItems>
    <div>
      <ObserveText size="sm" weight={fontWeight.bold} lineHeight="md" color="lightBlue">
        <HoverLink href="https://abc.coway.blue/">ABC 어드민 사이트</HoverLink>
      </ObserveText>
    </div>

    <ProjTop>
      <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
        2022.04 – 2023.11
      </ObserveText>
    </ProjTop>
    <ObserveText size="xg" weight={fontWeight.bold} lineHeight="xg">
      코디매칭 서비스, 코웨이
    </ObserveText>
    <ListItems>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          기존 오프라인 방식에서 웹페이지를 제공하여 고객에게 보다 쉬운 렌탈방식을 제공. FE 개발
        </ObserveText>
      </ListItem>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          기존 Vue.js 로직을 React 환경으로 마이그레이션, 중복되는 화면 및 기능을 최소화하여
          성공적으로 마이그레이션 수행.
        </ObserveText>
      </ListItem>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          데이터독 RUM 연동과 cypress를 E2E 테스트코드를 작성하여 운영배포 시, 이슈발생률을 최대한
          낮추어 배포시킬 수 있도록 함.
        </ObserveText>
      </ListItem>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          기존 매칭 카운팅을 FE에서 setTimeout으로만 제어했던 방식을 BE와 협업하여 개선하고 매칭
          안정성을 향상 시킴. setTimeout의 카운트로 제어하는 것이 아닌 더 빠른주기로 현재 시간을
          불러와 카운트하는 방식으로 변경. BE에서는 유효한 카운트를 제공하는 방식으로 매칭하는
          방식으로 변경하여 매칭 안정성을 높임.
        </ObserveText>
      </ListItem>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          GA360을 이용하여 마케팅에 유용한 정보(제품 정보, 매칭 시도 횟수, 매칭 성공페이지 진입률
          등)를 제공하도록 적용.
        </ObserveText>
      </ListItem>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          CI/CD를 적용하여 쉽고 안전한 배포 방식 적용 (수동배포 스크립트 개발). github publishing 을
          이용하여 배포노트 기록 및 버전관리되도록 설계.
        </ObserveText>
      </ListItem>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          React.js, Typescript, TanStack Query, jotai, vite, AWS (S3, CloudFront) 사용
        </ObserveText>
      </ListItem>
    </ListItems>

    <TextDefault size="md" weight={fontWeight.bold} lineHeight="md">
      Situation
    </TextDefault>
    <div style={{ width: '100%', height: '1px', backgroundColor: 'black' }}></div>
    <OrderedListItems>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          기존 레거시 버전이었던 Vue 버전을 React 버전으로 마이그레이션 하던 도중, 무분별하고
          불필요하게 중복되는 컴포넌트 및 비즈니스 로직 발견
        </ObserveText>
      </ListItem>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          코디 매칭 상태 체크를 FE에서 REST API를 사용하여 Browser에서 매 초 마다 확인하고 있었음.
        </ObserveText>
      </ListItem>
    </OrderedListItems>

    <TextDefault size="md" weight={fontWeight.bold} lineHeight="md">
      Task
    </TextDefault>
    <div style={{ width: '100%', height: '1px', backgroundColor: 'black' }}></div>
    <OrderedListItems>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          무분별하게 중복되는 코드를 사용하는것은 컴포넌트 개발론과 정반대로 이어지는 개발법이라고
          판단하여 중복되는 컴포넌트 공통화 및 비즈니스로직을 공통화시키는 작업이 필요하다고 판단.
        </ObserveText>
      </ListItem>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          자바스크립트에서의 setTimeout으로 제어하기에는 부정확하다고 판단. 또한 단순 매 초 마다
          단순 매칭 확인 로직을 넣어도 되는지 BE와 같이 협업 제안.
        </ObserveText>
      </ListItem>
    </OrderedListItems>

    <TextDefault size="md" weight={fontWeight.bold} lineHeight="md">
      Action
    </TextDefault>
    <div style={{ width: '100%', height: '1px', backgroundColor: 'black' }}></div>
    <OrderedListItems>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          공통 컴포넌트 로직을 구성하고, 비즈니스 로직은 팀 내 공통된 처리 방안이 없었기 때문에,
          훅으로 전환하여 처리. 커스텀 훅으로 전환 시, useMemo 또는 useCallback을 사용하여 시간
          복잡도를 줄이려고 시도.
        </ObserveText>
      </ListItem>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          setTimeout을 매초 가 아닌, 브라우저 현재 시간을 기준으로 비교하여 현재시간을 파악하는
          방식으로 변경. 또한, 매칭을 매 초 확인하는 것이 아닌, BE에서 임의의 값으로 내려주는
          카운트로 수정. 매칭 확인 시간을 BE에서 제어하도록 정책 변경.
        </ObserveText>
      </ListItem>
    </OrderedListItems>

    <TextDefault size="md" weight={fontWeight.bold} lineHeight="md">
      Result
    </TextDefault>
    <div style={{ width: '100%', height: '1px', backgroundColor: 'black' }}></div>
    <OrderedListItems>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          프로젝트 내 중복되는 코드양을 상당수준으로 줄일 수 있었음. 템플릿 및 레이아웃과 같은
          공통된 데이터 컴포넌트를 생성함으로써 코드 재사용률이 높아졌고, React.memo, 컴포넌트
          내부에서 useMemo, useCallback을 처리하여 중복되는 로직일 경우 리렌더링되는 이슈를
          최소화함.
        </ObserveText>
      </ListItem>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          브라우저 탭 전환 및 포커싱을 잃을 경우 브라우저 현재시간을 계속 불러오게 하여 이전보다
          정확한 시간으로 매칭을 판단하도록 함. 매칭 시간을 BE에서 전담하는 정책으로 변경하므로 매칭
          탈취율이 높아질 경우, BE에서 DB 업데이트 만으로 매칭 시간을 제어할 수 있도록 함. 비정기
          배포하는 경우를 줄어들게 함.
        </ObserveText>
      </ListItem>
    </OrderedListItems>

    <div>
      <ObserveText size="sm" weight={fontWeight.bold} lineHeight="md" color="lightBlue">
        <HoverLink href="https://matching.coway.com/">매칭서비스 링크</HoverLink>
      </ObserveText>
    </div>

    <ProjTop>
      <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
        2023.05 – 2024.04
      </ObserveText>
    </ProjTop>
    <ObserveText size="xg" weight={fontWeight.bold} lineHeight="xg">
      통합회원, 코웨이
    </ObserveText>
    <ListItems>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          코웨이 구서비스 및 신규 서비스 회원을 통합하기 위한 서비스. 각 서비스에 통합회원 공통
          회원가입, 계정찾기, 마이페이지 화면 제공 및 회원 마이그레이션 기능 개발. FE 개발
        </ObserveText>
      </ListItem>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          각 회원서비스에 제공되는 마이페이지, 로그인, 계정 찾기, 회원가입 페이지 개발.
        </ObserveText>
      </ListItem>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          유닛테스트부터 통합테스트까지 개발팀 내부에서 진행하여 버그를 최소한으로 줄임.
        </ObserveText>
      </ListItem>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          웹접근성 WCAG 2.1을 준수하여 부분적으로 적용하고, 다양한 사용자에게 접근하기 용이하도록
          화면 구성
        </ObserveText>
      </ListItem>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          QA에서 발견된 이슈들을 스크립트로 구성하여 테스트 및 오류가 재발하지않도록 함. 매 배포마다
          테스트코드를 같이 수정하여 현행을 유지하고자함.
        </ObserveText>
      </ListItem>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          Vue 3, Typescript, Pinia, vite, SCSS, AWS(S3, CloudFront), Jest, Storybook, Cypress 사용
        </ObserveText>
      </ListItem>
    </ListItems>

    <TextDefault size="md" weight={fontWeight.bold} lineHeight="md">
      Situation
    </TextDefault>
    <div style={{ width: '100%', height: '1px', backgroundColor: 'black' }}></div>
    <OrderedListItems>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          Vue2에서 Vue3 업데이트 하는 과정에서 이전에 잡히지 않던 이슈들이 QA에서 잡히는 이슈 발생.
        </ObserveText>
      </ListItem>
    </OrderedListItems>

    <TextDefault size="md" weight={fontWeight.bold} lineHeight="md">
      Task
    </TextDefault>
    <div style={{ width: '100%', height: '1px', backgroundColor: 'black' }}></div>
    <OrderedListItems>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          해당 이슈들에 대해 재발하지 않도록 테스트 코드를 작성하는것이 좋다고 판단. 이전에 레거시로
          남아있던 e2e 테스트 코드를 활성화.
        </ObserveText>
      </ListItem>
    </OrderedListItems>

    <TextDefault size="md" weight={fontWeight.bold} lineHeight="md">
      Action
    </TextDefault>
    <div style={{ width: '100%', height: '1px', backgroundColor: 'black' }}></div>
    <OrderedListItems>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          유틸함수에 대해서 유닛테스트를 진행하였고, QA에서 발생하는 로그인 이슈, api 관련 이슈들은
          cypress interceptor 기능으로 처리, store가 필요한 부분은 cypress에서 세팅하여 실제
          브라우저 상황이랑 동일하게 만들어 테스트를 진행.
        </ObserveText>
      </ListItem>
    </OrderedListItems>

    <TextDefault size="md" weight={fontWeight.bold} lineHeight="md">
      Result
    </TextDefault>
    <div style={{ width: '100%', height: '1px', backgroundColor: 'black' }}></div>
    <OrderedListItems>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          결과적으로 Vue3 코드 리팩터링으로 인한 이슈들은 해결되었고, 발생했던 이슈들에 대해서
          테스크 코드에 케이스별로 갖고 있게됨. 이러한 코드 히스토리를 이용하여 이후 발생하는
          QA이슈들에 대해 이전 버전과 비교하여 보다 확실하게 처리할 수 있었음.
        </ObserveText>
      </ListItem>
    </OrderedListItems>

    <div>
      <ObserveText size="sm" weight={fontWeight.bold} lineHeight="md" color="lightBlue">
        <HoverLink href="https://coway.com">코웨이몰 사이트</HoverLink>
      </ObserveText>
    </div>

    <ProjTop>
      <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
        2021.11 – 2022.02
      </ObserveText>
    </ProjTop>
    <ObserveText size="xg" weight={fontWeight.bold} lineHeight="xg">
      통합회원 어드민, 코웨이
    </ObserveText>
    <ListItems>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          코웨이 통합회원의 회원 조회, 통계성 데이터 제공, 이용약관 관리 등 관리자에게 관련 정보들을
          제어 및 조회할 수 있도록 제공되는 어드민 사이트. FE 개발
        </ObserveText>
      </ListItem>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          팀 내 라이브러리 사용 접합성을 확인하기 위해 RTK, redux 최초로 도입 및 팀내 이슈 공유.
          modal provider 초기 구조 개발.
        </ObserveText>
      </ListItem>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          어드민 회원별 권한을 제어하여 각각 다른 메뉴를 접근할 수 있도록 제어하는 로직 개발.
        </ObserveText>
      </ListItem>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          Editor를 커스터마이징 하여 통합회원에서 사용될 스타일을 에디터에 그대로 반영함. 사용자가
          이용하기에 친숙한 UI를 사용할 수 있도록 함.
        </ObserveText>
      </ListItem>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          React, Typescript, Redux(RTK / redux-thunk), vite, AWS (S3, CloudFront) 사용
        </ObserveText>
      </ListItem>
    </ListItems>

    <ProjTop>
      <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
        2020.04 – 2021.09
      </ObserveText>
    </ProjTop>
    <ObserveText size="xg" weight={fontWeight.bold} lineHeight="xg">
      KSTA, KSNET
    </ObserveText>
    <ListItems>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          KSNET VAN/PG 가맹점에 대한 매출정보확인 앱 리뉴얼 및 서비스 유지보수
        </ObserveText>
      </ListItem>
      <ListItem>
        <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
          JavaScript, HTML5, CSS, jQuery 사용
        </ObserveText>
      </ListItem>
    </ListItems>
  </>
);
