"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export interface CarouselItem {
  image: string;
  title: string;
  description?: string;
  slug?: string;
}

interface ContentCarouselProps {
  title: string;
  description?: string;
  items: CarouselItem[];
  className?: string;
}

export const ContentCarousel: React.FC<ContentCarouselProps> = ({
  title,
  description,
  items,
  className = "",
}) => {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  return (
    <section className={`py-16  md:pt-24 md:pb-0 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 md:mb-16">
          <div className="flex items-center gap-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
              {title}
            </h2>
          </div>

          {description && (
            <div className="max-w-xl text-secondary text-base md:text-lg leading-relaxed">
              {description}
            </div>
          )}
        </div>

        {/* Carousel Section */}
        {/* Added 'static' or removed relative from here so buttons can position relative to the wider section if needed, 
            but usually keeping relative here is safer for containment. 
            We will rely on negative positioning for the 'outside' look. */}
        <div className="relative group/slider">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            navigation={{
              prevEl,
              nextEl,
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            className=""
          >
            {items.map((item, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div
                  className="block h-full group cursor-pointer"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden mb-6 aspect-[4/5] md:aspect-square">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>

                  {/* Text Container */}
                  <h3 className="text-primary text-lg md:text-xl mb-6 font-serif uppercase tracking-wide leading-snug transition-colors duration-300">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-secondary text-sm leading-relaxed mb-6 flex-grow">
                      {item.description}
                    </p>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* --- Navigation Buttons --- */}
          
          {/* Previous Button */}
          <button
            ref={(node) => setPrevEl(node as any)}
            // CHANGES MADE:
            // 1. top-[40%] (was top-1/2): Moves button up to align with Image center instead of Card center
            // 2. xl:-left-24 (was lg:-left-12): Pushes button further outside on large screens
            className="absolute top-[40%] -left-4 lg:-left-20 xl:-left-24 z-20 -translate-y-1/2 w-12 h-12 rounded-full border border-[#001446]/20 bg-white flex items-center justify-center text-[#001446] transition-all duration-300 hover:bg-[#001446] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed opacity-0 group-hover/slider:opacity-100 shadow-md"
            aria-label="Previous slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            ref={(node) => setNextEl(node as any)}
             // CHANGES MADE:
            // 1. top-[40%]: Align with Image
            // 2. xl:-right-24: Push outside container
            className="absolute top-[40%] -right-4 lg:-right-20 xl:-right-24 z-20 -translate-y-1/2 w-12 h-12 rounded-full border border-[#001446]/20 bg-white flex items-center justify-center text-[#001446] transition-all duration-300 hover:bg-[#001446] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed opacity-0 group-hover/slider:opacity-100 shadow-md"
            aria-label="Next slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};