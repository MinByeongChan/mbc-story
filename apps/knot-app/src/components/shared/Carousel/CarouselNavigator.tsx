import { PropsWithChildren } from 'react';
import './embla.css';

// interface CarouselNavigatorProps {
//   emblaApi: EmblaCarouselType | undefined;
//   leftButtonProps: EmblaCarouselButtonProp;
//   rightButtonProps: EmblaCarouselButtonProp;
// }

export const CarouselNavigator = ({ children }: PropsWithChildren) => {
  return (
    <div className="embla__controls">
      <div className="embla__buttons">{children}</div>
    </div>
  );
};
