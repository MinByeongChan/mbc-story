import React from 'react';
import styled from '@emotion/styled';
import { fontWeight } from '@/utils/StyleTheme';
import { ObserveText } from '@/components/ui';

const IntroItems = styled.ul({
  listStyle: 'inherit',
  margin: '16px',
});
const IntroItem = styled.li`
  .intro-icon {
    display: inline;
    width: 25px;
    height: 25px;
    margin-right: 12px;
  }
  .content-icon {
    display: inline;
    width: 22px;
    height: 22px;
    margin: 0 6px;
  }
`;

export const AboutIntroduction = () => {
  return (
    <IntroItems>
      <IntroItem>
        <ObserveText size="md" lineHeight="md" weight={fontWeight.normal}>
          안녕하세요! {new Date().getFullYear() - 2020 + 1}년차 &nbsp;
        </ObserveText>
        <ObserveText size="md" lineHeight="md" weight={fontWeight.bold}>
          프론트엔드 주니어 개발자&nbsp;
        </ObserveText>
        <ObserveText size="md" lineHeight="md" weight={fontWeight.normal}>
          입니다.
        </ObserveText>
      </IntroItem>
    </IntroItems>
  );
};
