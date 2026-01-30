"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

const overviewData = {
  tulip: [
    { id: 1, title: "Dish #1", image: "/1.webp" },
    { id: 2, title: "Dish #2", image: "/1.webp" },
    { id: 3, title: "Dish #3", image: "/1.webp" },
  ],
  oyster: [
    { id: 1, title: "Seafood #1", image: "/1.webp" },
    { id: 2, title: "Seafood #2", image: "/1.webp" },
    { id: 3, title: "Seafood #3", image: "/1.webp" },
  ],
  forest: [
    { id: 1, title: "Nature #1", image: "/1.webp" },
    { id: 2, title: "Nature #2", image: "/1.webp" },
    { id: 3, title: "Nature #3", image: "/1.webp" },
  ],
};

function Overview() {
  const [activeTab, setActiveTab] = useState("tulip");
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const currentImages = overviewData[activeTab];
  const thumbWidthPercent = 100 / currentImages.length; // Dynamic width based on item count

  const getTabLabel = (key) => {
    switch (key) {
      case "tulip":
        return "Tulip";
      case "oyster":
        return "Oyster Bay";
      case "forest":
        return "Food & \n Forest";
      default:
        return key;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto   md:px-6">
        {/* --- Header --- */}
        {/* --- Desktop Header --- */}
        <div className="hidden md:block text-center  max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary leading-tight mb-6 ">A World of Dining</h2>
          <p className="text-secondary text-lg font-light leading-relaxed">
            Discover diverse flavours and memorable dining experiences across our signature restaurants.
          </p>
        </div>

        {/* --- Mobile Header --- */}
        <div className="block md:hidden px-4 md:px-0 mb-12 text-left">
          <h2 className="text-[32px] leading-[1.2] text-[#0A1629] mb-6 ">The Eden Dining Philosophy</h2>
          <div className="w-24 border-t-2 border-[#9F9F9F] mb-6" />
          <p className="text-secondary text-base  leading-relaxed">
            Our culinary ethos is defined by a commitment to purity and artisanal technique. By pairing the finest ingredients with attentive
            hospitality, we create a dining experience that is both comforting and profoundly flavorful.
          </p>
        </div>

        {/* --- Tabs --- */}
        <div className="flex justify-center px-4 md:px-0 mb-12">
          {/* FIX 1: Removed 'pb-1' so buttons touch the border line */}
          <div className="flex w-full md:w-full lg:w-full border-b-[4px] border-[#E5E5E5]">
            {["tulip", "oyster", "forest"].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  // Optional: Reset swiper to 0 when tab changes if desired,
                  // but swiper updates automatically due to key or content change usually.
                }}
                className={`
                  flex-1 pb-4 text-xl font-normal cursor-pointer tracking-wide transition-all whitespace-pre-line md:whitespace-normal
  duration-300 relative 
                  ${activeTab === tab ? "text-primary" : "text-secondary hover:text-gray-600"}
                `}
              >
                {getTabLabel(tab)}

                {/* FIX 2 & 3: Changed bottom to -4px (matches border width) and added z-10 */}
                {activeTab === tab && <span className="absolute bottom-[-4px] left-0 w-full h-[4px] bg-[#E2BA86] z-10" />}
              </button>
            ))}
          </div>
        </div>

        {/* --- Desktop: Card Grid --- */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {currentImages.map((item) => (
            <div key={item.id} className="relative h-[400px] w-full overflow-hidden group">
              {/* Image Layer */}
              <div className="absolute inset-0 bg-gray-100">
                <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              {/* No overlay or text as per the design */}
            </div>
          ))}
        </div>

        {/* --- Mobile: Swiper --- */}
        <div className="md:hidden flex flex-col gap-16">
          <Swiper
            modules={[Autoplay]}
            onSwiper={setSwiperInstance}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            spaceBetween={16}
            slidesPerView={1.3}
            centeredSlides={true}
            
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="w-full"
          >
            {currentImages.map((item, index) => (
              <SwiperSlide key={item.id} className="transition-all duration-500">
                {({ isActive }) => (
                  <div
                    className={`relative h-[400px] w-full transition-all duration-500 ease-in-out overflow-hidden ${
                      isActive ? "scale-100 z-10" : "scale-100 "
                    }`}
                  >
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                )}
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
                const targetSlide = Math.floor(clickPercent * currentImages.length);
                swiperInstance.slideToLoop(targetSlide);
              }}
            >
              {/* --- CUSTOM SCROLLBAR THUMB --- */}
              <motion.div
                className="absolute top-0 bottom-0 bg-[#001446]"
                animate={{
                  left: `${(activeIndex / currentImages.length) * 100}%`,
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

export default Overview;
