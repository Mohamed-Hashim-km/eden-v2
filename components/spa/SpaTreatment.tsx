"use client";
import Link from "next/link";
import React from "react";

const SpaTreatment = () => {
  return (
    <div className="py-16 md:pb-20 md:pt-16">
      <div className="container mx-auto px-4">
        {/* Gift Box Container */}
        <div 
          className="bg-[#636A7D] rounded-xl text-center relative px-6 py-24 md:px-12"
        >
          {/* Content Wrapper (Centered) */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Gift a Spa Treatment
            </h2>
            
            <p className="text-white mb-10 mx-auto max-w-[600px] leading-relaxed">
              Turn your gift into an experience. From calming therapies to rejuvenating rituals, our spa treatments offer indulgence that lasts beyond the moment.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/room/the-ritz-carlton" 
                className="bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-300"
              >
                <span>Get in touch</span>
              </Link>
              
              <Link
                href="#"
                className="border border-white/50 text-white bg-transparent px-8 py-3 rounded-md font-medium hover:bg-white/10 transition-colors duration-300"
              >
                <span>Learn more</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaTreatment;