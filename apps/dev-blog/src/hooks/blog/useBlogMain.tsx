import { BlogListItem, FrontMatter } from '@/types';
import { getTagItems } from '@/utils/utils';
import dayjs from 'dayjs';
import { useSearchParams } from 'next/navigation';

export const useBlogMain = (totalPostList: FrontMatter[]) => {
  const searchParams = useSearchParams();
  const tag = searchParams.get('tag') || '';

  const tagItems = getTagItems(totalPostList);
  const blogListItem = totalPostList
    .map<BlogListItem>((data) => ({
      id: data.slug,
      date: data.date,
      title: data.title,
      tags: data.tags,
      description: data.description || data.content.substring(0, 200),
    }))
    .filter((data) => {
      if (!tag) return true;
      const lowerCaseList = data.tags?.map((data) => data.toLowerCase()) ?? [];
      return lowerCaseList.includes(tag.toLowerCase());
    })
    .sort((a, b) => (dayjs(a.date).valueOf() < dayjs(b.date).valueOf() ? 1 : -1));

  return {
    tagItems,
    blogListItem,
  };
};
