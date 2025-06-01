import { twMerge } from "tailwind-merge";
import { TypographyProps } from "../typography/Typography";

export const HeaderItem = ({ children }: TypographyProps) => {
  return (
    <li>
      <a
        className={twMerge(
          "headerItem",
          "relative text-(--color-neutral-100) text-md cursor-pointer transition duration-300 ease-in-out pb-2"
        )}
      >
        {children}
      </a>
    </li>
  );
};
