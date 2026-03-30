import {
  ArticleContainer,
  ArticleSubTitle,
  ArticleTitle,
  ListItem,
  TagListWrapper,
} from '@/components/blog/BlogList/BlogList.style';
import { BlogListItem } from '@/types';
import { Color } from '@/utils/StyleTheme';
import { Box, List, Typography } from '@mui/material';
import dayjs from 'dayjs';
import Link from 'next/link';
import React from 'react';

interface BlogContentListProps {
  listItem: BlogListItem[];
}

export function BlogList({ listItem }: BlogContentListProps) {
  return (
    <List>
      {listItem.map((data) => (
        <ListItem key={data.id}>
          <ArticleContainer>
            <Typography color="textSecondary" fontSize="1rem">
              {dayjs(data.date).format('MMMM D, YYYY')}
            </Typography>
            <Box mt="8px">
              <ArticleTitle variant="h5">
                <Link href={'/posts/' + data.id}>{data.title}</Link>
              </ArticleTitle>
            </Box>
            <TagListWrapper>
              {data.tags?.map((tag) => (
                <Typography key={tag} color={Color.LightPink} fontSize="1rem">
                  <Link href={'/?tag=' + tag}>{tag}</Link>
                </Typography>
              ))}
            </TagListWrapper>
            <Box mt="8px">
              <ArticleSubTitle variant="subtitle1" fontSize="1rem">
                {data.description}
              </ArticleSubTitle>
            </Box>
          </ArticleContainer>
        </ListItem>
      ))}
    </List>
  );
}
