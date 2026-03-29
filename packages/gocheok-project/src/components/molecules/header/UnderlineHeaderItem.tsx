import { PropsWithChildren } from 'react';
import { UnderlineAnchor } from '../../../components/atom/anchor/UnderlineAnchor';

type UnderlineHeaderItemProps = PropsWithChildren;

export const UnderlineHeaderItem = ({ children }: UnderlineHeaderItemProps) => {
  return (
    <li>
      <UnderlineAnchor>{children}</UnderlineAnchor>
    </li>
  );
};
