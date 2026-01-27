"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Icons
const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0Z"
      fill="#D4AF37"
    />
  </svg>
);

const ChevronLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 18L9 12L15 6" stroke="#1B1B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18L15 12L9 6" stroke="#1B1B1B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface Review {
  text: string;
  author: string;
  rating: number;
}

interface TestimonialSectionProps {
  title: string;
  subtitle: string;
  reviews: Review[];
}

export const TestimonialSection: React.FC<TestimonialSectionProps> = ({ title, subtitle, reviews }) => {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const averageRating = Math.round(reviews.reduce((acc, review) => acc + review.rating, 0) / (reviews.length || 1));

  const progress = ((activeIndex + 1) / reviews.length) * 100;

  return (
    <section className="py-20 md:py-32 bg-[#FFF9F0]">
      <div className=" ml-auto pl-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Column: Content */}
          <div className="lg:w-[50%] flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl  text-primary mb-6 leading-tight">{title}</h2>
            <p className="text-secondary text-lg mb-12 leading-relaxed">{subtitle}</p>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl  text-primary font-bold">{averageRating} Stars</span>
              </div>
              <p className="text-secondary text-sm mb-4">Average Rating by Past Guests</p>
              <div className="flex gap-1">
                {[...Array(averageRating)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Swiper */}
          <div className="lg:w-2/3 min-w-0 relative">
            {/* min-w-0 is crucial for flex children containing swiper */}
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1.2}
              breakpoints={{
                640: { slidesPerView: 1.5 },
                1024: { slidesPerView: 1.5 },
              }}
              navigation={{
                prevEl,
                nextEl,
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="w-full pb-12"
            >
              {reviews.map((review, index) => (
                <SwiperSlide key={index} className="h-auto">
                  <div className="border border-[#D2C5B3] p-10 h-full flex flex-col justify-between min-h-[330px] bg-transparent transition-all duration-300 hover:shadow-lg">
                    <p className="text-[#65676B] text-lg leading-relaxed mb-6">“{review.text}”</p>
                    <p className="text-[#1B1B1B] font-medium text-lg">- {review.author}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Controls and Progress Bar container */}
            <div className="flex items-center justify-between mt-8 relative pl-0 ">
              {/* Custom Progress Bar or Just spacer if using swiper pagination? 
                    Design shows a line. Swiper pagination can be customized or we add a static line or specialized component.
                    For now, focusing on arrows as per design screenshot on the right.
                    The design shows a progress bar on the left of arrows.
                */}
              <div className="h-1 bg-white grow mr-8 rounded-full overflow-hidden">
                <div className="h-full bg-[#D4AF37] rounded-full transition-all duration-300 ease-out" style={{ width: `${progress}%` }} />
              </div>

              <div className="flex gap-4">
                <button
                  ref={setPrevEl}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft />
                </button>
                <button
                  ref={setNextEl}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
