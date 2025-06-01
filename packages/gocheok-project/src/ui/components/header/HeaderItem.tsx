import { twMerge } from "tailwind-merge";
import { TypographyProps } from "../typography/Typography";

export const HeaderItem = ({ children }: TypographyProps) => {
  return (
    <li>
      <a
        className={twMerge(
          "headerItem",
          "relative text-(--color-neutral-100) text-md cursor-pointer transition duration-300 ease-in-out pb-2",
          "after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[0px] after:h-[2px] after:border-radius-1px after:opacity-0 after:bg-gradient-to-r after:from-[#ff6600] after:via-[#ff983f] after:to-[#ffffa1] after:transition-all after:duration-300 after:ease-in-out",
          "hover:after:w-full hover:after:opacity-100"
        )}
      >
        {children}
      </a>
    </li>
  );
};
