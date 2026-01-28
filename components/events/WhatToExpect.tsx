"use client";
import React from "react";

const WhatToExpect = () => {
  const services = [
    "Panoramic Views – Enjoy sweeping rooftop views of Karwar’s skyline and coastline.",
    "Flexible Seating – Spaces designed to suit corporate events, social gatherings or private celebrations.",
    "Curated Menus – Delicious, customized dishes crafted to delight your guests.",
    "Private Spaces – Thoughtfully designed areas for private functions and special gatherings.",
    "Professional Support – Our team ensures every detail, including catering, is perfectly taken care of.",
    "Event Decor – Beautifully designed setups to enhance the theme and ambience of your event.",
    "Parking – Convenient and secure parking facilities for all guests.",
    "Guest Rooms – Comfortable accommodations available for guests attending your event.",
  ];

  return (
    <div className="py-16 md:pt-20 md:pb-0">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
            What to Expect
          </h2>
        </div>

        {/* Grid/Flex Section
          Using Flex with wrapping to strictly mimic the 'justify-content-center' 
          behavior of the original Bootstrap code for the last row.
        */}
        <div className="flex flex-wrap justify-center -mx-4">
          {services.map((item, index) => {
            const parts = item.split(" – ");
            const title = parts[0];
            const desc = parts.length > 1 ? parts.slice(1).join(" – ") : "";

            return (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="h-full bg-white border border-gray-300 rounded-md p-8 text-center flex flex-col items-center justify-center  transition-shadow duration-300">
                  {/* Icon Wrapper */}
                  <div className="mb-6 p-3 rounded-full bg-[#F3F5F9] text-[#555]">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="3"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                  </div>

                  <h5 className="text-xl font-semibold mb-3 text-primary">
                    {title}
                  </h5>
                  <p className="text-secondary leading-relaxed">{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WhatToExpect;