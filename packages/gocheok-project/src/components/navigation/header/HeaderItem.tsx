import { Anchor } from '@gocheok/components/actions/anchor/Anchor';
import { PropsWithChildren } from 'react';

type HeaderItemProps = PropsWithChildren;

export const HeaderItem = ({ children }: HeaderItemProps) => {
  return (
    <li>
      <Anchor>{children}</Anchor>
    </li>
  );
};
