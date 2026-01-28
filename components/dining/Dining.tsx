"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import { Button } from "../ui/Button";

const Dining = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Layout Wrapper */}
        <div className="relative flex flex-col lg:block">
          
          {/* --- 1. Background Image Area (Left Side) --- */}
          {/* - w-full on mobile, w-[80%] on desktop to leave room on the right
             - This creates the "base" for the card to overlap 
          */}
          <div className="relative w-full lg:w-[80%] h-[400px] lg:h-[600px] bg-slate-100 rounded-xl overflow-hidden flex items-center justify-center">
            
            {/* Placeholder Content (Replace with <Image /> in production) */}
            <div className="text-slate-300 flex flex-col items-center">
             <Image src="/1.webp" alt="Dining" fill />
            </div>
          </div>

          {/* --- 2. Floating Content Card (Right Side) --- */}
          {/* - Position: Absolute right on desktop to anchor it
             - Shadow: Heavy shadow to create the 'floating' depth
             - Z-Index: Ensures it sits on top of the image
          */}
          <div className="relative z-10 w-full lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:max-w-xl mt-[-40px] lg:mt-0 px-4 lg:px-0">
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl border border-gray-50">
              
              {/* Header */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
                Dining
              </h2>
              
              {/* Description */}
              <p className="text-secondary mb-8 leading-relaxed text-base md:text-lg">
              At Eden, dining is an experience shaped by flavour, atmosphere, and thoughtful hospitality. Across our three distinctive restaurants, Hotel Tulip, Oyster Bay and Food & Forest, we offer a range of settings and cuisines to suit every mood and moment.</p>
              
              {/* Button matching the blue-grey in image */}
              <Link 
                href="#" 
              >
                <Button variant="tertiary" className="font-semibold text-sm tracking-wide">Book Now</Button>
                
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Dining;