import { PropsWithChildren } from "react";
import { UnderlineAnchor } from "components/atom/anchor/UnderlineAnchor";

interface UnderlineAnchorProps extends PropsWithChildren {}

export const UnderlineHeaderItem = ({ children }: UnderlineAnchorProps) => {
  return (
    <li>
      <UnderlineAnchor>{children}</UnderlineAnchor>
    </li>
  );
};
