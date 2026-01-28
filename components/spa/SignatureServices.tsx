"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import RoomCardOne from "../sections/RoomCardOne";




const posts=[
  {
    id:1,
    image:"/1.webp",
    title:"Aroma Therapy",
    
  },
  {
    id:2,
    image:"/1.webp",
    title:"Signature Massages",
    
  },
  {
    id:3,
    image:"/1.webp",
    title:"Rejuvenation Therapy",
    
  },
  {
    id:4,
    image:"/1.webp",
    title:"Beauty & Grooming ",
    
  },
]
function SignatureServices({ className }) {
  return (
    // Used pb-20 from reference, minimal padding
    <section className={`py-20 bg-white ${className}`}>
      
      {/* HEADER SECTION: Keep inside container for alignment */}
      <div className="container mx-auto px-4 mb-16">
        <div className="flex flex-col lg:flex-row justify-between items-center  gap-6">
          <div className="lg:w-1/2">
            {/* Reference Heading Size */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-primary">
           Signature Services
            </h2>
          </div>
          <div className="lg:w-1/3">
             {/* Reference Body Font */}
            <p className="text-secondary text-base">
          A glimpse into our serene spaces, soothing treatments, and the peaceful atmosphere designed for pure relaxation.</p>
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
          {posts.length > 0 ? (
            posts.map((data) => (
                <SwiperSlide key={data.id}>
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

export default SignatureServices;