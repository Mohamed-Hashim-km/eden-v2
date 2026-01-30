"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { Button } from "@/components/ui/Button";

interface DiningOption {
  id?: string | number;
  title: string;
  image: string;
  description?: string;
  link?: string;
}

interface OtherDiningOptionsProps {
  data: DiningOption[];
  title?: string;
}

export function OtherDiningOptions({ data, title }: OtherDiningOptionsProps) {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Calculate thumb width dynamically based on number of items
  const thumbWidthPercent = data.length > 0 ? 100 / data.length : 100;

  return (
    <section className="py-16 md:py-24 bg-white">
      {/* Optional Title - Kept in container for alignment */}
      {title && (
        <div className="container mx-auto px-4 md:px-6 mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-5xl text-primary ">{title}</h2>
        </div>
      )}

      {/* Swiper Container - Full Width */}
      <div className="flex flex-col gap-8 w-full">
        <Swiper
          modules={[Autoplay]}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          spaceBetween={16}
          slidesPerView={1.15}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1.15, spaceBetween: 16, centeredSlides: true },
            640: { slidesPerView: 1.1, spaceBetween: 20, centeredSlides: true },
            768: { slidesPerView: 1.5, spaceBetween: 24, centeredSlides: false },
            1024: { slidesPerView: 4.1, spaceBetween: 10, centeredSlides: false },
          }}
          className="w-full"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index} className="h-auto border-r border-white/10 last:border-0">
              {/* Added border for separation since spaceBetween is 0, or restore spaceBetween if desired. 
                   User said "full width", often implies connected cards. 
                   I will stick to keeping the spacing for now as it looks cleaner for room cards, 
                   but remove the container padding.
               */}
              <div className="relative h-[450px] w-full group overflow-hidden cursor-pointer">
                {/* Image */}
                <div className="absolute inset-0">
                  <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col items-start">
                  <h3 className="text-white  text-2xl md:text-3xl mb-4 leading-tight">{item.title}</h3>

                  <div className="">
                    <Link href={item.link || "#"}>
                      <Button variant="outline">Learn More</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Scrollbar */}
        <div className="flex justify-center w-full mt-4">
          <div
            className="relative w-full max-w-[300px] h-[4px] bg-[#E5E5E5] shrink-0 overflow-hidden cursor-pointer"
            onClick={(e) => {
              if (!swiperInstance) return;
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              const clickPercent = clickX / rect.width;
              const targetSlide = Math.floor(clickPercent * data.length);
              swiperInstance.slideToLoop(targetSlide);
            }}
          >
            <motion.div
              className="absolute top-0 bottom-0 bg-[#001446]"
              animate={{
                left: `${(activeIndex / data.length) * 100}%`,
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
    </section>
  );
}
