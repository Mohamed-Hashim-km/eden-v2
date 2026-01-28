import React from "react";
import Image from "next/image";
import { Button } from "../ui/Button";
import { BookingBar } from "../features/BookingBar";

interface HeroProps {
  bookingBarLocations?: string[];
  bookingBarDefaultLocation?: string;
  bookingBarEnableSelection?: boolean;
  title?: string;
  description?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title = "A New Standard of Comfort",
  description = "Defined by comfort, calm and considered design, every stay offers a refined environment for rest and renewal",
  bookingBarLocations,
  bookingBarDefaultLocation,
  bookingBarEnableSelection,
}) => {
  return (
    <>
      {/* =========================================
          DESKTOP VERSION (Hidden on Mobile)
          ========================================= */}
      <section className="hidden md:flex relative w-full h-[100vh] flex-col justify-center items-center pt-20">
        {/* Background Image - Stays full screen because of absolute inset-0 */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <Image src="/1.webp" alt="Luxury Bedroom" fill className="object-cover" priority />
        </div>

        {/* Content */}
        {/* CHANGE 2: Removed 'pb-20'. That padding was lifting the text up higher. */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-7xl mb-6 drop-shadow-lg tracking-wide">{title}</h1>
          <p className="max-w-2xl text-base md:text-lg  opacity-95 mb-10 drop-shadow-md leading-relaxed tracking-wide">{description}</p>

       
        </div>

        {/* Booking Bar Container */}
       
      
      </section>
    </>
  );
};
