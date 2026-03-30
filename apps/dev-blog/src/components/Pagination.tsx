import React from 'react';

import Link from 'next/link';

import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import { color, fontSize, fontWeight } from '@/utils/StyleTheme';
import { convertUrlToLinkHref } from '@/utils/Pagination';

export interface PaginationProps {
  pagingList?: number[];
  previous?: string;
  next?: string;
  currPage?: string;
  maxPage?: string;
}

interface PagingItem {
  curr?: boolean;
}

const PagingWrapper = styled.div`
  margin: 50px auto;
`;

const PagingList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const PagingItem = styled.div(() => ({
  margin: '0 10px',
  '&:hover span, &:hover .paging-item-icon': {
    opacity: '0.5',
    boxShadow: '0px 1px 0px',
  },
  '.paging-item-icon': {
    width: '14px',
    height: '14px',
    transition: '0.2s linear',
  },
}));

const ItemText = styled.span<PagingItem>`
  color: ${({ curr }) => (curr ? color.orange : color.darkBlack)};
  font-weight: ${({ curr }) => (curr ? fontWeight.bold : fontWeight.normal)};
  font-size: ${fontSize.lg};
  transition: 0.2s linear;
`;

const Pagination = ({ pagingList, previous, next, currPage, maxPage }: PaginationProps) => {
  return (
    <PagingWrapper>
      <PagingList>
        {previous && (
          <>
            <PagingItem>
              <Link href={convertUrlToLinkHref(`/`)} as="/">
                <FontAwesomeIcon className="paging-item-icon" icon={faAngleDoubleLeft} />
              </Link>
            </PagingItem>
            <PagingItem>
              <Link href={convertUrlToLinkHref(previous)} as={previous}>
                <FontAwesomeIcon className="paging-item-icon" icon={faAngleLeft} />
              </Link>
            </PagingItem>
          </>
        )}

        {pagingList?.map((data, index) => {
          const page = data === 1 ? '/' : `page${data}`;
          const curr = data === Number(currPage);

          return (
            <PagingItem key={index}>
              <Link href={convertUrlToLinkHref(page)} as={page}>
                <ItemText curr={curr}>{data}</ItemText>
              </Link>
            </PagingItem>
          );
        })}

        {next && (
          <>
            <PagingItem>
              <Link href={convertUrlToLinkHref(next)} as={next}>
                <FontAwesomeIcon className="paging-item-icon" icon={faAngleRight} />
              </Link>
            </PagingItem>
            <PagingItem>
              <Link href={convertUrlToLinkHref(`page${maxPage}`)} as={`page${maxPage}`}>
                <FontAwesomeIcon className="paging-item-icon" icon={faAngleDoubleRight} />
              </Link>
            </PagingItem>
          </>
        )}
      </PagingList>
    </PagingWrapper>
  );
};

export { Pagination };
