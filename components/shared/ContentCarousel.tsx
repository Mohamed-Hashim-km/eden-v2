"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Scrollbar } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

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

export const ContentCarousel: React.FC<ContentCarouselProps> = ({ title, description, items, className = "" }) => {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  return (
    <section className={`py-12 md:py-16 lg:pt-24 lg:pb-0 bg-white overflow-hidden ${className}`}>
      <div className="container mx-auto  md:px-4">
        {/* Header Section */}
           <h2 className="text-primary px-4 text-sm md:text-lg mb-4 font-semibold tracking-wide">Common Amenities</h2>
        <div className="flex flex-col px-4 md:px-0 md:flex-row justify-between items-start gap-4 md:gap-8 mb-8 md:mb-16">
          <div className="flex flex-col gap-2 md:gap-4 max-w-2xl">
         
            <h2 className="text-3xl md:text-5xl lg:text-6xl text-primary leading-[1.1] ">{title}</h2>
          </div>

          {description && <div className="max-w-xl text-secondary text-sm md:text-lg leading-relaxed ">{description}</div>}
        </div>

        {/* Carousel Section */}
        <div className="relative group/slider">
          <Swiper
            modules={[Navigation, Autoplay, Scrollbar]}
            spaceBetween={16}
            slidesPerView={1.2}
            loop={false}
            navigation={{
              prevEl,
              nextEl,
            }}
            scrollbar={{
              draggable: true,
              hide: false,
              el: ".swiper-scrollbar",
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="pb-12! md:pb-0!"
            centeredSlides={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
                loop: true,
                centeredSlides: false,
              },
              900: {
                slidesPerView: 3,
                spaceBetween: 24,
                loop: true,
                centeredSlides: false,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 24,
                loop: true,
                centeredSlides: false,
              },
            }}
          >
            {items.map((item, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="block h-full group cursor-pointer">
                  {/* Image Container */}
                  <div className="relative overflow-hidden mb-4 md:mb-6 aspect-3/4 w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>

                  {/* Text Container */}
                  <h3 className="text-primary text-base md:text-xl md:mb-6 uppercase tracking-wide leading-snug transition-colors duration-300 font-medium">
                    {item.title}
                  </h3>
                  {item.description && <p className="text-secondary text-sm leading-relaxed mb-6 flex-grow hidden md:block">{item.description}</p>}
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-scrollbar mx-auto! w-[70%]! static! h-1! mt-4! bg-gray-200! md:hidden!">
              <div className="swiper-scrollbar-drag bg-primary!"></div>
            </div>
          </Swiper>

          {/* --- Navigation Buttons --- */}

          {/* Previous Button */}
          <button
            ref={(node) => setPrevEl(node as any)}
            className="hidden md:flex absolute top-[40%] -left-4 lg:-left-12 lg2:-left-20 xl:-left-16 2xl:-left-24 z-20 -translate-y-1/2 w-12 h-12 rounded-full border border-primary bg-white items-center justify-center text-primary transition-all duration-300 hover:bg-primary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
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
            className="hidden md:flex absolute top-[40%] -right-4 lg:-right-12 lg2:-right-20 xl:-right-16 2xl:-right-24 z-20 -translate-y-1/2 w-12 h-12 rounded-full border border-primary bg-white items-center justify-center text-primary transition-all duration-300 hover:bg-primary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
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
