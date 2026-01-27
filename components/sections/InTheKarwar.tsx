"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Updated Data Array
const posts = [
  {
    id: 1,
    image: "/1.webp",
    category: "Distance: 1.5 km",
    title: "Rabindranath Tagore Beach",
  },
  {
    id: 2,
    image: "/1.webp",
    category: "Distance: 7 km",
    title: "Devbagh Beach",
  },
  {
    id: 3,
    image: "/1.webp",
    category: "Distance: 8 km",
    title: "Kurumgad Island",
  },
  {
    id: 4,
    image: "/1.webp",
    category: "Distance: 10 km",
    title: "Oyster Rock Lighthouse",
  },
  {
    id: 5,
    image: "/1.webp",
    category: "Distance: 12 km",
    title: "Tilmati Beach",
  },
  {
    id: 6,
    image: "/1.webp",
    category: "Distance: 5 km",
    title: "Sadashivgad Fort",
  },
];

const InTheKarwar = () => {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  return (
    <div className="py-16 md:pt-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex justify-center text-center mb-16">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-5 text-primary">
              In the Heart of Karwar
            </h2>
            <p className="text-secondary">
              Stay close to everything that matters. Hotel Eden’s central
              location makes it easy to explore Karwar’s beaches, coastline, and
              key attractions while still enjoying a peaceful and comfortable
              stay.
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
            {posts.map((item, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="h-full">
                  <div className="block h-full">
                    <div
                      className="group relative h-full min-h-[400px] overflow-hidden rounded-xl p-8 flex flex-col justify-end items-center transition-all duration-500 ease-in-out cursor-pointer hover:z-10 bg-no-repeat bg-center bg-cover"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      {/* Dark overlay for text readability (Optional, keeps text clear) */}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>

                      <div className="relative z-10 text-center">
                        {/* Location / Distance Text */}
                        <p className="text-white/90 text-sm font-medium mb-2 uppercase tracking-wider">
                          {item.category}
                        </p>
                        
                        {/* Title Text */}
                        <h3 className="text-white text-2xl font-semibold mb-0">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Previous Button */}
          <button
            ref={(node) => setPrevEl(node)}
            className="absolute top-1/2 -left-4 md:-left-6 z-20 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary transition-all duration-300 hover:bg-primary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed opacity-0 group-hover/slider:opacity-100"
            aria-label="Previous slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            ref={(node) => setNextEl(node)}
            className="absolute top-1/2 -right-4 md:-right-6 z-20 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary transition-all duration-300 hover:bg-primary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed opacity-0 group-hover/slider:opacity-100"
            aria-label="Next slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InTheKarwar;