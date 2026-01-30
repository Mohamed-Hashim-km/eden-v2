"use client";

import React, { useState } from "react"; // 1. Import useState
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const posts = [
  {
    id: 1,
    slug: "the-ritz-carlton",
    image: "/1.webp",
    title: "The Golden Leaf Spa",
    description: "Relax with signature therapies and wellness experiences.",
  },
  {
    id: 2,
    slug: "four-seasons-hotels",
    image: "/1.webp",
    title: "Fitness Studio",
    description: "Stay active with modern equipment in a calm, well-designed space.",
  },
  {
    id: 3,
    slug: "waldorf-astoria-hotels",
    image: "/1.webp",
    title: "Recreation Zone",
    description: "Unwind with indoor leisure and spaces designed for relaxation and fun.",
  },
  {
    id: 4,
    slug: "the-ritz-carlton-2",
    image: "/1.webp",
    title: "24/7 Guest Service",
    description: "Seamless support and personalized assistance, anytime you need it.",
  },
  {
    id: 5,
    slug: "waldorf-astoria-hotels",
    image: "/1.webp",
    title: "Terminal 5",
    description: "Hotel Eden’s elegant banquet and event space.",
  },
  {
    id: 6,
    slug: "the-ritz-carlton-2",
    image: "/1.webp",
    title: "Restaurants",
    description: "Hotel Eden brings together three unique restaurants.",
  },
];

const RoomsShowcase = () => {
  // 2. Use State instead of Ref to ensure Swiper detects changes
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  return (
    <div className="pb-1 md:pb-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex justify-center text-center mb-10 md:mb-16">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-5 text-primary">
            Spaces That Inspire Every Stay
            </h2>
            <p className="text-secondary text-base md:text-lg">
             From wellness and fitness to recreation and seamless service, Hotel Eden offers thoughtfully curated amenities designed to elevate every moment of your stay.
            </p>
          </div>
        </div>

        {/* Swiper Section Container */}
        <div className="w-full relative group/slider">
          
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            // 3. Pass the state variables to navigation
            navigation={{
              prevEl: prevEl,
              nextEl: nextEl,
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-0"
          >
            {posts.map((room, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="h-full">
                  <div className="block h-full">
                    <div
                      className="group relative h-full min-h-[400px] overflow-hidden rounded-xl p-8 flex flex-col justify-end items-center transition-all duration-500 ease-in-out cursor-pointer hover:z-10 bg-no-repeat bg-center bg-cover"
                      style={{ backgroundImage: `url(${room.image})` }}
                    >
                      <div className="relative z-10 text-center">
                        <h3 className="text-white text-2xl md:text-4xl font-semibold mb-0">
                          {room.title}
                        </h3>
                        <div className="max-h-0 opacity-0 translate-y-5 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-[200px] group-hover:opacity-100 group-hover:translate-y-0 group-hover:mt-4">
                          <p className="text-white/70 text-base mb-0">
                            {room.description}
                          </p>
                        </div>
                      </div>

                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
                        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                          <circle cx="8.5" cy="8.5" r="1.5"></circle>
                          <polyline points="21 15 16 10 5 21"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* 4. Use 'ref' as a callback function to set the state */}
          
          {/* Previous Button */}
          <button
            ref={(node) => setPrevEl(node)}
            className="absolute top-1/2 -left-4 md:-left-6 z-20 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary transition-all duration-300 hover:bg-primary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed opacity-0 group-hover/slider:opacity-100"
            aria-label="Previous slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            ref={(node) => setNextEl(node)}
            className="absolute top-1/2 -right-4 md:-right-6 z-20 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary transition-all duration-300 hover:bg-primary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed opacity-0 group-hover/slider:opacity-100"
            aria-label="Next slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

        </div>
      </div>
    </div>
  );
};

export default RoomsShowcase;