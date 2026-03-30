import { BlogList } from '@/components/blog/BlogList/BlogList';
import { ArticleContainer, LnbContainer } from '@/components/blog/BlogMain/BlogMain.style';
import { LnbList } from '@/components/blog/LnbList/LnbList';
import { useBlogMain } from '@/hooks/blog/useBlogMain';
import { FrontMatter } from '@/types';
import React from 'react';

interface BlogMainProps {
  totalPostList: FrontMatter[];
}

export const BlogMain = ({ totalPostList }: BlogMainProps) => {
  const { tagItems, blogListItem } = useBlogMain(totalPostList);

  return (
    <>
      <LnbContainer>
        <LnbList totalItemNumber={totalPostList.length} items={tagItems} />
      </LnbContainer>
      <ArticleContainer>
        <BlogList listItem={blogListItem} />
      </ArticleContainer>
    </>
  );
};
