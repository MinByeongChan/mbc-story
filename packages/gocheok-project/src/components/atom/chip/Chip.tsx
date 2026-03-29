import { Button, ButtonProps } from '../button/Button';

export const Chip = ({ children }: ButtonProps) => {
  return (
    <Button className="rounded-full bg-(--color-bg-200) px-4 py-2 text-xs text-(--color-neutral-200) hover:bg-(--color-primary)">
      {children}
    </Button>
  );
};
