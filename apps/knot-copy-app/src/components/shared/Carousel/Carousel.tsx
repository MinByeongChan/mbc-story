import { EmblaCarouselRef } from './type';
import { css } from '@styled-system/css';

interface CarouselProps extends React.PropsWithChildren {
  emblaRef: EmblaCarouselRef;
}

export const Carousel = ({ emblaRef, children }: CarouselProps) => {
  return (
    <div
      className={css({
        overflow: 'hidden',
        borderRadius: 'md',
        mt: '2',
      })}
      ref={emblaRef}
    >
      <div
        className={css({
          display: 'flex',
          touchAction: 'pan-y pinch-zoom',
        })}
      >
        {children}
      </div>
    </div>
  );
};
