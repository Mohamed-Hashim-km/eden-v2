"use client";
import React from "react";

const CelebrationsList = () => {
  const events = [
    "Haldi & Pre-wedding Ceremonies",
    "Birthdays & Anniversaries",
    "Engagements & Receptions",
    "Baby Showers & Naming Ceremonies",
    "First Holy Communion",
    "Family Get-Togethers & Private Parties",
    "Conferences, Seminars & Business Meetings",
    "Product Launches & Corporate Events",
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
            Celebrations & Events We Host
          </h2>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <div key={index} className="w-full">
              <div className="bg-[#F9F9F9] rounded-md p-8 h-full flex flex-col items-center justify-center text-center">
                {/* Icon Wrapper */}
                <div className="mb-3 text-[#C89D6C]">
                  {/* Icon placeholder maintained from original */}
                </div>
                <h6 className="text-xl font-medium  text-primary">
                  {event}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CelebrationsList;