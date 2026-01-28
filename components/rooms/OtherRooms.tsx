"use client";
import React from "react";
import OtherRoomsCard from "./OtherRoomsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

/**
 * @param {Object} props
 * @param {any} props.data
 * @param {string} [props.title]
 * @param {string} [props.description]
 */
function OtherRooms({ data, title, description }) {
  return (
    <>
      {/* blog style */}
      <div className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center text-center mb-12">
            <div className="w-full max-w-2xl wow fadeInUp" data-wow-delay=".3s">
              <div className="flex flex-col items-center">
                {title && <span className="text-4xl md:text-5xl lg:text-6xl  text-primary mb-4 leading-tight  block">{title}</span>}
                {description && <h2 className="  text-secondary leading-tight">{description}</h2>}
              </div>
            </div>
          </div>
          {/* row end */}
          <div className="w-full">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={32}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="mySwiper"
            >
              {data.map((item: any, index: number) => {
                return (
                  <SwiperSlide key={index} className="!h-auto flex">
                    <div className="w-full ">
                      <OtherRoomsCard
                        Slug={item.slug}
                        Title={item.title}
                        Img={item.image}
                        Category={item.category}
                        AuthorImg={item.authorImg}
                        Author={item.author}
                        Description={item.description}
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
      {/* blog style end */}
    </>
  );
}

export default OtherRooms;
