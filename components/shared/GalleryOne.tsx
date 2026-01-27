"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { Button } from "../ui/Button";

// Import Swiper styles
import "swiper/css";

// Image data


function GalleryOne({ title, description, cta,galleryImages }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="py-20 bg-white">
        
        {/* 1. Header Section: Kept inside a container for centering */}
        <div className="container mx-auto px-4">
          <div className="flex max-w-3xl mx-auto flex-col items-center text-center mb-12">
            {title && (
              <h2 className="text-4xl leading-tight md:text-5xl lg:text-6xl text-primary mb-4">
                {title}
              </h2>
            )}

            {description && (
              <p className="text-secondary text-lg max-w-2xl mb-8">
                {description}
              </p>
            )}

            {cta && (
              <Button variant="tertiary">
                {cta}
              </Button>
            )}
          </div>
        </div>

        {/* 2. Gallery Carousel: OUTSIDE the container to take full width */}
        <div className="w-full">
          <Swiper
            modules={[Autoplay]}
            className="overflow-visible"
            slidesPerView={1}
            spaceBetween={0} // Removed gap for seamless full width look, or set to 24 if you want gaps
            loop={true}
            speed={1000}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              480: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5.5 }, // 5.5 shows part of the next image to encourage scrolling
            }}
          >
            {galleryImages.map((imgSrc, index) => (
              <SwiperSlide key={index}>
                {/* Added padding wrapper if you want space between images, else remove p-3 */}
                <div className="p-3 h-full"> 
                  <div
                    className="relative group overflow-hidden  cursor-pointer h-full"
                    onClick={() => openModal(imgSrc)}
                  >
                    {/* Image Container */}
                    <div className="relative h-80 w-full">
                      <Image
                        src={imgSrc}
                        alt={`Gallery Image ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Modal Logic (Assuming Modal component is imported/handled elsewhere or strictly logic here) */}
      {/* <Modal isOpen={isModalOpen} closeModal={closeModal} imageSrc={modalImage} /> */}
    </>
  );
}

export default GalleryOne;