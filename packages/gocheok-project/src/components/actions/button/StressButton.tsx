'use client';

import gsap from 'gsap';
import React, { PropsWithChildren, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Typography } from '@gocheok/components/presenter/typography/Typography';
import { SplitText } from 'gsap/all';
import { useGSAP } from '@gsap/react';

type StressButtonOwnProps<C extends React.ElementType> = PropsWithChildren<{
  /** 링크로 쓸 때 `a`나 프레임워크의 Link 컴포넌트를 넘긴다. 기본값은 `button`. */
  as?: C;
  className?: string;
  noneRadius?: boolean;
  noneBorder?: boolean;
}>;

export type StressButtonProps<C extends React.ElementType = 'button'> = StressButtonOwnProps<C> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof StressButtonOwnProps<C>>;

export const StressButton = <C extends React.ElementType = 'button'>({
  as,
  children,
  className,
  noneRadius,
  noneBorder,
  ...restProps
}: StressButtonProps<C>) => {
  const Component: React.ElementType = as ?? 'button';
  const ref = useRef(null);
  const typoRef = useRef(null);
  const typo2Ref = useRef(null);
  const hoverBackgroundRef = useRef(null);
  gsap.registerPlugin(SplitText);

  useGSAP(() => {
    gsap.set(typoRef.current, { opacity: 1 });
    gsap.set(typo2Ref.current, { opacity: 0 });
  });

  const splitStart = (target: HTMLSpanElement | null, direction: number) => {
    SplitText.create(target, {
      type: 'words,lines',
      autoSplit: true,
      mask: 'lines',
      onSplit: (self) => {
        return gsap.from(self.lines, {
          duration: 1,
          yPercent: 100,
          opacity: direction,
          stagger: 0.3,
          ease: 'expo.out',
        });
      },
      onRevert: (self) => {
        return gsap.from(self.lines, {
          duration: 1,
          yPercent: 0,
          opacity: 1 - direction,
          stagger: 0.3,
          ease: 'expo.out',
        });
      },
    });
  };

  const handleMouseEnterButton = () => {
    splitStart(typoRef.current, 1);
    splitStart(typo2Ref.current, 0);
  };

  return (
    <Component
      ref={ref}
      className={twMerge(
        'group',
        'relative z-1000 flex cursor-pointer items-center rounded-2xl border-[1px] border-(--color-neutral-200)/70 text-xs tracking-tight text-(--color-neutral-100)',
        'relative h-[1.7rem] w-[10rem] text-center',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
        noneBorder && 'border-none',
        noneRadius && 'rounded-none',
        className,
      )}
      {...restProps}
      onMouseEnter={handleMouseEnterButton}
    >
      <div
        ref={hoverBackgroundRef}
        className={twMerge(
          'pointer-events-none absolute scale-0 rounded-[80%] transition-all duration-300 ease-in-out',
          'group-hover:bottom-0 group-hover:left-0 group-hover:h-full group-hover:w-full group-hover:scale-100 group-hover:rounded-xl group-hover:bg-white',
          noneRadius && 'group-hover:rounded-none',
        )}
      />
      <Typography
        ref={typoRef}
        className="pointer-events-none absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-white group-hover:text-black"
      >
        {children}
      </Typography>
      <Typography
        ref={typo2Ref}
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-black"
      >
        {children}
      </Typography>
    </Component>
  );
};
