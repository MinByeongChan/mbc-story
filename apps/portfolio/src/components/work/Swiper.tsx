"use client";

import React from "react";
import { Scrollbar } from "swiper/modules";
import { Swiper as ReactSwiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { SwiperPagination } from "./SwiperNavigation";

interface SwiperProps {
  images: string[];
}

export const Swiper = ({ images }: SwiperProps) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className="max-h-[700px] my-16 relative">
      <ReactSwiper
        modules={[Scrollbar]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className={twMerge(
                "flex justify-center items-center",
                "transition-all duration-300 ease-in-out",
                "relative w-full h-full transform overflow-hidden",
                "transform-style-3d",
                activeIndex !== index && "scale-90"
              )}
            >
              <Image
                className="object-cover rounded-xl"
                src={image}
                alt={`work image ${index + 1}`}
                width={image.includes("mobile") ? 300 : 800}
                height={500}
                quality={100}
                priority={index === 0}
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          </SwiperSlide>
        ))}
        <SwiperPagination
          className="pointer-events-auto"
          totalSlides={images.length}
          currentSlide={activeIndex}
        />
      </ReactSwiper>
    </div>
  );
};
