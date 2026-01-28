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

export const Hero: React.FC<HeroProps> = ({ title="A New Standard of Comfort", description="Defined by comfort, calm and considered design, every stay offers a refined environment for rest and renewal", bookingBarLocations, bookingBarDefaultLocation, bookingBarEnableSelection }) => {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex flex-col justify-center items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Overlay - adjusting opacity for readability */}
        <div className="absolute inset-0 bg-black/30 z-10" />
        <Image src="/1.webp" alt="Luxury Bedroom" fill className="object-cover" priority />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white flex flex-col items-center justify-center pb-20">
        <h1 className="text-5xl md:text-7xl  mb-6 drop-shadow-lg tracking-wide">{title}</h1>
        <p className="max-w-2xl text-base md:text-lg font-sans opacity-95 mb-10 drop-shadow-md leading-relaxed tracking-wide">
          {description}
        </p>

       
      </div>

      {/* Booking Bar Container - Positioned absolutely at bottom */}
      {/* <div className="absolute bottom-0 left-0 right-0 z-20 px-4 translate-y-1/2 flex justify-center w-full">
        <BookingBar locations={bookingBarLocations} defaultLocation={bookingBarDefaultLocation} enableLocationSelection={bookingBarEnableSelection} />
      </div> */}
    </section>
  );
};
