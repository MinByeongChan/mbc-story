import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
  height?: string | number;
  bgColor?: string;
};

export const Divider = ({
  className,
  height = '4',
  bgColor = 'bg-(--color-grey-400)',
  ...props
}: Props) => {
  return (
    <div className={twMerge('mx-auto my-4 w-full', bgColor, `h-${height}`, className)} {...props} />
  );
};
