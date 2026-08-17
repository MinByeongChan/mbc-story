import styled from '@emotion/styled';
import React, { useRef } from 'react';
import TextDefault from '@/components/ui/TextDefault';
import { fontWeight } from '@/utils/StyleTheme';
import { useAnchor } from '@/hooks/useAnchor';

interface ContentTitleProps {
  id: string;
  title: string;
}

const TitleWrapper = styled.div`
  padding-bottom: 13px;
  margin: 70px 0 20px 0;
  border-bottom: 1px solid #9c9c9c;
`;

export const ContentTitle = ({ title, id }: ContentTitleProps) => {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const { handleClickAnchor } = useAnchor(id);

  return (
    <>
      <TitleWrapper>
        <TextDefault size="xxg" weight={fontWeight.medium} color="orange">
          <a ref={ref} className={id} href={'#' + id} onClick={handleClickAnchor}>
            {title}
          </a>
        </TextDefault>
      </TitleWrapper>
    </>
  );
};
