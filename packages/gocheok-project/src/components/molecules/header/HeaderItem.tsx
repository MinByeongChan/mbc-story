import { Anchor } from "components/atom/anchor/Anchor";
import { PropsWithChildren } from "react";

interface HeaderItemProps extends PropsWithChildren {}

export const HeaderItem = ({ children }: HeaderItemProps) => {
  return (
    <li>
      <Anchor>{children}</Anchor>
    </li>
  );
};
