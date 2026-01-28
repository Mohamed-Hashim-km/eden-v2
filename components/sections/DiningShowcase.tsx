"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

// --- Icons ---
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
    description: "Refined multi-cuisine dining in an elegant setting, where thoughtfully crafted flavours and warm service come together.",
    image: "/1.webp",
  },
  {
    title: "Food & Forest – Rooftop",
    description: "A relaxed rooftop experience with great views, food and crafted cocktails perfect for laid-back evenings.",
    image: "/1.webp",
  },
  {
    title: "Oyster Bar",
    description: "Fresh coastal flavours served by the coast, serving celebrate traditions and fresh catches.",
    image: "/1.webp",
  },
  {
    title: "In-Room Dining",
    description: "Enjoy our gourmet offerings in the comfort of your room with our 24/7 service.",
    image: "/1.webp",
  },
  {
    title: "The Vintage Lounge",
    description: "Classic spirits and fine cigars in a sophisticated, leather-bound atmosphere.",
    image: "/1.webp",
  },
];

interface DiningShowcaseProps {
  title?: string;
}

export const DiningShowcase: React.FC<DiningShowcaseProps> = ({ title }) => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      
      {/* Title */}
      {title && (
        <div className="container mx-auto px-4 mb-12 text-center">
          <h2 className="text-4xl font-serif text-gray-900">{title}</h2>
        </div>
      )}

      {/* LAYOUT STRATEGY: 
        1. We create a container that is narrower than the screen (e.g., 70-80% width).
        2. This container holds exactly 2 cards.
        3. We allow the Swiper to overflow this container, revealing the side cards.
      */}
      <div className="relative w-full">
        
        {/* Navigation Wrapper - Positioned outside the cards */}
        <div className="absolute top-1/2 left-0 right-0 z-50 -translate-y-1/2 flex justify-between px-4 md:px-12 pointer-events-none">
          <div className="container mx-auto flex justify-between">
            <button className="swiper-button-prev-custom pointer-events-auto w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-900 hover:scale-110 transition-transform">
              <ChevronLeft />
            </button>
            <button className="swiper-button-next-custom pointer-events-auto w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-900 hover:scale-110 transition-transform">
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* SWIPER CONTAINER 
          - max-w-[85%] or max-w-[1200px]: Defines the width of the "2 center cards".
          - overflow-visible: Allows the "Partial" cards to be seen on the sides.
        */}
        <div className="mx-auto max-w-[90%] md:max-w-[80%] xl:max-w-[1100px]">
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            speed={800}
            spaceBetween={24} // Gap between the cards
            // This forces exactly 2 cards to fill our centered container
            slidesPerView={1.2} 
            centeredSlides={false}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            breakpoints={{
              // Mobile: 1 card visible (standard)
              640: { 
                slidesPerView: 1,
                spaceBetween: 20
              },
              // Tablet: 1.5 cards
              768: {
                slidesPerView: 1.5,
                spaceBetween: 24
              },
              // Desktop: Exactly 2 cards in the center box
              1024: { 
                slidesPerView: 2, 
                spaceBetween: 32 // 2rem gap
              }
            }}
            className="!overflow-visible" 
          >
            {diningOptions.map((item, index) => (
              <SwiperSlide key={index}>
                {({ isActive, isNext }) => (
                  <div className={`
                    relative group transition-all duration-500
                    /* OPACITY LOGIC:
                       Since we have 2 visible cards in the center container:
                       - The 1st one is "isActive"
                       - The 2nd one is "isNext"
                       We want both of these to be fully opaque.
                       Everything else (the partial sides) should be faded.
                    */
                    ${(isActive || isNext) ? 'opacity-100 scale-100' : 'opacity-40 scale-95'}
                  `}>
                    
                    {/* Image */}
                    <div className="relative w-full h-[450px] md:h-[550px] bg-gray-100 overflow-hidden shadow-sm">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Fog Overlay */}
                      <div className={`absolute inset-0 bg-white transition-opacity duration-500 ${(isActive || isNext) ? 'opacity-0' : 'opacity-50'}`} />
                    </div>

                    {/* Content */}
                    <div className={`
                      bg-white pt-6 pr-4
                      transition-all duration-500
                      ${(isActive || isNext) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                    `}>
                      <h3 className="text-2xl font-serif text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{item.description}</p>
                    </div>

                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};