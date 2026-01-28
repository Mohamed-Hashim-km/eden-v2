"use client";
import React from "react";
// import Link from "next/link"; // Kept if you need it later, but unused in this specific snippet

const WhatToExpect = ({ title = "Our Venues", description = "", venueData }) => {
  // Default data matches your original hardcoded content
  const dataToRender = venueData || [
    {
      id: 1,
      image: "assets/images/insta/2.webp",
      title: "The Indoor Hall",
      description:
        "Defined by elegant interiors and ambience, the indoor hall serves as a distinguished venue for celebrations, meetings, and private functions, hosting 80 to 100 guests in comfort",
    },
    {
      id: 2,
      image: "assets/images/insta/2.webp",
      title: "The Rooftop Event Space",
      description:
        "For grander celebrations, the open-air rooftop venue offers a more expansive setting with breathtaking views of Karwar, making it ideal for larger events with a capacity of 100 to 140 guests.",
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex justify-center mb-16">
          <div className="w-full lg:w-2/3 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary leading-tight mb-5">
              {title}
            </h2>
            {description && (
              <p className="text-secondary mb-4">{description}</p>
            )}
          </div>
        </div>

        {/* Grid Section */}
        <div className="flex flex-wrap justify-center -mx-4">
          {dataToRender.map((item, index) => (
            <div key={index} className="w-full lg:w-1/2 px-4 mb-8">
              <div className="relative h-[500px] overflow-hidden rounded-xl group">
                
                {/* Background Image */}
                <div
                  className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-500"
                  style={{
                    backgroundImage: `url('${item.image}')`,
                  }}
                ></div>

                {/* Gradient Overlay 
                    Using arbitrary value to match your exact specific CSS gradient
                */}
                <div 
                  className="absolute inset-0 w-full h-full"
                  style={{
                    background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 50%, rgba(30,32,38,0.95) 100%)"
                  }}
                ></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 z-10">
                  <h3 className=" text-2xl md:text-4xl  text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatToExpect;