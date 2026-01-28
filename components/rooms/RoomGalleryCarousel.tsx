"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

interface RoomGalleryCarouselProps {
  images: string[];
  title?: string;
}

const RoomGalleryCarousel: React.FC<RoomGalleryCarouselProps> = ({
  images,
  title,
}) => {
  if (!images || images.length === 0) return null;

  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  // We use realIndex so the bar tracks the 'logical' slide (0 to total-1)
  const [activeIndex, setActiveIndex] = useState(0);

  // Calculate the width of the thumb as a percentage of the track
  // If you have 10 images, thumb is 10% wide. If 4 images, 25% wide.
  const thumbWidthPercent = 100 / images.length;

  return (
    <div className="py-12 md:pb-24 bg-white relative">
      <div className="w-full flex flex-col gap-8">
        <Swiper
          modules={[Autoplay]}
          onSwiper={setSwiperInstance}
          // Update state whenever the slide changes (including autoplay)
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          spaceBetween={1}
          slidesPerView={1.5}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="transition-all duration-500">
              {({ isActive }) => (
                <div
                  className={`relative h-[300px] md:h-[400px] lg:h-[500px] w-full transition-all duration-500 ease-in-out ${
                    isActive ? "scale-100 z-10" : "scale-80"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Room Gallery Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* --- CUSTOM SCROLLBAR TRACK --- */}
        <div className="container mx-auto pt-10 px-4 flex justify-center w-full">
          {/* Fixed Height & Shrink-0: 
             Prevents the 'background compacting' bug when Swiper loops. 
          */}
          <div
            className="relative w-full max-w-[500px] h-[6px] bg-[#E5E5E5] shrink-0 overflow-hidden cursor-pointer"
            onClick={(e) => {
              if (!swiperInstance) return;
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              // Calculate which slide to jump to based on click position
              const clickPercent = clickX / rect.width;
              const targetSlide = Math.floor(clickPercent * images.length);
              swiperInstance.slideToLoop(targetSlide);
            }}
          >
            {/* --- CUSTOM SCROLLBAR THUMB --- */}
            <motion.div
              className="absolute top-0 bottom-0 bg-[#dbb380] hover:bg-[#cda06d]"
              // Animate the left position based on which slide is active
              animate={{
                left: `${(activeIndex / images.length) * 100}%`,
              }}
              // Spring animation makes the movement smooth, not jerky
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              style={{
                width: `${thumbWidthPercent}%`, // Dynamic width based on image count
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomGalleryCarousel;