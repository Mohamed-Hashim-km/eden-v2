import React from "react";
import Image from "next/image";
import { Button } from "../ui/Button";
import { BookingBar } from "../features/BookingBar";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-end pb-32">
       {/* Background Image */}
       <div className="absolute inset-0 z-0">
        {/* Placeholder src until generated image is moved/referenced properly. 
            Ideally, we use the artifact or a local public image. 
            For now, I'll assume the generated image will be saved to public/hero-bg.jpg 
            or I will need to update this after generation. 
            Using a placeholder / color for immediate valid render if image missing. */}
        {/* Overlay */}
        {/* I will update this src once the image tool returns the path and I copy it */}
         <Image 
            src="/1.webp" 
            alt="Luxury Bedroom" 
            fill 
            className="object-cover"
            priority
         />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white mb-20 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-serif mb-6 drop-shadow-lg">
          A New Standard of Comfort
        </h1>
        <p className="max-w-2xl text-base md:text-lg font-sans opacity-90 mb-10 drop-shadow-md leading-relaxed">
          Defined by comfort, calm and considered design, every stay offers a refined environment for rest and renewal
        </p>
        
        <div className="flex items-center gap-4">
            <Button variant="primary" className="min-w-[140px]">
                Book Now
            </Button>
            <Button variant="outline" className="min-w-[140px]">
                Sign Up
            </Button>
        </div>
      </div>

      {/* Booking Bar (Positioned roughly at bottom, overlapping implicitly by negative margin in the bar itself or absolute positioning) 
          In the design, it looks like it overlaps the bottom edge or sits just inside.
          The BookingBar component handles its own negative margin top to overlap if placed after this section, 
          OR we place it here.
      */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-20 px-4">
        <BookingBar />
      </div>
    </section>
  );
};
