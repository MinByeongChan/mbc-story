import { ListItemText, LnbListWrapper, LnbWrapper } from '@/components/blog/LnbList/LnbList.style';
import { List, ListItem } from '@mui/material';
import Link from 'next/link';
import React from 'react';

interface LnbListProps {
  totalItemNumber: number;
  items: Record<string, number>;
}

export const LnbList = ({ totalItemNumber, items }: LnbListProps) => {
  const tagList = Object.entries(items).sort(([, count1], [, count2]) =>
    count1 < count2 ? 1 : -1,
  );

  return (
    <LnbWrapper>
      <LnbListWrapper>
        <Link href="/">
          <ListItemText variant="h6" fontWeight="700">
            All Posts ({totalItemNumber})
          </ListItemText>
        </Link>
        <List>
          {tagList.map(([title, count]) => (
            <ListItem key={title}>
              <Link href={'/?tag=' + title}>
                <ListItemText>
                  {title} ({count})
                </ListItemText>
              </Link>
            </ListItem>
          ))}
        </List>
      </LnbListWrapper>
    </LnbWrapper>
  );
};
