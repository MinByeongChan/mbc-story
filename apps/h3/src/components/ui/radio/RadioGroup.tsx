import React from 'react';
import { css } from '@styled-system/css';

interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const RadioGroup = ({ children }: RadioGroupProps) => {
  return <div className={css({ display: 'flex', flexDirection: 'row', gap: '2' })}>{children}</div>;
};
