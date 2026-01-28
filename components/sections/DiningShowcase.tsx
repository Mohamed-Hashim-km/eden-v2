"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

// --- Custom Icons matching the refined style ---
const ChevronLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 19L8 12L15 5" stroke="#1B1B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 5L16 12L9 19" stroke="#1B1B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// --- Data ---
const diningOptions = [
  {
    title: "Tulip – The Gourmet Restaurant",
    description: "Refined multi-cuisine dining in an elegant setting, where thoughtfully crafted flavours and warm service come together for memorable meals.",
    image: "/assets/images/insta/2.webp", 
  },
  {
    title: "Food & Forest – Rooftop Dining",
    description: "A relaxed rooftop experience with great views, food and crafted cocktails perfect for laid-back evenings and lively gatherings.",
    image: "/assets/images/insta/2.webp",
  },
  {
    title: "Oyster Bar",
    description: "Fresh coastal flavours served by the coast, serving celebrate traditions.",
    image: "/assets/images/insta/2.webp",
  },
  {
    title: "In-Room Dining",
    description: "Enjoy our gourmet offerings in the comfort of your room.",
    image: "/assets/images/insta/2.webp",
  },
];

interface DiningShowcaseProps {
  title?: string;
  description?: string;
}

export const DiningShowcase: React.FC<DiningShowcaseProps> = ({ title }) => {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      
      {/* Optional Section Title */}
      {title && (
        <div className="container mx-auto px-4 mb-10 text-center relative z-10">
           <h2 className="text-4xl font-serif text-gray-900">{title}</h2>
        </div>
      )}

      {/* Slider Wrapper */}
      <div className="relative w-full max-w-[1920px] mx-auto px-4 md:px-0">
        
        {/* Navigation Buttons:
            Positioned absolutely. They sit vertically centered relative to the IMAGE height (approx 400px), 
            not the whole card. 
        */}
        <div className="pointer-events-none absolute inset-0 z-40 flex items-start justify-center pt-[180px] md:pt-[220px] lg:pt-[250px]">
           <div className="relative w-full max-w-[900px] flex justify-between px-2 md:px-0">
             {/* Prev Button - sits on left edge of active image */}
             <button
               ref={setPrevEl}
               className="pointer-events-auto w-12 h-12 bg-white rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.08)] flex items-center justify-center text-gray-900 transition-all hover:scale-110 -ml-6"
               aria-label="Previous slide"
             >
               <ChevronLeft />
             </button>

             {/* Next Button - sits on right edge of active image */}
             <button
               ref={setNextEl}
               className="pointer-events-auto w-12 h-12 bg-white rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.08)] flex items-center justify-center text-gray-900 transition-all hover:scale-110 -mr-6"
               aria-label="Next slide"
             >
               <ChevronRight />
             </button>
           </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1.1} // Mobile default
          centeredSlides={true}
          loop={true}
          speed={800}
          navigation={{ prevEl, nextEl }}
          // Ensure navigation works after state update
          onBeforeInit={(swiper) => {
             // @ts-ignore
             swiper.params.navigation.prevEl = prevEl;
             // @ts-ignore
             swiper.params.navigation.nextEl = nextEl;
          }}
          autoplay={{ delay: 6000, disableOnInteraction: true }}
          breakpoints={{
            640: { slidesPerView: 1.5, spaceBetween: 30 },
            1024: { slidesPerView: 1.8, spaceBetween: 60 }, // This creates the specific "Center + Partial Sides" look
            1400: { slidesPerView: 2.2, spaceBetween: 80 },
          }}
          className="!overflow-visible"
        >
          {diningOptions.map((item, index) => (
            <SwiperSlide key={index} className="transition-all duration-500">
              {({ isActive }) => (
                <div className="relative group">
                  
                  {/* THE WHITE FOG OVERLAY
                      If !isActive, we overlay a white div with 60% opacity. 
                      This matches the reference image where side items look washed out.
                  */}
                  <div 
                    className={`absolute inset-0 z-20 bg-white transition-opacity duration-500 pointer-events-none 
                    ${isActive ? "opacity-0" : "opacity-60"}`} 
                  />

                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/3] bg-gray-50 mb-8 overflow-hidden shadow-sm">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    />
                  </div>

                  {/* Text Content */}
                  <div className={`text-left px-2 max-w-xl mx-auto md:mx-0 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-40'}`}>
                    <h3 className="text-2xl md:text-[28px] font-serif text-[#1B1B1B] mb-4 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm md:text-[15px] leading-7 font-light tracking-wide">
                      {item.description}
                    </p>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};