import { useAnchor } from '@/hooks/useAnchor';
import React from 'react';

interface AnchorProps extends React.PropsWithChildren {
  id: string;
}

export const Anchor = ({ id, children }: AnchorProps) => {
  const { handleClickAnchor } = useAnchor(id);

  return (
    <a href={'#' + id} onClick={handleClickAnchor}>
      {children}
    </a>
  );
};
