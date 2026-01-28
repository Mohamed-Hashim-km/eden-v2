'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";


import { Pagination, Autoplay } from "swiper/modules";
import { Button } from "../ui/Button";

export interface ContentGridItem {
  image: string;
  title: string;
  description: string;
  slug: string;
  buttonText?: string;
}

interface ContentCarouselProps {
  title: string;
  subtitle?: string;
  description?: string;
  items: ContentGridItem[];
  className?: string;
  backgroundColor?: string;
}

export const ContentGridCarousel: React.FC<ContentCarouselProps> = ({
  title,
  description,
  items,
  className = "",
  backgroundColor = "",
}) => {
  return (
    <section className={`py-16 md:pt-32 md:pb-24 ${backgroundColor} ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex justify-center text-center mb-12">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary leading-tight mb-6 relative inline-block">
              {title}
              
            </h2>
            {description && (
              <p className=" text-secondary text-base md:text-lg  leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Swiper Section */}
        <div className="w-full relative px-2 md:px-4">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 32,
              },
            }}
            className="pb-12 !h-auto"
          >
            {items.map((item, index) => (
              <SwiperSlide key={index} className="!h-auto">
                <div className="flex flex-col h-full group">
                  
                  {/* Image Container */}
                  <Link href={item.slug} className="block relative overflow-hidden mb-6 aspect-[4/3] w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    />
                  </Link>

                  {/* Content */}
                  <div className="flex flex-col flex-grow">
                    <Link href={item.slug}>
                      <h3 className="text-xl text-primary font-medium mb-3  transition-colors">
                        {item.title}
                      </h3>
                    </Link>
                    
                    <p className="text-secondary text-sm leading-relaxed mb-6 flex-grow">
                      {item.description}
                    </p>

                    {/* Button Restored Here */}
                    <div className="mt-auto">
                      <Link href={item.slug}>
                        <Button variant="tertiary">
                          {item.buttonText || "EXPLORE"}
                        </Button>
                      </Link>
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
};