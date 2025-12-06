import * as Dialog from '@radix-ui/react-dialog';
import { ModalLayout } from '@components/layout';
import { MODAL_KEY } from '@components/layout/model/constants';
import { useModal } from '@components/layout/model/useModal';
import { css } from '@styled-system/css';
import { Carousel } from '@components/shared/Carousel/Carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { CarouselNavigator, NextButton, PrevButton } from '@components/shared/Carousel';
import { useCarouselControls } from '@components/shared/Carousel/model/useCarouselControls';

interface GalleryDetailsModalProps {
  src: string;
}

export const GalleryDetailsModal = ({ src }: GalleryDetailsModalProps) => {
  const handleChangeModal = useModal((state) => state.onChangeModal);
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    useCarouselControls(emblaApi);

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
          <Carousel emblaRef={emblaRef} slides={[1, 2, 3]} />
          <CarouselNavigator>
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </CarouselNavigator>
        </section>
      </div>
    </ModalLayout>
  );
};
