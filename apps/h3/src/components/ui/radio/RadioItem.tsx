import { css } from '@styled-system/css';
import React from 'react';

interface RadioProps extends React.HTMLAttributes<HTMLInputElement> {
  id: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

const defaultInputStyles = css({
  width: '14px',
  height: '14px',
  cursor: 'pointer',
  '&:checked': {
    backgroundColor: 'token(colors.grey.400)',
  },
});

const defaultLabelStyles = css({
  fontSize: 'md',
  cursor: 'pointer',
  '&:hover': { opacity: 0.7 },
});

export const RadioItem = ({ id, value, checked, onChange, label, ...props }: RadioProps) => {
  return (
    <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
      <input
        className={defaultInputStyles}
        id={id}
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        {...props}
      />
      {label && (
        <label htmlFor={id} className={defaultLabelStyles}>
          {label}
        </label>
      )}
    </div>
  );
};
