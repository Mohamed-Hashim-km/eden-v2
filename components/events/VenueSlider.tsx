"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const customStyles = `
  .swiper-slide {
    transition: opacity 0.5s ease, transform 0.5s ease;
    opacity: 0.4; /* Default: Faded */
  }
  
  /* Active Slide */
  .swiper-slide-active {
    opacity: 1; /* Fully Visible */
  }

  /* HIDE ARROWS when at start/end */
  .custom-prev.swiper-button-disabled,
  .custom-next.swiper-button-disabled {
    opacity: 0;
    cursor: auto;
    pointer-events: none;
  }
`;

export default function VenueSlider() {
  const carouselItems = [
    {
      id: 1,
      imageSrc: "/1.webp",
      title: "The Indoor Hall",
      description:
        "Defined by elegant interiors and ambience, the indoor hall serves as a distinguished venue for celebrations, meetings, and private functions.",
    },
    {
      id: 2,
      imageSrc: "/1.webp",
      title: "The Rooftop Event Space",
      description: "An open-air sanctuary offering panoramic views, perfect for evening soirees and sunset cocktails under the open sky.",
    },
    {
      id: 3,
      imageSrc: "/1.webp",
      title: "The Grand Ballroom",
      description:
        "Our largest venue featuring crystal chandeliers and a spacious dance floor, capable of hosting up to 500 guests for grand weddings.",
    },
    {
      id: 4,
      imageSrc: "/1.webp",
      title: "The Garden Terrace",
      description: "A lush green escape ideal for intimate gatherings and tea parties, surrounded by manicured flora and natural light.",
    },
  ];

  const [currentBg, setCurrentBg] = useState(carouselItems[0].imageSrc);

  return (
    <section
      className="relative w-full py-20 overflow-hidden bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out"
      style={{ backgroundImage: `url('${currentBg}')` }}
    >
      <style>{customStyles}</style>

      {/* Gradient Overlay */}
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/90 pointer-events-none" />

      <div className="relative z-10 w-full">
        {/* Header - Centered */}
        <div className="max-w-[1400px] mx-auto px-6 mb-12">
          <h2 className="text-center text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">Our Venues</h2>
        </div>

        {/* Carousel Container */}
        <div className="relative group w-full">
          {/* LEFT ARROW */}
          <button className="custom-prev absolute left-4 md:left-10 top-1/2 z-20 -translate-y-1/2 bg-white/40 hover:bg-white/60 border border-[#2a2a2a]/30 text-primary  p-4 rounded-full backdrop-blur-sm transition-all duration-300">
            <BiChevronLeft size={28} />
          </button>

          {/* RIGHT ARROW */}
          <button className="custom-next absolute right-4 md:right-10 top-1/2 z-20 -translate-y-1/2 bg-white/40 hover:bg-white/60 border border-[#2a2a2a]/30 text-primary  p-4 rounded-full backdrop-blur-sm transition-all duration-300">
            <BiChevronRight size={28} />
          </button>

          <Swiper
            modules={[Navigation]}
            grabCursor={true}
            loop={false}
            centeredSlides={true}
            centeredSlidesBounds={true}
            onSlideChange={(swiper) => setCurrentBg(carouselItems[swiper.activeIndex].imageSrc)}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.1,
                spaceBetween: 20,
                slidesOffsetBefore: 20,
                slidesOffsetAfter: 20,
              },
              768: {
                slidesPerView: 1.6,
                spaceBetween: 40,
                slidesOffsetBefore: 60,
                slidesOffsetAfter: 60,
              },
              1200: {
                slidesPerView: 1.6,
                spaceBetween: 60,
                slidesOffsetBefore: 150,
                slidesOffsetAfter: 10,
              },
            }}
            className="!pb-12 !overflow-visible"
          >
            {carouselItems.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div className="flex flex-col h-full shadow-2xl rounded-sm overflow-hidden bg-white">
                  {/* Image */}
                  <div className="relative w-full h-[400px]">
                    <img src={item.imageSrc} alt={item.title} className="w-full h-full object-cover" />
                  </div>

                  {/* Content */}
                  <div className="p-10 flex-1 flex flex-col justify-center text-center max-w-xl mx-auto">
                    <h3 className=" text-3xl text-primary  mb-5">{item.title}</h3>
                    <p className="font-sans text-secondary text-base leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
