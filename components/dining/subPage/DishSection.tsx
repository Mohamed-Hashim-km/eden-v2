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


interface DishSectionProps {
  title?: string;
  description?: string;
  data: any;
}

export const DishSection: React.FC<DishSectionProps> = ({ title, description, data }) => {
  return (
    <section className="md:py-24 bg-white overflow-hidden">
      {/* Title */}
      {title && (
        <div className="container mx-auto px-4 mb-16  ">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 w-full">
          
          {/* Left: Title */}
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
             {title}
            </h2>
          </div>

          {/* Right: Description */}
          <div className="md:w-1/2 flex md:justify-end">
            <p className="text-secondary text-sm md:text-base leading-relaxed max-w-xl">
              {description}
            </p>
          </div>

        </div>
        </div>
      )}

      {/* CONTAINER WRAPPER 
         We make this 'relative' so the buttons can position themselves 
         specifically against the width of the slide area.
      */}
      <div className="relative mx-auto max-w-[95%] lg:max-w-[75%] xl:max-w-[1200px]">
        {/* --- NAVIGATION BUTTONS --- */}
        {/* Positioned absolutely within the container. 
            z-50 ensures they sit on top of images.
            -translate-x-1/2 pulls them slightly outward to straddle the edge.
        */}
        <div className="absolute top-[40%] md:top-[250px] w-full hidden lg:flex justify-between z-50 pointer-events-none">
          {/* Previous Button - Left Edge */}
          <button className="swiper-button-prev-custom pointer-events-auto w-10 h-10 bg-white rounded-full  flex items-center justify-center text-gray-900 hover:scale-110 transition-transform absolute left-0 -translate-x-1/2">
            <ChevronLeft />
          </button>

          {/* Next Button - Right Edge */}
          <button className="swiper-button-next-custom pointer-events-auto w-10 h-10 bg-white rounded-full  flex items-center justify-center text-gray-900 hover:scale-110 transition-transform absolute right-0 translate-x-1/2">
            <ChevronRight />
          </button>
        </div>

        <div className="md:pb-24 pb-16 relative">
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
              // iPad / Tablet -> stays mobile layout but slightly more slides visible
              768: { slidesPerView: 1.5, spaceBetween: 24, centeredSlides: false },
              1024: { slidesPerView: 2, spaceBetween: 30 },
            }}
            className="!overflow-visible"
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                {({ isActive, isNext }) => (
                  <>
                    {/* --- DESKTOP LAYOUT (Original) --- */}
                    <div
                      className={`
                    hidden lg:block
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
                    <div className="block lg:hidden relative group select-none h-full pt-4">
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
          <div className="swiper-scrollbar-custom h-1 bg-gray-200 mt-10 relative overflow-hidden rounded-full w-[90%] mx-auto lg:hidden">
            {/* Swiper will inject the drag handle here automatically */}
          </div>
        </div>
      </div>
    </section>
  );
};
