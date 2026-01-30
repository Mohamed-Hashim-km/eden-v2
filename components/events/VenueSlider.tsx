"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const customStyles = `
  /* --- BASE SLIDE STYLES --- */
  #venue-slider-section .swiper-slide {
    transition: transform 0.5s ease, opacity 0.5s ease;
    opacity: 0.4; 
    height: auto;
    display: flex;
    align-items: center;     /* Vertically Center the card in the slide */
    justify-content: center; /* Horizontally Center the card */
  }

  /* --- CARD STYLES --- */
  #venue-slider-section .venue-card {
    width: 100%;
    height: 600px; /* Fixed Height */
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    
    /* CRITICAL: Center content vertically so text lines up with buttons */
    justify-content: center; 
    
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(8px);
    transition: background-color 0.4s ease;
  }

  /* --- CONTENT WRAPPERS (NO ANIMATION) --- */
  #venue-slider-section .venue-image-wrapper,
  #venue-slider-section .venue-desc-wrapper {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
  }

  /* --- TITLE STYLES --- */
  #venue-slider-section .venue-title {
    color: #1a1a1a;
    transition: color 0.2s ease, font-size 0.2s ease;
    font-size: 1.6rem; 
    line-height: 1.3;
    white-space: normal; 
    word-wrap: break-word;
    margin: 0; /* Remove default margins to ensure perfect centering */
  }

  #venue-slider-section .venue-text-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 20;
    justify-content: center; /* Ensure text block is centered vertically */
  }

  /* --- LEFT CARD (PREV) --- */
  #venue-slider-section .swiper-slide-prev { opacity: 0.6; }
  
  #venue-slider-section .swiper-slide-prev .venue-card {
    align-items: flex-end; /* Push content right */
    text-align: right;    
  }
  
  #venue-slider-section .swiper-slide-prev .venue-text-container {
    margin-left: auto;
    margin-right: 0;
    max-width: 180px;      /* Force Wrap */
    padding-right: 20px;   /* Gap from center card */
    
    /* Slight adjustment if visual center looks off due to line-height */
    transform: translateY(-2px); 
  }

  /* --- RIGHT CARD (NEXT) --- */
  #venue-slider-section .swiper-slide-next { opacity: 0.6; }
  
  #venue-slider-section .swiper-slide-next .venue-card {
    align-items: flex-start; /* Push content left */
    text-align: left;       
  }
  
  #venue-slider-section .swiper-slide-next .venue-text-container {
    margin-right: auto;   
    margin-left: 0;
    max-width: 180px;      /* Force Wrap */
    padding-left: 20px;    /* Gap from center card */
    
    /* Slight adjustment if visual center looks off due to line-height */
    transform: translateY(-2px);
  }

  /* --- ACTIVE SLIDE (CENTER) --- */
  #venue-slider-section .swiper-slide-active {
    opacity: 1;
    z-index: 10;
    transform: scale(1);
  }

  #venue-slider-section .swiper-slide-active .venue-card {
    background: #ffffff;
    box-shadow: 0 20px 50px rgba(0,0,0,0.3);
    
    /* Reset Alignment for Active Card */
    justify-content: flex-start; 
    align-items: center; 
    text-align: center;
  }

  /* SHOW CONTENT INSTANTLY */
  #venue-slider-section .swiper-slide-active .venue-image-wrapper {
    max-height: 400px;
    opacity: 1;
  }

  #venue-slider-section .swiper-slide-active .venue-desc-wrapper {
    max-height: 200px;
    opacity: 1;
    padding-bottom: 2.5rem;
  }

  /* Reset Title Width for Active */
  #venue-slider-section .swiper-slide-active .venue-text-container {
    max-width: 100%;
    margin: 0;
    padding: 0 40px;
    transform: none; /* Remove centering tweak */
  }

  #venue-slider-section .swiper-slide-active .venue-title {
    color: #1a1a1a;
    font-size: 2.5rem;
    padding-top: 1.5rem;
  }

  /* HIDE BUTTONS IF DISABLED */
  #venue-slider-section .custom-prev.swiper-button-disabled,
  #venue-slider-section .custom-next.swiper-button-disabled {
    opacity: 0;
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
      id="venue-slider-section"
      className="relative w-full py-20 overflow-hidden bg-cover bg-center bg-no-repeat transition-all duration-700 ease-in-out"
      style={{ backgroundImage: `url('${currentBg}')` }}
    >
      <style>{customStyles}</style>

      {/* White Overlay */}
      <div className="absolute inset-0 bg-white/80 pointer-events-none transition-all duration-700" />

      <div className="relative z-10 w-full">
        {/* Header */}
        <div className="max-w-[1400px] mx-auto px-6 mb-12">
          <h2 className="text-center text-5xl md:text-6xl text-zinc-900 drop-shadow-md font-serif">Our Locations</h2>
        </div>

        {/* Carousel Container */}
        {/* Added flex and items-center to this wrapper to ensure the 
            arrows align perfectly with the center of the swiper track 
        */}
        <div className="relative group w-full flex items-center justify-center">
          {/* LEFT ARROW - Aligned to Center */}
          <button className="custom-prev absolute left-4 md:left-10 z-50 bg-zinc-900/5 hover:bg-zinc-900/10 border border-zinc-900/10 text-zinc-900 p-4 rounded-full backdrop-blur-md transition-all duration-300">
            <BiChevronLeft size={32} />
          </button>

          {/* RIGHT ARROW - Aligned to Center */}
          <button className="custom-next absolute right-4 md:right-10 z-50 bg-zinc-900/5 hover:bg-zinc-900/10 border border-zinc-900/10 text-zinc-900 p-4 rounded-full backdrop-blur-md transition-all duration-300">
            <BiChevronRight size={32} />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            speed={600}
            centeredSlides={true}
            slidesPerView={1.8}
            spaceBetween={60}
            onSlideChange={(swiper) => setCurrentBg(carouselItems[swiper.realIndex].imageSrc)}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            breakpoints={{
              0: { slidesPerView: 1.1, spaceBetween: 20 },
              768: { slidesPerView: 1.5, spaceBetween: 20 },
              1024: { slidesPerView: 1.8, spaceBetween: 20 },
            }}
            className="!pb-12 !overflow-visible w-full"
          >
            {carouselItems.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div className="venue-card">
                  {/* Image (Hidden on Side) */}
                  <div className="venue-image-wrapper w-full">
                    <div className="w-full h-[400px]">
                      <img src={item.imageSrc} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                  </div>

                  {/* Text Container */}
                  <div className="venue-text-container">
                    <h3 className="venue-title font-serif">{item.title}</h3>

                    {/* Description (Hidden on Side) */}
                    <div className="venue-desc-wrapper">
                      <div className="pt-4 px-10">
                        <p className="font-sans text-gray-600 text-base leading-relaxed">{item.description}</p>
                      </div>
                    </div>
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
