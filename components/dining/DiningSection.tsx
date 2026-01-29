"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/Button";
import { FaPlay } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

function DiningSection() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const diningItems = [
    { id: 1, title: "Tulip", image: "/1.webp" },
    { id: 2, title: "Oyster Bay", image: "/1.webp" },
    { id: 3, title: "Food & Forest", image: "/1.webp" },
  ];

  const thumbWidthPercent = 100 / diningItems.length;

  return (
    <section className="py-16 md:py-20 bg-[#faf5eb]">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-left md:text-center mb-10 md:mb-16 px-4 md:px-0">
          <h2 className="font-serif text-[32px] leading-tight md:text-6xl text-[#1A1A1A]">Curate Your Dining Experiences</h2>
        </div>

        {/* --- Desktop: Grid Container --- */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {diningItems.map((item) => (
            <div key={item.id} className="group relative h-[450px] md:h-[500px] w-full bg-white transition-shadow duration-300">
              {/* Image Container */}
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <div className="">
                    <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        opacity="0.5"
                        d="M29.5 0C13.2327 0 0 13.234 0 29.5C0 45.766 13.2327 59 29.5 59C45.7673 59 59 45.766 59 29.5C59 13.234 45.7673 0 29.5 0ZM41.2275 30.5335L24.0192 41.596C23.8176 41.7268 23.5847 41.7917 23.3542 41.7917C23.1525 41.7917 22.9485 41.7412 22.766 41.6417C22.3699 41.4256 22.125 41.0126 22.125 40.5625V18.4375C22.125 17.9874 22.3699 17.5744 22.766 17.3583C23.155 17.1447 23.6423 17.1578 24.0192 17.404L41.2275 28.4665C41.5781 28.6921 41.7917 29.0823 41.7917 29.5C41.7917 29.9177 41.5781 30.3078 41.2275 30.5335Z"
                        fill="#9A9A9A"
                      />
                    </svg>
                  </div>
                </div>

                {/* Content Area */}
                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <h3 className="text-white font-serif text-3xl md:text-3xl mb-6">{item.title}</h3>

                  <Link href="#" className="inline-block">
                    <Button variant="outline">View More</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Mobile: Swiper --- */}
        <div className="md:hidden flex flex-col gap-8">
          <Swiper
            modules={[Autoplay]}
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            spaceBetween={16}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="w-full"
          >
            {diningItems.map((item) => (
              <SwiperSlide key={item.id} className="transition-all duration-500">
                <div className="flex flex-col items-center">
                  {/* Image Card */}
                  <div className="relative h-[400px] w-full mb-6">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                    {/* Mobile Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          opacity="0.8" // Increased opacity for visibility
                          d="M29.5 0C13.2327 0 0 13.234 0 29.5C0 45.766 13.2327 59 29.5 59C45.7673 59 59 45.766 59 29.5C59 13.234 45.7673 0 29.5 0ZM41.2275 30.5335L24.0192 41.596C23.8176 41.7268 23.5847 41.7917 23.3542 41.7917C23.1525 41.7917 22.9485 41.7412 22.766 41.6417C22.3699 41.4256 22.125 41.0126 22.125 40.5625V18.4375C22.125 17.9874 22.3699 17.5744 22.766 17.3583C23.155 17.1447 23.6423 17.1578 24.0192 17.404L41.2275 28.4665C41.5781 28.6921 41.7917 29.0823 41.7917 29.5C41.7917 29.9177 41.5781 30.3078 41.2275 30.5335Z"
                          fill="#FFFFFF" // White play button for better visibility
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Content Below Image */}
                  <div className="text-center">
                    <h3 className="text-[#1A1A1A] font-serif text-2xl mb-4">{item.title}</h3>
                    <Link href="#" className="inline-block">
                      <Button variant="outline" className="border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white">
                        View More
                      </Button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* --- CUSTOM SCROLLBAR TRACK (Mobile Only) --- */}
          <div className="flex justify-center w-full px-4">
            <div
              className="relative w-full max-w-[300px] h-[4px] bg-[#E5E5E5] shrink-0 overflow-hidden cursor-pointer"
              onClick={(e) => {
                if (!swiperInstance) return;
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const clickPercent = clickX / rect.width;
                const targetSlide = Math.floor(clickPercent * diningItems.length);
                swiperInstance.slideToLoop(targetSlide);
              }}
            >
              {/* --- CUSTOM SCROLLBAR THUMB --- */}
              <motion.div
                className="absolute top-0 bottom-0 bg-[#001446]"
                animate={{
                  left: `${(activeIndex / diningItems.length) * 100}%`,
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
      </div>
    </section>
  );
}

export default DiningSection;
