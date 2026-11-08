"use client";

import React, { useState } from "react";
import Image from "next/image";
import { A11y, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper/types";
import { twMerge } from "tailwind-merge";
import "swiper/css";

export interface ProjectGalleryImage {
  src: string;
  caption: string;
}

interface ProjectGalleryProps {
  images: ProjectGalleryImage[];
  /** 세로형 모바일 화면이면 여러 장을 나란히 보여준다. */
  mobile?: boolean;
}

export const ProjectGallery = ({
  images,
  mobile = false,
}: ProjectGalleryProps) => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(images.length <= 1);

  const syncState = (instance: SwiperClass) => {
    setActiveIndex(instance.activeIndex);
    setIsBeginning(instance.isBeginning);
    setIsEnd(instance.isEnd);
  };

  const canNavigate = !(isBeginning && isEnd);

  return (
    <section aria-label="화면 미리보기" className="mt-10">
      <Swiper
        modules={[Keyboard, A11y]}
        keyboard={{ enabled: true, onlyInViewport: true }}
        a11y={{
          prevSlideMessage: "이전 화면",
          nextSlideMessage: "다음 화면",
          slideLabelMessage: "{{index}} / {{slidesLength}}",
        }}
        spaceBetween={16}
        slidesPerView={mobile ? 1.4 : 1}
        breakpoints={mobile ? { 640: { slidesPerView: 3 } } : undefined}
        onSwiper={(instance) => {
          setSwiper(instance);
          syncState(instance);
        }}
        onSlideChange={syncState}
        onResize={syncState}
        onBreakpoint={syncState}
      >
        {images.map((image) => (
          <SwiperSlide key={image.src}>
            <figure>
              <div
                className={twMerge(
                  "relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900",
                  mobile ? "aspect-[9/19.5]" : "aspect-[16/10]",
                )}
              >
                <Image
                  src={image.src}
                  alt={image.caption}
                  fill
                  sizes={
                    mobile
                      ? "(min-width: 640px) 220px, 70vw"
                      : "(min-width: 768px) 700px, 100vw"
                  }
                  className={
                    mobile ? "object-cover object-top" : "object-contain"
                  }
                />
              </div>
              <figcaption className="mt-3 text-sm leading-relaxed break-keep text-neutral-400">
                {image.caption}
              </figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>

      {canNavigate && (
        <div className="mt-4 flex items-center justify-between">
          <p
            className="text-sm text-neutral-500 tabular-nums"
            aria-live="polite"
          >
            {activeIndex + 1} / {images.length}
          </p>
          <div className="flex gap-2">
            <GalleryButton
              label="이전 화면"
              disabled={isBeginning}
              onClick={() => swiper?.slidePrev()}
            >
              ←
            </GalleryButton>
            <GalleryButton
              label="다음 화면"
              disabled={isEnd}
              onClick={() => swiper?.slideNext()}
            >
              →
            </GalleryButton>
          </div>
        </div>
      )}
    </section>
  );
};

interface GalleryButtonProps {
  label: string;
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const GalleryButton = ({
  label,
  disabled,
  onClick,
  children,
}: GalleryButtonProps) => (
  <button
    type="button"
    aria-label={label}
    disabled={disabled}
    onClick={onClick}
    className={twMerge(
      "flex size-10 cursor-pointer items-center justify-center rounded-full border border-neutral-700 text-neutral-200 transition-colors",
      "hover:border-neutral-500 hover:text-white",
      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-primary)",
      "disabled:cursor-not-allowed disabled:border-neutral-800 disabled:text-neutral-700",
    )}
  >
    <span aria-hidden="true">{children}</span>
  </button>
);
