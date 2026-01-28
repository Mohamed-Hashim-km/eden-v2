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

          <div className="flex items-center gap-6">
            <Button variant="primary" className="min-w-[150px] !py-3 !text-base font-medium">
              Book Now
            </Button>
            <Button variant="outline" className="min-w-[150px] !py-3 !text-base font-medium">
              Sign Up
            </Button>
          </div>
        </div>

        {/* Booking Bar Container */}
        <div className="absolute bottom-0 left-0 right-0 z-20 px-4 translate-y-1/2 flex justify-center w-full">
          <BookingBar
            locations={bookingBarLocations}
            defaultLocation={bookingBarDefaultLocation}
            enableLocationSelection={bookingBarEnableSelection}
          />
        </div>
      </section>

      {/* =========================================
          MOBILE VERSION (Hidden on Desktop)
          ========================================= */}
      <section className="md:hidden flex flex-col w-full bg-[#f9f9f9]">
        {/* 1. Top Image Section */}
        <div className="relative w-full h-[45vh]">
          <Image src="/1.webp" alt="Luxury Bedroom" fill className="object-cover" priority />
        </div>

        {/* 2. Overlapping Booking Card */}
        <div className="relative z-10 px-6 -mt-12 mb-8">
          <div className="bg-white p-6 shadow-lg rounded-sm w-full max-w-sm mx-auto">
            <h3 className="text-[#001446] font-medium text-base mb-4 font-serif">Check-In/Check-Out</h3>

            <div className="flex items-center justify-between border-b border-gray-200 pb-2 cursor-pointer">
              <span className="text-gray-400 text-sm">SelectDates</span>
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="opacity-50">
                <path d="M1 1L5 5L9 1" stroke="#001446" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* 3. Mobile Content */}
        <div className="px-6 pb-20 text-center flex flex-col items-center">
          <h1 className="text-[#001446] text-4xl font-serif mb-4 leading-tight">
            A New Standard of
            <br />
            Comfort
          </h1>

          <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xs mx-auto">
            Defined by comfort, calm and considered design, every stay offers are fined environment for rest and renewal
          </p>

          <div className="flex flex-col gap-3 w-full max-w-xs">
            <Button variant="tertiary" className="w-auto !py-3 !text-base font-medium bg-[#001446]">
              Book
            </Button>
            <Button variant="primary" className="w-auto !py-3 !text-base font-medium text-[#001446] border-[#001446]">
              Sign Up
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
