import React from 'react';
import styled from '@emotion/styled';
import { fontWeight } from '@/utils/StyleTheme';
import { ObserveText } from '@/components/ui';

const SkillItem = styled.li`
  display: flex;
  align-items: start;
  margin-top: 10px;
  @media screen and (min-width: 0px) and (max-width: 480px) {
    flex-direction: column;
  }
`;
const SubItems = styled.ul`
  padding-left: 10px;
`;

const SubItemGridWrapper = styled.div({
  display: 'grid',
  gridTemplateColumns: 'minmax(50px, 100px) auto',
  gap: '16px',
});
const ContentItemLeft = styled.div`
  min-width: 150px;
`;

const SkillDetailItems = styled.ul({
  listStyle: 'inherit',
  margin: '16px',
});

export const AboutSkill = () => (
  <div>
    <ul>
      <SkillItem>
        <ContentItemLeft>
          <ObserveText size="lg" weight={fontWeight.normal} color="orange" lineHeight="md">
            프론트엔드
          </ObserveText>
        </ContentItemLeft>
        <SubItems>
          <SubItemGridWrapper>
            <div>
              <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
                언어
              </ObserveText>
            </div>
            <div>
              <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
                JavaScript(ES6+) / Typescript / HTML5 / CSS / SCSS
              </ObserveText>
            </div>
            <div>
              <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
                퍼블리싱
              </ObserveText>
            </div>
            <div>
              <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
                HTML5 / CSS / SCSS / emotion / styled-component
              </ObserveText>
            </div>
            <div>
              <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
                개발환경
              </ObserveText>
            </div>
            <div>
              <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
                React18 / jotai / Recoil / TanStack Query / Redux(RTK) / Redux-Thunk / Vue3 / pinia
              </ObserveText>
            </div>
            <div>
              <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
                Bundler
              </ObserveText>
            </div>
            <div>
              <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
                Webpack / vite
              </ObserveText>
            </div>
            <div>
              <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
                Package
              </ObserveText>
            </div>
            <div>
              <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
                npm / yarn
              </ObserveText>
            </div>
          </SubItemGridWrapper>
        </SubItems>
      </SkillItem>

      <SkillItem>
        <ContentItemLeft>
          <ObserveText size="lg" weight={fontWeight.normal} color="orange" lineHeight="md">
            데브옵스
          </ObserveText>
        </ContentItemLeft>
        <SubItems>
          <li>
            <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
              AWS EC2 / CloudFront / S3
            </ObserveText>
          </li>
        </SubItems>
      </SkillItem>

      <SkillItem>
        <ContentItemLeft>
          <ObserveText size="lg" weight={fontWeight.normal} color="orange" lineHeight="md">
            그 외
          </ObserveText>
        </ContentItemLeft>
        <SubItems>
          <li>
            <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
              Github / Jira
            </ObserveText>
          </li>
        </SubItems>
      </SkillItem>
    </ul>

    <div style={{ marginTop: '16px' }}>
      <SkillDetailItems>
        <li>
          <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
            <b>React</b> 사용하는 것을 선호합니다.<b>컴포넌트 공통화 및 재활용</b> 하는 것에
            능숙합니다. <b>상태관리</b>, <b>비동기 처리</b>, 컴포넌트 로직 제어,{' '}
            <b>다양한 디자인 패턴</b>을 익히고 적용하며 개발합니다.
          </ObserveText>
        </li>
        <li>
          <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
            재귀함수, <b>함수형 프로그래밍</b>을 사용하여 개발하려고 합니다. SRP원칙을 준수하려고
            하며 <b>가독성있는 코드</b>를 작성하려고 노력합니다.
          </ObserveText>
        </li>
        <li>
          <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
            타입스크립트 타입 재활용 및 <b>유틸리티 타입</b>을 활용하여 타입을 작성하고,{' '}
            <b>유니온</b>, <b>인터섹션</b> 타입 등 활용할 수 있습니다.
          </ObserveText>
        </li>
        <li>
          <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
            유틸성 함수는 <b>jest를 사용</b>하여 테스트코드를 작성하며, QA에 많이 잡히는 이슈들에
            대해서는 <b>cypress</b>를 사용하여 이슈 재발하는 것을 방지하려합니다.
          </ObserveText>
        </li>
        <li>
          <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
            최근에는 비즈니스 로직을 <b>스토어 및 셀렉터</b>를 사용하여 로직을 구성합니다.
          </ObserveText>
        </li>
        <li>
          <ObserveText size="md" weight={fontWeight.normal} lineHeight="md">
            웹접근성 및 시맨틱 태그를 고려하여 개발합니다.
          </ObserveText>
        </li>
      </SkillDetailItems>
    </div>
  </div>
);
