"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

interface Amenity {
  id: number | string;
  title: string;
  image: string;
  description?: string;
}

interface CommonAmenitiesProps {
  eyebrow?: string;
  title?: string;
  items: Amenity[];
}

export function CommonAmenities({
  eyebrow = "Common Amenities",
  title = "Refined Dining, Wellness & Banquet Experiences",
  items,
}: CommonAmenitiesProps) {
  return (
    <section className="container mx-auto pt-12 px-4 md:py-24">
      <div className="flex flex-col gap-6 md:gap-12">
        <div className="max-w-3xl">
          <span className="text-primary tracking-wide  md:text-lg font-semibold mb-2 md:mb-4 block">{eyebrow}</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary leading-tight  text-primary">{title}</h2>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.id} className="group">
              <div className="relative aspect-4/3 w-full overflow-hidden mb-6">
                {/* Desktop Image */}
                <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="text-xl md:text-2xl  text-primary leading-tight pr-4">{item.title}</h3>
              {item.description && <p className="text-secondary text-sm md:text-base mt-2 leading-relaxed">{item.description}</p>}
            </div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden relative pb-5 md:pb-12">
          <Swiper
            modules={[Scrollbar, Autoplay]}
            spaceBetween={16}
            slidesPerView={1.2}
            centeredSlides={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            initialSlide={1}
            scrollbar={{
              draggable: true,
              hide: false,
              el: ".swiper-scrollbar",
            }}
            className="w-full pb-12!"
          >
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col">
                  <div className="relative aspect-3/4 w-full overflow-hidden mb-4">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                  <h3 className="text-xl  text-primary leading-tight">{item.title}</h3>
                  {item.description && <p className="text-secondary text-sm md:text-base mt-2 leading-relaxed">{item.description}</p>}
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-scrollbar mx-auto! w-[70%]! static! h-1! mt-10! bg-gray-200! md:hidden!">
              <div className="swiper-scrollbar-drag bg-primary!"></div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
