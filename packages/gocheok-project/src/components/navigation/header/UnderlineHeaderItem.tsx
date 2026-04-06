import { PropsWithChildren } from 'react';
import { UnderlineAnchor } from '@gocheok/components/actions/anchor/UnderlineAnchor';

type UnderlineHeaderItemProps = PropsWithChildren;

export const UnderlineHeaderItem = ({ children }: UnderlineHeaderItemProps) => {
  return (
    <li>
      <UnderlineAnchor>{children}</UnderlineAnchor>
    </li>
  );
};
