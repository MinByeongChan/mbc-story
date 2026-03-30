import React from 'react';
import { GetStaticProps } from 'next';

import { TagLayout } from '@/layout';
import { Main } from '@/components/templates';
import { getAllPosts } from '@/utils/Content';
import { AboutMeta } from '@/components/about';

import styled from '@emotion/styled';
import Link from 'next/link';
import { color, fontSize, fontWeight } from '@/utils/StyleTheme';

type TagProps = {
  tags: Tag[];
};
interface ITagItemStyle {
  itemBgColor?: string;
  itemColor?: string;
  itemWeight?: string;
}

interface Tag {
  name: string;
  cnt: number;
}

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .search-img {
    width: 20px;
    height: 20px;
    margin-left: 15px;
  }
`;

const TopText = styled.div`
  font-size: ${fontSize.h1};
  font-weightL ${fontWeight.bold};
  margin-bottom: 25px;
`;

const TagItemList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const TagItem = styled.li`
  float: left;
  padding: 8px 10px;
  margin: 3px 5px;
  background-color: ${(props: ITagItemStyle) => props.itemBgColor};
  color: ${(props: ITagItemStyle) => props.itemColor};
  font-weight: ${(props: ITagItemStyle) => props.itemWeight};
  border-radius: 15px;
  transition: 0.1s linear;
  list-style: none;
  &:hover {
    opacity: 0.7;
  }
`;

const Tags = ({ tags }: TagProps) => {
  const makeColor = (cnt: number) => {
    let itemBgColor: string;
    let itemColor: string;
    let itemWeight: string;
    if (cnt >= 1 && cnt <= 5) {
      itemBgColor = color.gainsboro;
      itemColor = color.black;
      itemWeight = fontWeight.normal;
    } else if (cnt >= 6 && cnt <= 10) {
      itemBgColor = color.lightgrey;
      itemColor = color.black;
      itemWeight = fontWeight.normal;
    } else if (cnt >= 11 && cnt <= 15) {
      itemBgColor = color.darkgray;
      itemColor = color.black;
      itemWeight = fontWeight.normal;
    } else if (cnt >= 16) {
      itemBgColor = color.lightskyblue;
      itemColor = color.black;
      itemWeight = fontWeight.bold;
    } else {
      itemBgColor = color.darkWhite;
      itemColor = color.black;
      itemWeight = fontWeight.normal;
    }
    return [itemBgColor, itemColor, itemWeight];
  };

  return (
    <Main meta={<AboutMeta />}>
      <TagLayout>
        <TopWrapper>
          <TopText>Tags</TopText>
        </TopWrapper>
        <div>
          블로그에 게시된 태그 저장소입니다. 태그를 클릭하시면 관련 게시물을 볼 수 있습니다.
        </div>
        <TagItemList>
          {tags.map((data, index) => {
            // 태그 갯수에 따른 li 색상 설정
            const [itemBgColor, itemColor, itemWeight] = makeColor(data.cnt);

            return (
              <TagItem
                key={index}
                itemBgColor={itemBgColor}
                itemColor={itemColor}
                itemWeight={itemWeight}>
                <Link
                  href={{
                    pathname: '/',
                    query: { tag: `${data.name}` },
                  }}>
                  <span>{data.name}</span>
                </Link>
              </TagItem>
            );
          })}
        </TagItemList>
      </TagLayout>
    </Main>
  );
};

export const getStaticProps: GetStaticProps<TagProps> = async () => {
  const posts = getAllPosts();

  const tags: Tag[] = [];

  posts.forEach((post) => {
    const tagArr = post.tags;

    // tags배열 인자 검증
    if (tagArr !== undefined && Array.isArray(tagArr)) {
      tagArr.forEach((item) => {
        let idx = 0;
        // 기존 tags 배열에 tag가 있는지 검사
        const filtered = tags.find((data, index) => {
          idx = index;
          return data.name === item;
        });

        // tag가 없으면 새로운 태그 오브젝트 추가
        if (filtered === undefined) {
          tags.push({
            name: item,
            cnt: 1,
          });
        } else {
          // tag가 존재하면 기존 태그 오브젝트의 cnt 추가
          tags[idx].cnt += 1;
        }
      });
    }
  });

  // 태그 배열 정렬
  tags.sort((a, b) => b.cnt - a.cnt);

  return {
    props: {
      tags,
    },
  };
};

export default Tags;
