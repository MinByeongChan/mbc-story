import React, { useEffect, useState } from 'react';
import { faEraser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { fontSize, fontWeight } from '@/utils/StyleTheme';
import { isEmpty } from '@/utils/Utility';
import { GalleryWrapper } from '@/components/posts/GalleryWrapper';
import styled from '@emotion/styled';
import { Pagination, PaginationProps } from '@/components/Pagination';
import { FrontMatter } from '@/types';

export interface PostsProps {
  galleryPosts: FrontMatter[];
  posts: FrontMatter[];
  pagination: PaginationProps;
}

interface TextCancelImgProps {
  search: string;
}

const TopText = styled.div`
  font-size: ${fontSize.h1};
  font-weightL ${fontWeight.bold};
  margin-bottom: 25px;
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 0px) and (max-width: 481px) {
    flex-direction: column;
  }
`;
const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  .search-img {
    width: 20px;
    height: 20px;
    cursor: pointer;
    :hover {
      .search-input {
        opacity: 1;
      }
    }
  }
`;
const SearchInputWrapper = styled.div`
  position: relative;
  width: 330px;
  height: 20px;
  margin-left: 10px;
`;
const SearchInput = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  width: 330px;
  border: none;
  border-bottom: 1px solid #000;
  font-size: ${fontSize.sm};
  padding-left: 5px;
  outline: none;
  transition: 0.2s linear;
  @media screen and (min-width: 0px) and (max-width: 481px) {
    width: 80%;
  }
`;

const TextCancelImg = styled.div<TextCancelImgProps>`
  position: absolute;
  width: 15px;
  height: 15px;
  cursor: pointer;
  right: 5px;
  top: -2px;
  z-index: 1;
  opacity: ${({ search }) => (search.length === 0 ? '0' : '1')};
`;

export const Posts = ({ galleryPosts, posts, pagination }: PostsProps) => {
  const router = useRouter();

  const [searchList, setSearchList] = useState<FrontMatter[]>([]);
  const [search, setSearch] = useState(
    router.query.search !== undefined ? router.query.search.toString() : '',
  );

  // 문자열 검증 함수
  const textVerify = (input: string) => {
    for (let i = 0; i < input.length; i++) {
      const ascii = input[i].charCodeAt(0);
      if (ascii >= 48 && ascii <= 57) {
        continue;
      } else if (ascii >= 65 && ascii <= 90) {
        continue;
      } else if (ascii >= 97 && ascii <= 122) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  };

  const onClickRemove = () => {
    setSearch('');
  };

  // 검색 필터링 함수
  const searchFiltering = (value: string) => {
    const inputVal = value;
    setSearch(inputVal);

    // 문자열 검증
    if (!textVerify(inputVal)) {
      setSearchList([]);
      return;
    }

    if (inputVal.length > 0) {
      setSearchList(
        galleryPosts.filter((data) => {
          const title = data.title.toString();
          const desc = !isEmpty(data.description) ? data.description : '';
          const tags = !isEmpty(data.tags) ? data.tags.toString() : '';

          return (
            title.match(new RegExp(inputVal, 'i')) !== null ||
            desc.match(new RegExp(inputVal, 'i')) !== null ||
            tags.match(new RegExp(inputVal, 'i')) !== null
          );
        }),
      );
    } else {
      setSearchList([]);
    }
  };

  // 검색 필드 onChange
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchFiltering(e.target.value);
  };

  useEffect(() => {
    searchFiltering(search);
  }, [router.query.search, search]);

  return (
    <>
      <TopWrapper>
        <TopText>Post</TopText>
        <SearchWrapper>
          <FontAwesomeIcon className="search-img" icon={faSearch} />
          <SearchInputWrapper>
            <SearchInput
              className="search-input"
              type="text"
              value={search}
              placeholder="검색내용, 태그 등을 입력해보세요!"
              onChange={onChangeSearch}
            />
            <TextCancelImg search={search} onClick={onClickRemove}>
              <FontAwesomeIcon icon={faEraser} />
            </TextCancelImg>
          </SearchInputWrapper>
        </SearchWrapper>
      </TopWrapper>

      <GalleryWrapper posts={isEmpty(searchList) ? posts : searchList} setSearch={setSearch} />

      {search.length === 0 && (
        <Pagination
          pagingList={pagination.pagingList}
          previous={pagination.previous}
          currPage={pagination.currPage}
          next={pagination.next}
          maxPage={pagination.maxPage}
        />
      )}
    </>
  );
};
