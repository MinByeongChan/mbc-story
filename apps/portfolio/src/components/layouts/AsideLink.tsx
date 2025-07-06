import React from "react";
import { UnderlineAnchor } from "../ui/anchor";

export const AsideLink = () => {
  return (
    <div className="fixed top-[70%] left-[-50px] rotate-90 hidden lg:block">
      <UnderlineAnchor
        className="text-neutral-200 transition-all duration-300 hover:text-(--color-primary)"
        href="mailto:mbc0481@naver.com"
      >
        mbc0481@naver.com
      </UnderlineAnchor>
    </div>
  );
};
