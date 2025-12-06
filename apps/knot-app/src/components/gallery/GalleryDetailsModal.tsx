import * as Dialog from '@radix-ui/react-dialog';
import { ModalLayout } from '@components/layout';
import { MODAL_KEY } from '@components/layout/model/constants';
import { useModal } from '@components/layout/model/useModal';
import { css } from '@styled-system/css';
import { Carousel } from '@components/shared/Carousel/Carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { CarouselNavigator, CarouselSlide, NavigateButton } from '@components/shared/Carousel';
import { useCarouselControls } from '@components/shared/Carousel/model/useCarouselControls';
import { GalleryImage } from './type';
import { useEffect } from 'react';

interface GalleryDetailsModalProps {
  currentSlide: GalleryImage;
  slides: GalleryImage[];
}

export const GalleryDetailsModal = ({ currentSlide, slides }: GalleryDetailsModalProps) => {
  console.log('currentSlide', currentSlide);
  const handleChangeModal = useModal((state) => state.onChangeModal);
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    useCarouselControls(emblaApi);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      onPrevButtonClick();
    } else if (event.key === 'ArrowRight') {
      onNextButtonClick();
    }
  };

  useEffect(() => {
    if (!emblaApi) return;

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [emblaApi]);

  return (
    <ModalLayout onOpenChange={(open) => handleChangeModal(MODAL_KEY.GALLERY_DETAILS, open)}>
      <div className={css({ width: '400px', p: '6' })}>
        <Dialog.Title className={css({ display: 'flex', justifyContent: 'flex-end' })}>
          <Dialog.Close asChild>
            <button
              type="button"
              className={css({ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' })}
            >
              <img width={24} height={24} src="/sample/close.png" alt="modal_close" />
            </button>
          </Dialog.Close>
        </Dialog.Title>

        <section className="embla">
          <Carousel emblaRef={emblaRef}>
            {slides.map((slide) => (
              <CarouselSlide key={slide.id} {...slide} />
            ))}
          </Carousel>

          <CarouselNavigator>
            <NavigateButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}>
              <svg viewBox="0 0 532 532">
                <path
                  fill="currentColor"
                  d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
                />
              </svg>
            </NavigateButton>
            <NavigateButton onClick={onNextButtonClick} disabled={nextBtnDisabled}>
              <svg viewBox="0 0 532 532">
                <path
                  fill="currentColor"
                  d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
                />
              </svg>
            </NavigateButton>
          </CarouselNavigator>
        </section>
      </div>
    </ModalLayout>
  );
};
