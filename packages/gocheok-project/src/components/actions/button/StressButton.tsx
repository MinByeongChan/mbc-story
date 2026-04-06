'use client';

import gsap from 'gsap';
import React, { PropsWithChildren, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Typography } from '@gocheok/components/data-display/typography/Typography';
import { SplitText } from 'gsap/all';
import { useGSAP } from '@gsap/react';

export type StressButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren & {
    noneRadius?: boolean;
    noneBorder?: boolean;
  };
export const StressButton = ({
  children,
  className,
  noneRadius,
  noneBorder,
  ...restProps
}: StressButtonProps) => {
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
    <button
      ref={ref}
      className={twMerge(
        'group',
        'relative z-1000 flex cursor-pointer items-center rounded-2xl border-[1px] border-(--color-neutral-200)/70 text-xs tracking-tight text-(--color-neutral-100)',
        'relative h-[1.7rem] w-[10rem]',
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
          'absolute scale-0 rounded-[80%] transition-all duration-300 ease-in-out',
          'group-hover:bottom-0 group-hover:left-0 group-hover:h-full group-hover:w-full group-hover:scale-100 group-hover:rounded-xl group-hover:bg-white',
          noneRadius && 'group-hover:rounded-none',
        )}
      />
      <Typography
        ref={typoRef}
        className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-white group-hover:text-black"
      >
        {children}
      </Typography>
      <Typography
        ref={typo2Ref}
        className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-black"
      >
        {children}
      </Typography>
    </button>
  );
};
