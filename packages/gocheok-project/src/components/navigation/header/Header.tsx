import { StressButton } from '@gocheok/components/actions/button/StressButton';

export const Header = () => {
  return (
    <nav className="flex h-16 w-full place-content-between px-8">
      <figure className="flex h-full items-center">
        <figcaption>
          <a className="text-xl font-bold text-(--color-neutral-200)">B.C Min</a>
        </figcaption>
      </figure>

      <ul className="flex h-full items-center justify-center gap-2">
        <StressButton noneRadius className="h-[1.5rem] w-[5rem] font-bold">
          Work
        </StressButton>
        <StressButton noneRadius className="h-[1.5rem] w-[5rem] font-bold">
          About
        </StressButton>
      </ul>
    </nav>
  );
};
