import React, { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

type UnderlineAnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & PropsWithChildren;

export const UnderlineAnchor = ({ children, className, ...rest }: UnderlineAnchorProps) => {
  return (
    <a
      className={twMerge(
        'relative cursor-pointer pb-2 text-base text-(--color-neutral-100) transition duration-300 ease-in-out',
        "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-[0px] after:rounded-[1px] after:bg-gradient-to-r after:from-[#ff6600] after:via-[#ff983f] after:to-[#ffffa1] after:opacity-0 after:transition-all after:duration-300 after:ease-in-out after:content-['']",
        'hover:after:w-full hover:after:opacity-100',
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
};
