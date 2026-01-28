"use client";

import React from "react";
import Link from "next/link";
import { Button } from "../ui/Button";
import Image from "next/image";

// Helper component for the placeholder icon within the images
const PlaceholderIcon = ({ className = "" }) => (
  <div className={`text-slate-300 ${className}`}>
    <svg
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <circle cx="8.5" cy="8.5" r="1.5"></circle>
      <polyline points="21 15 16 10 5 21"></polyline>
    </svg>
  </div>
);

const DiningPhilosophy = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* --- Left Column: Text Content --- */}
          {/* lg:w-5/12: Takes up slightly less than half width on desktop */}
          <div className="w-full lg:w-5/12 flex flex-col items-start text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary  mb-6 tracking-tight">
             The Eden Dining Philosophy
            </h2>
            
            <p className="text-secondary text-lg mb-10 leading-relaxed">
             Our dining is rooted in quality ingredients, thoughtful cooking and warm hospitality, creating comforting and flavourful food.
            </p>
            
            {/* Outline Button */}
            <Link
              href="#"
            >
                <Button variant="tertiary">Read More</Button>
            </Link>
          </div>

          {/* --- Right Column: Overlapping Images --- */}
          {/* lg:w-7/12: Gives images more space. 
              h-[450px] lg:h-[600px]: Sets container height for absolute positioning. 
          */}
          <div className="w-full lg:w-7/12 relative h-[450px] md:h-[550px] lg:h-[650px] mt-8 lg:mt-0">
            
            {/* 1. Bottom Image (Back Layer) */}
            {/* Positioned bottom-left. Lower z-index. */}
            <div className="absolute left-4 bottom-4 lg:left-0 lg:bottom-0 w-[75%] h-[75%]  rounded-xl flex items-center justify-center overflow-hidden z-0">
               {/* Replace this div with <Image ... /> for real photo */}
               <Image src="/1.webp" alt="Dining" fill />
            </div>

            {/* 2. Top Image (Front Layer) */}
            {/* Positioned top-right. Higher z-index (z-10). 
                Has a heavy shadow to create the "pop" effect. */}
            <div className="absolute right-4 top-4 lg:right-8 lg:top-8 w-[75%] h-[75%]  rounded-xl flex items-center justify-center overflow-hidden  z-10 ">
               {/* Replace this div with <Image ... /> for real photo */}
               <Image src="/1.webp" alt="Dining" fill />
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
};

export default DiningPhilosophy;