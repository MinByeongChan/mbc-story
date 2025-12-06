import { UseEmblaCarouselType } from 'embla-carousel-react';
import { ComponentPropsWithRef } from 'react';

export type EmblaCarouselButtonProp = ComponentPropsWithRef<'button'>;

export type EmblaCarouselRef = UseEmblaCarouselType[0];
export type EmblaCarouselType = UseEmblaCarouselType[1];
