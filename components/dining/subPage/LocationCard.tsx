"use client";

import React from "react";
import Image from "next/image";

const FeatureSection = () => {
  return (
    <section className="bg-white py-10 md:pb-48 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col lg:flex-row items-center relative">
          
          {/* Beige Background Box 
              CHANGED: Moved from 'right-0' to 'left-0' so it sits behind the text on the left.
          */}
          <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[90%] h-[550px] bg-[#E2BA86] z-0" />

          {/* Main Grid Content */}
          <div className="w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            
            {/* Content Section (Text)
               CHANGED: Moved this block ABOVE the Image block so it appears on the Left.
               CHANGED: Adjusted padding (swapped pl/pr) so it looks good on the left side.
            */}
            <div className="lg:col-span-5 bg-[#E5CAA4] lg:bg-transparent p-8 md:p-12 lg:pl-16 xl:pr-24">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl text-[#001446] mb-6">
                  Explore Our Flavours
                </h2>

                {/* Divider */}
                <div className="w-40 h-[1px] bg-[#65676B] mb-8"></div>

                <p className="text-[#65676B] text-lg leading-relaxed mb-10 font-light">
                  Elevate your evenings with exclusive dinner offerings, including
                  curated set menus and dining credits redeemable across our
                  restaurants.
                </p>

                <button className="bg-[#001446] text-[#E2BA86] px-10 py-4 text-sm tracking-widest uppercase font-semibold hover:opacity-90 transition-opacity">
                  Explore
                </button>
              </div>
            </div>

            {/* Image Section 
               CHANGED: Moved this block BELOW the Text block so it appears on the Right.
            */}
            <div className="lg:col-span-7 relative lg:top-20 h-[300px] md:h-[450px] lg:h-[600px] w-full">
              <Image
                src="/1.webp"
                alt="Exclusive dinner setting"
                fill
                className="object-cover"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;