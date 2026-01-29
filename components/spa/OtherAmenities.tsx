"use client";
import { Butcherman } from "next/font/google";
import React, { useState } from "react";
import { Button } from "../ui/Button";
// Ensure these paths are correct for your project


const OtherAmenities = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <>
      <div className="pt-10  pb-0">
        <div className="container mx-auto px-4">
          
          {/* Header Section */}
          <div className="flex flex-wrap items-center mb-16">
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
              <div className="text-left">
                <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-primary">
                  Other Amenities
                </h2>
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-left lg:text-right">
              <Button
              variant="secondary"
              >
                <span>Learn more</span>
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            
            {/* Feature 1 */}
            <div className="p-4">
              <h5 className="text-xl md:text-2xl text-primary mb-5">Events</h5>
              <p className="text-secondary leading-relaxed">
                Perfect for organising events of every kind, from celebrations to conferences.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-4">
              <h5 className="text-xl md:text-2xl text-primary mb-5">Dining/restaurant</h5>
              <p className="text-secondary leading-relaxed">
                Three distinctive dining destinations, each offering a unique ambience and culinary experience.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-4">
              <h5 className="text-xl md:text-2xl text-primary mb-5">Rooms</h5>
              <p className="text-secondary leading-relaxed">
                Elegantly designed rooms that help you unwind and enjoy a truly relaxed stay.
              </p>
            </div>

          </div>
        </div>

        {/* Full Width Image Section */}
        <div className="w-full">
          <div
            className="w-full flex items-center justify-center bg-cover bg-center"
            style={{
              height: "600px",
              backgroundImage: "url('/1.webp')",
            }}
          ></div>
        </div>
      </div>

      {/* Form Modals - Logic Preserved */}
      
    
    </>
  );
};

export default OtherAmenities;