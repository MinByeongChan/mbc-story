import React from "react";
import { useSwiper } from "swiper/react";
import { twMerge } from "tailwind-merge";

interface SwiperPaginationProps {
  className?: string;
  totalSlides: number;
  currentSlide: number;
}

export const SwiperPagination = ({
  className,
  totalSlides,
  currentSlide,
}: SwiperPaginationProps) => {
  const swiper = useSwiper();

  return (
    <div className={twMerge("mt-8 pointer-events-none", className)}>
      <div className="flex justify-center items-center w-full">
        <div className=" p-3 rounded-3xl bg-white flex gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => swiper.slideTo(index)}
              className={twMerge(
                `w-3 h-3 rounded-full transition-colors cursor-pointer ${
                  currentSlide === index ? "bg-gray-800" : "bg-gray-300"
                }`,
                "hover:bg-gray-500"
              )}
              aria-label={`${index + 1}번 슬라이드로 이동`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
