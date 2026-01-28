"use client";

import React, { useState } from "react";
import Image from "next/image";

const overviewData = {
  tulip: [
    { id: 1, title: "Dish #1", image: "/1.webp" },
    { id: 2, title: "Dish #2", image: "/1.webp" },
    { id: 3, title: "Dish #3", image: "/1.webp" },
  ],
  oyster: [
    { id: 1, title: "Seafood #1", image: "/1.webp" },
    { id: 2, title: "Seafood #2", image: "/1.webp" },
    { id: 3, title: "Seafood #3", image: "/1.webp" },
  ],
  forest: [
    { id: 1, title: "Nature #1", image: "/1.webp" },
    { id: 2, title: "Nature #2", image: "/1.webp" },
    { id: 3, title: "Nature #3", image: "/1.webp" },
  ],
};

function Overview() {
  const [activeTab, setActiveTab] = useState("tulip");

  const getTabLabel = (key) => {
    switch (key) {
      case "tulip":
        return "Tulip";
      case "oyster":
        return "Oyster Bay";
      case "forest":
        return "Food & Forest";
      default:
        return key;
    }
  };

  return (
    <section className="py-16 md:pb-24 md:pt-0 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* --- Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Serif font matching the "World of Dining" image */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary leading-tight mb-6">A World of Dining</h2>
          <p className="text-secondary text-lg font-light">
            Discover diverse flavours and memorable dining experiences across our signature restaurants.
          </p>
        </div>

        {/* --- Tabs --- */}
        {/* Flex container to center the tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex w-full md:w-full lg:w-full border-b border-gray-200">
            {["tulip", "oyster", "forest"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  flex-1 pb-4 text-lg font-semibold tracking-wide transition-all duration-300 relative
                  ${
                    activeTab === tab
                      ? "text-primary" // Active text color
                      : "text-secondary hover:text-secondary/50" // Inactive text color
                  }
                `}
              >
                {getTabLabel(tab)}

                {/* Active Indicator Line - Matches the black underline in image */}
                {activeTab === tab && <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-gray-800" />}
              </button>
            ))}
          </div>
        </div>

        {/* --- Card Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {overviewData[activeTab].map((item) => (
            <div key={item.id} className="relative h-[450px] w-full rounded-lg overflow-hidden group">
              {/* Image Layer */}
              <div className="absolute inset-0 bg-slate-400">
                {/* Note: I added 'bg-slate-400' as a fallback color. 
                    The gradient overlay below ensures the text is readable 
                    and matches the blue-grey look of the image.
                 */}
                <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>

              {/* Gradient Overlay Layer - Matches the blue/grey fade in screenshot */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-700/90 via-slate-600/50 to-slate-500/20 mix-blend-multiply" /> */}

              {/* Text Content - Serif font for the "Dish #1" style */}
              <div className="absolute top-10 left-8 right-8 z-10">
                <h3 className="text-white text-4xl  tracking-wide">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Overview;
