import { HeaderItem } from "./HeaderItem";

export const Header = () => {
  return (
    <nav className="w-full h-16 flex place-content-between px-8">
      <figure className="flex h-full items-center">
        <figcaption>
          <a className="text-xl font-bold text-(--color-neutral-200)">
            B.C Min
          </a>
        </figcaption>
      </figure>

      <ul className="flex h-full gap-16 items-center justify-center">
        <HeaderItem>About Me</HeaderItem>
        <HeaderItem>Skill</HeaderItem>
        <HeaderItem>Carrer</HeaderItem>
        <HeaderItem>Education</HeaderItem>
      </ul>
    </nav>
  );
};
