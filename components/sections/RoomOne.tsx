"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import RoomCardOne from "./RoomCardOne";

const roomTypes = [
  {
    title: "Premium Room",
    description: "A well-appointed, comfortable space ideal for unwinding after a day in the city.",
    image: "/1.webp",
    slug: "premium-room",
  },
  {
    title: "Club Room",
    description: "Spacious and refined, offering added comfort and thoughtful conveniences.",
    image: "/1.webp",
    slug: "club-room",
  },
  {
    title: "Suite Room",
    description: "An expansive and elegant stay experience with enhanced comfort and style.",
    image: "/1.webp",
    slug: "suite-room",
  },
  {
    title: "Presidential Room",
    description: "Our most luxurious and spacious accommodation for a truly exceptional stay.",
    image: "/1.webp",
    slug: "presidential-room",
  },
  {
    title: "Dormitory",
    description: "A comfortable and well-maintained shared accommodation option, ideal for groups, travelers, or budget-friendly stays.",
    image: "/1.webp",
    slug: "6-bed-dormitory",
  },
];

function RoomOne({ className }: { className?: string }) {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [progress, setProgress] = useState(0);

  // Calculate thumb width dynamically based on number of items
  const thumbWidthPercent = roomTypes.length > 0 ? 100 / roomTypes.length : 100;

  return (
    // Used pb-20 from reference, minimal padding
    <section className={`pb-20 md:pb-20 bg-white ${className}`}>
      {/* HEADER SECTION: Keep inside container for alignment */}
      <div className="container mx-auto px-4 mb-10 md:mb-16">
        <div className="flex flex-col lg:flex-row justify-between items-center  gap-6">
          <div className="lg:w-1/2">
            {/* Reference Heading Size */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-primary">Spaces Crafted For Mindful Living</h2>
          </div>
          <div className="lg:w-1/3">
            {/* Reference Body Font */}
            <p className="text-secondary text-base md:text-lg">
              Hotel Eden offers rooms from Premium to Presidential, each blending spacious design with thoughtful amenities for a truly relaxing stay.
            </p>
          </div>
        </div>
      </div>

      {/* SWIPER SECTION: No Container, Full Width, Basic Padding */}
      <div className="w-full px-4 flex flex-col items-center">
        <Swiper
          modules={[Autoplay]}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setProgress(swiper.progress)}
          onProgress={(swiper) => setProgress(swiper.progress)}
          spaceBetween={30}
          slidesPerView={1}
          loop={false}
          speed={1000}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            575: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 2.5 }, // Shows part of the next slide
            1200: { slidesPerView: 3 },
            1400: { slidesPerView: 4 }, // Shows part of the next slide on large screens
          }}
          className="w-full !pb-12"
        >
          {roomTypes.length > 0 ? (
            roomTypes.map((data) => (
              <SwiperSlide key={data.slug}>
                <RoomCardOne Slug={data.slug} Img={data.image} Title={data.title} Description={data.description} />
              </SwiperSlide>
            ))
          ) : (
            <p className="text-secondary">No rooms available</p>
          )}
        </Swiper>

        {/* Custom Scrollbar */}
        <div className="flex justify-center w-full max-w-[300px] mt-4">
          <div
            className="relative w-full h-[4px] bg-[#E5E5E5] shrink-0 overflow-hidden cursor-pointer"
            onClick={(e) => {
              if (!swiperInstance) return;
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              const clickPercent = clickX / rect.width;

              // Map click percent directly to swiper progress
              // swiper.setProgress accepts 0-1
              // BUT for slideTo, we need a specific index usually,
              // or we can calculate which slide is at that %.
              // A simple approximation for non-looped slides:
              // index = percent * (totalSlides - 1)
              // But Swiper handles 'progress' internally.
              // Let's try finding the closest slide index.
              const totalSlides = roomTypes.length;
              // Swiper's progress 0 is start of slide 0.
              // Progress 1 is end of "snap grid".

              const targetSlide = Math.floor(clickPercent * (totalSlides - 1));

              // Alternatively, if we want exact progress mapping (smooth):
              // swiperInstance.setProgress(clickPercent, 1000);
              // But slideTo is often safer for snapping.
              swiperInstance.slideTo(targetSlide);
            }}
          >
            <motion.div
              className="absolute top-0 bottom-0 bg-[#001446]"
              animate={{
                // Logic:
                // When progress is 0, left is 0.
                // When progress is 1, user wants the bar to be fully "filled" visually?
                // OR just the indicator at the end?
                // Usually custom scrollbar implies a thumb that moves.
                // Max left position is (100% - thumbWidth%).
                left: `${progress * (100 - thumbWidthPercent)}%`,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              style={{
                width: `${thumbWidthPercent}%`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoomOne;
