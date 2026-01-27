"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

// Icons
const ChevronLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 18L9 12L15 6" stroke="#1B1B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18L15 12L9 6" stroke="#1B1B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const diningOptions = [
  {
    title: "Tulip – The Gourmet Restaurant",
    description: "Refined multi-cuisine dining in an elegant setting.",
    image: "/1.webp",
  },
  {
    title: "Food & Forest",
    description: "A relaxed rooftop experience with great views.",
    image: "/1.webp",
  },
  {
    title: "Oyster Bay",
    description: "Fresh coastal flavours served by the coast.",
    image: "/1.webp",
  },
  {
    title: "In-Room Dining",
    description: "Enjoy our gourmet offerings in the comfort of your room.",
    image: "/1.webp",
  },
  {
    title: "The Lounge Bar",
    description: "An intimate space to unwind with premium beverages.",
    image: "/1.webp",
  },
  {
    title: "Poolside Cafe",
    description: "Refresh yourself with cool drinks and snacks by the pool.",
    image: "/1.webp",
  },
];

interface DiningShowcaseProps {
  title?: string;
  description?: string;
  cta?: string;
}

export const DiningShowcase: React.FC<DiningShowcaseProps> = ({ title, description }) => {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  return (
    <section className="py-20 bg-white overflow-hidden">
      {/* Full width container to allow edge-to-edge swiping */}
      <div className="w-full relative">
        
        {/* Section Header */}
        {(title || description) && (
          <div className="text-center mb-12 max-w-3xl mx-auto px-4">
            {title && (
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary mb-6 leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-secondary text-lg leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Slider Area */}
        <div className="relative group/slider">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1.2} // Mobile default
            centeredSlides={true}
            loop={true}
            navigation={{
              prevEl,
              nextEl,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2, centeredSlides: true },
              768: { slidesPerView: 2.5, centeredSlides: true },
              // DESKTOP CONFIG: 4 slides + Centered = 3 Full in Middle + 2 Halves on edges
              1024: { slidesPerView: 4, centeredSlides: true }, 
            }}
            className="!overflow-visible"
          >
            {diningOptions.map((item, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="flex flex-col h-full group cursor-pointer transition-opacity duration-300">
                  
                  {/* Image */}
                  <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="pt-6 pr-4 pl-1">
                    <h3 className="text-2xl font-serif text-primary mb-3 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-secondary text-base leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* BUTTON POSITIONING:
             With slidesPerView: 4, each slide is 25% width.
             CenteredSlides means the layout is shifted.
             The "Cut" happens exactly at 12.5% from the left and 12.5% from the right.
          */}

          {/* Prev Button: Placed at the cut-off line on the left (12.5%) */}
          <button
            ref={setPrevEl}
            className="hidden lg:flex absolute top-[200px] left-[12.5%] z-30 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-xl items-center justify-center text-primary transition-all duration-300 hover:bg-primary hover:text-white disabled:opacity-50 cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft />
          </button>

          {/* Next Button: Placed at the cut-off line on the right (12.5% from right edge) */}
          <button
            ref={setNextEl}
            className="hidden lg:flex absolute top-[200px] right-[12.5%] z-30 translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-xl items-center justify-center text-primary transition-all duration-300 hover:bg-primary hover:text-white disabled:opacity-50 cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight />
          </button>
        </div>

      </div>
    </section>
  );
};