"use client";
import React, { useEffect, useState } from 'react';
import { Button } from '../ui/Button';

// import Link from 'next/link'; // Unused in provided snippet, but you can keep if needed

function GoldenLeafe() {
  

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <>
      <div className="py-20 lg:pt-28 lg:pb-10 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left Content Section */}
            <div className="w-full lg:w-1/2 space-y-6">
             
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
                The Golden Leaf Spa
              </h2>
              
              <p className="text-secondary text-lg leading-relaxed">
                From relaxation therapies to beauty and grooming, The Golden Leaf Spa is designed for complete everyday luxury.
              </p>
              
              <Button
               variant='secondary'
              >
                <span>Learn more</span>
              </Button>
            </div>

            {/* Right Image Section */}
            <div className="w-full lg:w-[40%]">
              <div className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden">
                {/* The 'rellax' class is preserved for the JS library. 
                  scale-110 is added to prevent whitespace when the image moves.
                */}
                <img
                  src="/1.webp"
                  className="rellax w-full h-full object-cover transform scale-110"
                  alt="The Golden Leaf Spa"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default GoldenLeafe;