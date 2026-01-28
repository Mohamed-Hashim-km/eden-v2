"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const EventSpaces = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Added 'items-stretch' to ensure both columns have equal height */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Left Column: Text Content */}
          {/* Changed: Added 'flex-1' and 'justify-between' */}
          <div className="flex flex-col items-center text-center max-w-lg mx-auto lg:mx-0 w-full px-4 flex-1 justify-between py-2">
            
            {/* Top Border */}
            <div className="w-full border-t border-primary"></div>

            {/* Middle Content Wrapper */}
            <div className="flex flex-col items-center py-20"> 
              <div className="w-fit mb-12">
                <h2 className="text-3xl md:text-4xl font-medium text-primary leading-tight">
                  Elevated Spaces for <br /> Memorable Events
                </h2>
                <div className="border-t border-primary my-8"></div>
              </div>

              <p className="text-primary mb-8 max-w-md leading-relaxed text-lg">
                Create unforgettable moments in our versatile event spaces, offering a scenic rooftop venue and a spacious indoor hall for every celebration.
              </p>

              <Link href="/events">
                <Button variant="secondary" className="px-10 py-3">
                  Explore
                </Button>
              </Link>
            </div>

            {/* Bottom Border */}
            <div className="w-full border-t border-primary"></div>
          </div>

          {/* Right Column: Image */}
          {/* 'h-full' ensures it fills the grid cell height */}
          <div className="relative w-full min-h-[400px] h-full">
            <Image 
              src="/1.webp" 
              alt="Event Space" 
              fill 
              className="object-cover shadow-sm" 
              priority 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSpaces;