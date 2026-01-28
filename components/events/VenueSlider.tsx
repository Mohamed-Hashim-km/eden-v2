"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { BiChevronRight } from 'react-icons/bi';

const venueData = [
  {
    id: 1,
    title: "The Indoor Hall",
    description: "Defined by elegant interiors and ambience, the indoor hall serves as a distinguished venue for celebrations, meetings, and private functions, hosting 80 to 100 guests in comfort.",
    image: "/2.webp"
  },
  {
    id: 2,
    title: "The Rooftop Event Space",
    description: "An open-air experience with panoramic views of the city skyline, perfect for evening cocktail receptions and modern weddings.",
    image: "/3.webp"
  },
  {
    id: 3,
    title: "The Garden Terrace",
    description: "Surrounded by lush greenery and tranquil water features, providing a serene backdrop for intimate gatherings and morning brunches.",
    image: "/4.webp"
  }
];

const VenueSlider = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col items-center justify-center font-serif">
      
      {/* Background Layer with Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 brightness-[0.4]"
        style={{ backgroundImage: `url('/1.webp')` }}
      />
      <div className="absolute inset-0 backdrop-blur-md bg-black/20" />

      {/* Title */}
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-white text-5xl mb-12 font-light"
      >
        Our Venues
      </motion.h2>

      {/* Main Slider Container */}
      <div className="relative z-10 w-full max-w-5xl px-4">
        <Swiper
          modules={[Navigation, Pagination, EffectFade]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next-custom',
          }}
          loop={true}
          className="rounded-lg overflow-visible"
        >
          {venueData.map((venue) => (
            <SwiperSlide key={venue.id}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                {/* Image Section */}
                <div className="w-full h-[450px] overflow-hidden">
                  <img 
                    src={venue.image} 
                    alt={venue.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Content Area */}
                <div className="bg-white w-full py-12 px-10 text-center">
                  <h3 className="text-2xl text-gray-800 mb-4 font-medium italic">
                    {venue.title}
                  </h3>
                  <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-sm">
                    {venue.description}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Button (The right arrow in the image) */}
          <button className="swiper-button-next-custom absolute right-[-60px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 border border-white/50 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors hidden lg:flex">
            <BiChevronRight size={24} strokeWidth={1} />
          </button>
        </Swiper>
      </div>

      {/* Right Side Peeking Label (Decorative) */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none hidden xl:block">
          <p className="text-sm tracking-widest uppercase rotate-0">The Rooftop<br/>Event Space</p>
      </div>

    </div>
  );
};

export default VenueSlider;