'use client';

import React, { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

/**
 * primary	주요 강조 색상 (버튼, 링크, 액션 등)
 * secondary	보조 강조 색상 (서브 액션, 부가 정보 등)
 * tertiary	제3 강조 색상 (덜 중요한 버튼, 인터페이스 강조)
 * neutral	기본 텍스트, 보더, 배경 등 (gray 계열)
 * error	오류 메시지, 잘못된 입력 등 (보통 red)
 * warning	경고 상태 (보통 yellow/orange)
 * info	정보 메시지, 중립 알림 (보통 blue)
 * success	성공 상태 (보통 green)
 */
export type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'ref'> &
  PropsWithChildren<{
    ref?: React.Ref<HTMLButtonElement>;
  }>;

export const Button = ({ children, className, ref, ...restProps }: ButtonProps) => {
  return (
    <button
      ref={ref}
      className={twMerge(
        'border-transparent-[1px] cursor-pointer rounded-lg bg-(--color-primary-100) px-4 py-2 text-sm text-(--color-neutral-100) transition duration-300 ease-in-out',
        className,
      )}
      {...restProps}
    >
      {children}
    </button>
  );
};
