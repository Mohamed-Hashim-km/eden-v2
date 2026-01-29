"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Scrollbar } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

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
        <div className="container mx-auto px-4 mb-20 text-center">
          <h2 className="text-4xl  text-gray-900">{title}</h2>
        </div>
      )}

      {/* CONTAINER WRAPPER 
         We make this 'relative' so the buttons can position themselves 
         specifically against the width of the slide area.
      */}
      <div className="relative mx-auto max-w-[95%] md:max-w-[75%] xl:max-w-[1200px]">
        {/* --- NAVIGATION BUTTONS --- */}
        {/* Positioned absolutely within the container. 
            z-50 ensures they sit on top of images.
            -translate-x-1/2 pulls them slightly outward to straddle the edge.
        */}
        <div className="absolute top-[40%] md:top-[250px] w-full hidden md:flex justify-between z-50 pointer-events-none">
          {/* Previous Button - Left Edge */}
          <button className="swiper-button-prev-custom pointer-events-auto w-10 h-10 bg-white rounded-full  flex items-center justify-center text-gray-900 hover:scale-110 transition-transform absolute left-0 -translate-x-1/2">
            <ChevronLeft />
          </button>

          {/* Next Button - Right Edge */}
          <button className="swiper-button-next-custom pointer-events-auto w-10 h-10 bg-white rounded-full  flex items-center justify-center text-gray-900 hover:scale-110 transition-transform absolute right-0 translate-x-1/2">
            <ChevronRight />
          </button>
        </div>

        <div className="pb-24 relative">
          <Swiper
            modules={[Navigation, Autoplay, Scrollbar]}
            loop={true}
            loopAdditionalSlides={3}
            speed={800}
            spaceBetween={30}
            slidesPerView={1.2}
            centeredSlides={false}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            scrollbar={{
              el: ".swiper-scrollbar-custom",
              draggable: true,
            }}
            autoplay={{ delay: 2000, disableOnInteraction: true }}
            breakpoints={{
              320: { slidesPerView: 1.15, spaceBetween: 16, centeredSlides: true },
              640: { slidesPerView: 1.1, spaceBetween: 20, centeredSlides: true },
              768: { slidesPerView: 1.5, spaceBetween: 24, centeredSlides: false },
              1024: { slidesPerView: 2, spaceBetween: 30 },
            }}
            className="!overflow-visible"
          >
            {diningOptions.map((item, index) => (
              <SwiperSlide key={index}>
                {({ isActive, isNext }) => (
                  <>
                    {/* --- DESKTOP LAYOUT (Original) --- */}
                    <div
                      className={`
                    hidden md:block
                    relative group transition-all duration-700 ease-out select-none
                    ${isActive || isNext ? "opacity-100 blur-0" : "opacity-40 "}
                  `}
                    >
                      {/* IMAGE CONTAINER */}
                      <div className="relative w-full h-[350px] md:h-[500px] overflow-hidden shadow-sm">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                      </div>

                      {/* OVERLAPPING TEXT CARD */}
                      <div
                        className="
                      absolute bottom-0 w-[70%] left-10 
                      translate-y-[50%] 
                       mx-auto 
                      bg-white p-6 
                      z-20
                    "
                      >
                        <h3 className="text-xl md:text-2xl  text-primary mb-2">{item.title}</h3>
                        <p className="text-secondary text-sm leading-relaxed font-light line-clamp-2">{item.description}</p>
                      </div>
                    </div>

                    {/* --- MOBILE LAYOUT (New, Overlapping Text Card) --- */}
                    <div className="block md:hidden relative group select-none h-full pt-4">
                      {/* IMAGE CONTAINER */}
                      <div className="relative w-full h-[400px] overflow-hidden shadow-sm">
                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                      </div>

                      {/* TEXT CONTENT (Overlapping) */}
                      <div className="relative -mt-16 w-[90%] mx-auto bg-white p-6 shadow-md z-10 text-center">
                        {item.mobileLogo ? (
                          <div className="relative w-full h-12 mb-2 flex justify-center items-center">
                            <Image src={item.mobileLogo} alt={item.title} width={100} height={40} className="object-contain" />
                          </div>
                        ) : (
                          <h3 className="text-xl text-primary mb-2 font-normal">{item.title}</h3>
                        )}
                        <p className="text-gray-600 text-sm leading-relaxed font-light line-clamp-2 px-2">{item.description}</p>
                      </div>
                    </div>
                  </>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Scrollbar Container */}
          <div className="swiper-scrollbar-custom h-1 bg-gray-200 mt-10 relative overflow-hidden rounded-full w-[90%] mx-auto md:hidden">
            {/* Swiper will inject the drag handle here automatically */}
          </div>
        </div>
      </div>
    </section>
  );
};
