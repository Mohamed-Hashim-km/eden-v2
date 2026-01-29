"use client";

import React from "react";

const PopularFacilities = ({ title, subtitle, description, facilities }) => {
  // Logic: Check if the remainder is 3 when divided by 5 (the column count for lg screens)
  const isThreeItemsInLastRow = facilities.length % 5 === 3;

  return (
    <section className="pt-16 pb-2 md:py-24 bg-[#FFF9F0]">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex justify-center text-center mb-12">
          <div className="w-full max-w-xl">
            <h2 className="block text-4xl md:text-5xl lg:text-6xl text-primary leading-tight mb-4">
              {title}
            </h2>
            {subtitle && (
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary leading-tight mb-6">
                {subtitle}
              </h2>
            )}
            <p className="max-w-xl text-secondary text-base md:text-lg leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Facilities Grid */}
        <div
          className={`flex flex-wrap gap-4 mb-12 
            justify-start 
            ${isThreeItemsInLastRow ? "lg:justify-center" : "lg:justify-start"}
          `}
        >
          {facilities.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 flex-none w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(20%-1rem)]"
            >
              <span className="text-2xl text-primary">{item.icon}</span>
              <span className="font-medium text-primary text-nowrap">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularFacilities;