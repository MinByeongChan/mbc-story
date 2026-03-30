import React from 'react';

import { GetStaticProps } from 'next';

import { Meta } from '@/layout';
import { getAllPosts } from '@/utils/Content';
import { Main } from '@/components/templates';
import { FrontMatter } from '@/types';
import { BlogMain } from '@/components/blog/BlogMain/BlogMain';
import {
  BlogMainContainer,
  BlogMainLayout,
  BlogMainMargin,
} from '@/components/blog/BlogMain/BlogMain.style';

interface BlogPostMainProps {
  posts: FrontMatter[];
}

interface BlogPostMainGetStaticProps {
  posts: FrontMatter[];
}

const BlogPostMain = ({ posts }: BlogPostMainProps) => {
  return (
    <Main
      meta={
        <Meta
          title="프론트엔드 민병찬 블로그"
          description="개발했던 것을 정리하기 위한 기술 블로그 입니다."
        />
      }>
      <BlogMainContainer>
        <BlogMainMargin>
          <BlogMainLayout>
            <BlogMain totalPostList={posts} />
          </BlogMainLayout>
        </BlogMainMargin>
      </BlogMainContainer>
    </Main>
  );
};

export const getStaticProps: GetStaticProps<BlogPostMainGetStaticProps> = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
};

export default BlogPostMain;
