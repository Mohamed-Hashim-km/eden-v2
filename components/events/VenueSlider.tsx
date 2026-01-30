"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const customStyles = `
  /* =========================================
     DESKTOP STYLES (min-width: 768px)
     ========================================= */
  @media (min-width: 768px) {
    /* --- BASE SLIDE STYLES --- */
    #venue-slider-section .swiper-slide {
      transition: transform 0.5s ease, opacity 0.5s ease;
      opacity: 0.4; 
      height: auto;
      display: flex;
      align-items: center;     
      justify-content: center; 
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
      justify-content: center; 
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(8px);
      transition: background-color 0.4s ease;
      border: 1px solid #ffffff;
    }

    /* --- CONTENT WRAPPERS (NO ANIMATION INITIALLY) --- */
    #venue-slider-section .venue-image-wrapper,
    #venue-slider-section .venue-desc-wrapper {
      max-height: 0;
      opacity: 0;
      overflow: hidden;
    }

    /* --- TITLE STYLES --- */
    #venue-slider-section .venue-title {
      color: #ffffff;
      transition: color 0.2s ease, font-size 0.2s ease;
      font-size: 1.6rem; 
      line-height: 1.3;
      white-space: normal; 
      word-wrap: break-word;
      margin: 0; 
    }

    #venue-slider-section .venue-text-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
      z-index: 20;
      justify-content: center; 
    }

    /* --- LEFT CARD (PREV) --- */
    #venue-slider-section .swiper-slide-prev { opacity: 0.6; }
    
    #venue-slider-section .swiper-slide-prev .venue-card {
      align-items: flex-end; 
      text-align: right;    
    }
    
    #venue-slider-section .swiper-slide-prev .venue-text-container {
      margin-left: auto;
      margin-right: 0;
      max-width: 180px;      
      padding-right: 20px;   
      transform: translateY(-2px); 
    }

    /* --- RIGHT CARD (NEXT) --- */
    #venue-slider-section .swiper-slide-next { opacity: 0.6; }
    
    #venue-slider-section .swiper-slide-next .venue-card {
      align-items: flex-start; 
      text-align: left;       
    }
    
    #venue-slider-section .swiper-slide-next .venue-text-container {
      margin-right: auto;   
      margin-left: 0;
      max-width: 180px;      
      padding-left: 20px;    
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
      border: none;
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

    #venue-slider-section .swiper-slide-active .venue-text-container {
      max-width: 100%;
      margin: 0;
      padding: 0 40px;
      transform: none; 
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
  }

  /* =========================================
     MOBILE STYLES (max-width: 767px)
     ========================================= */
  @media (max-width: 767px) {
    #venue-slider-section .venue-card {
      background: #ffffff;
      /* No border radius or slight radius */
      border: none; 
      height: auto;
      min-height: 450px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding-bottom: 2rem;
      width: 90%; /* Slight inset */
      margin: 0 auto; /* Center in slide */
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    #venue-slider-section .venue-image-wrapper {
      width: 100%;
      height: 250px;
      opacity: 1;
      max-height: none;
    }

    #venue-slider-section .venue-image-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    #venue-slider-section .venue-text-container {
      width: 100%;
      padding: 1.5rem 1rem 0;
    }

    #venue-slider-section .venue-title {
      color: #1a1a1a;
      font-size: 1.75rem;
      margin-bottom: 0.5rem;
      font-family: var(--font-gilda); /* Ensure font matches if valid */
    }

    #venue-slider-section .venue-desc-wrapper {
      opacity: 1;
      max-height: none;
    }
    
    #venue-slider-section .venue-desc-wrapper p {
      font-size: 0.95rem;
      color: #4b5563;
      line-height: 1.5;
    }

    /* Adjust swiper slide connection */
    #venue-slider-section .swiper-slide {
      opacity: 1; /* Always visible */
      transform: none; /* No scaling */
      height: auto;
      display: flex;
      justify-content: center;
    }
    
    /* Hide nav buttons on mobile if desired, or keep them. 
       Image showed card centered. Usually mobile swipes. */
    #venue-slider-section .custom-prev,
    #venue-slider-section .custom-next {
      display: none; 
    }
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
      id: 5,
      imageSrc: "/1.webp",
      title: "The Indoor Hall",
      description:
        "Defined by elegant interiors and ambience, the indoor hall serves as a distinguished venue for celebrations, meetings, and private functions.",
    },
    {
      id: 6,
      imageSrc: "/1.webp",
      title: "The Rooftop Event Space",
      description: "An open-air sanctuary offering panoramic views, perfect for evening soirees and sunset cocktails under the open sky.",
    },
    {
      id: 7,
      imageSrc: "/1.webp",
      title: "The Grand Ballroom",
      description:
        "Our largest venue featuring crystal chandeliers and a spacious dance floor, capable of hosting up to 500 guests for grand weddings.",
    },
    {
      id: 8,
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
          <h2 className="text-center text-4xl md:text-5xl lg:text-6xl text-primary">Our Locations</h2>
        </div>

        {/* Carousel Container */}
        <div className="relative group w-full flex items-center justify-center">
          {/* LEFT ARROW - Added -translate-y-6 to offset swiper padding */}
          <button className="custom-prev absolute left-4 md:left-10 z-50 border-white border p-4 rounded-full backdrop-blur-md transition-all duration-300 -translate-y-6">
            <BiChevronLeft size={32} />
          </button>

          {/* RIGHT ARROW - Added -translate-y-6 to offset swiper padding */}
          <button className="custom-next absolute right-4 md:right-10 z-50 border-white border p-4 rounded-full backdrop-blur-md transition-all duration-300 -translate-y-6">
            <BiChevronRight size={32} />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            grabCursor={true}
            loop={true}
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
            // Note: !pb-12 here adds 3rem (48px) height, so we lifted buttons by half that (1.5rem/24px/translate-y-6)
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
                    <h3 className="venue-title">{item.title}</h3>

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
