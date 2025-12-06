import './embla.css';
import { EmblaCarouselRef } from './type';

interface CarouselProps {
  emblaRef: EmblaCarouselRef;
  slides: number[];
}
export const Carousel = ({ emblaRef, slides }: CarouselProps) => {
  return (
    <div className="embla__viewport" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((index) => (
          <div className="embla__slide" key={index}>
            <div className="embla__slide__number">{index}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
