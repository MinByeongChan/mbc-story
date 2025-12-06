import React from 'react';
import { EmblaCarouselButtonProp } from './type';
import './embla.css';
import { css } from '@styled-system/css';

export const NavigateButton: React.FC<EmblaCarouselButtonProp> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className={css({
        appearance: 'none',
        backgroundColor: 'transparent',
        touchAction: 'manipulation',
        display: 'inline-flex',
        textDecoration: 'none',
        cursor: 'pointer',
        border: '0',
        p: '0',
        m: '0',
        width: '5',
        height: '5',
        '&:disabled': {
          color: 'token(colors.grey.400)',
        },
      })}
      type="button"
      {...restProps}
    >
      {children}
    </button>
  );
};
