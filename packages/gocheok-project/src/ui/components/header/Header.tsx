import { HeaderItem } from "./HeaderItem";

type Props = {};

export const Header = (props: Props) => {
  return (
    <nav className="w-full h-16 flex place-content-end px-8">
      <ul className="flex h-full gap-4 items-center">
        <HeaderItem>About Me</HeaderItem>
        <HeaderItem>Skill</HeaderItem>
        <HeaderItem>Carrer</HeaderItem>
        <HeaderItem>Education</HeaderItem>
      </ul>
    </nav>
  );
};
