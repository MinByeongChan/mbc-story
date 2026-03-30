import { FrontMatter } from '@/types';

export const getTagItems = (postList: FrontMatter[]) => {
  return postList.reduce<Record<string, number>>((prev, curr) => {
    curr.tags?.forEach((data) => {
      if (!prev[data]) prev[data] = 1;
      else prev[data] = prev[data] + 1;
    });
    return { ...prev };
  }, {});
};
