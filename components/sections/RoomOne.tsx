"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
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
function RoomOne({ className }) {
  return (
    // Used pb-20 from reference, minimal padding
    <section className={`pb-5 md:pb-20 bg-white ${className}`}>
      
      {/* HEADER SECTION: Keep inside container for alignment */}
      <div className="container mx-auto px-4 mb-16">
        <div className="flex flex-col lg:flex-row justify-between items-center  gap-6">
          <div className="lg:w-1/2">
            {/* Reference Heading Size */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-primary">
             Spaces Crafted For Mindful Living
            </h2>
          </div>
          <div className="lg:w-1/3">
             {/* Reference Body Font */}
            <p className="text-secondary text-base">
           Hotel Eden offers rooms from Premium to Presidential, each blending spacious design with thoughtful amenities for a truly relaxing stay.
            </p>
          </div>
        </div>
      </div>

      {/* SWIPER SECTION: No Container, Full Width, Basic Padding */}
      <div className="w-full px-4">
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={false}
          speed={1000}
          pagination={{ 
            el: ".rts-pagination", 
            clickable: true 
          }}
          breakpoints={{
            575: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 2.5 }, // Shows part of the next slide
            1200: { slidesPerView: 3 },
            1400: { slidesPerView: 4}, // Shows part of the next slide on large screens
          }}
          className="!pb-12" // Space for pagination dots
        >
          {roomTypes.length > 0 ? (
            roomTypes.map((data) => (
                <SwiperSlide key={data.slug}>
                  <RoomCardOne
                    Slug={data.slug}
                    Img={data.image}
                    Title={data.title}
                
                    Description={data.description}
                  />
                </SwiperSlide>
              ))
          ) : (
            <p className="text-secondary">No rooms available</p>
          )}

          {/* Pagination Dots */}
          <div className="rts-pagination flex justify-center mt-4 gap-2" />
        </Swiper>
      </div>

      {/* Swiper Dot Styles (Optional if not in your global css) */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: #cbd5e1;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background-color: #000; /* Adjust to your primary color */
          width: 10px;
          border-radius: 5px;
          transition: width 0.3s ease;
        }
      `}</style>
    </section>
  );
}

export default RoomOne;