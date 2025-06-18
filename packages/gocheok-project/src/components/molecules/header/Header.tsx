import { StressButton } from "../../../components/atom/button/StressButton";

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

      <ul className="flex h-full gap-2 items-center justify-center">
        <StressButton noneRadius className="w-[5rem] h-[1.5rem] font-bold">
          Work
        </StressButton>
        <StressButton noneRadius className="w-[5rem] h-[1.5rem] font-bold">
          About
        </StressButton>
      </ul>
    </nav>
  );
};
