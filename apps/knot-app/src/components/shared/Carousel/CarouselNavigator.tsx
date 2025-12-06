import { PropsWithChildren } from 'react';
import './embla.css';
import { css } from '@styled-system/css';

export const CarouselNavigator = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={css({
        display: 'flex',
        justifyContent: 'center',
        gap: '10',
        marginTop: '1.8rem',
      })}
    >
      {children}
    </div>
  );
};
