import React from "react";
import Image from "next/image";
import { Button } from "../ui/Button";

export const AboutSection = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Left Column: Image */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative aspect-[4/5] w-full max-w-[500px] mx-auto overflow-hidden rounded-lg shadow-lg">
              {/* Placeholder for the building image shown in design */}
              {/* I'll use a placeholder or the same uploaded image if appropriate, 
                               but ideally a specific building image. 
                               For now using a placeholder path that user can update or I can generate with tool later if asked. */}
              <Image
                src="/1.webp"
                alt="Hotel Exterior Architecture"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl  text-primary mb-6 leading-tight">Built on Years of Trusted Hospitality</h2>

            <p className="text-base md:text-lg text-secondary mb-8 leading-relaxed max-w-xl">
              Backed by years of hospitality experience, Hotel Eden brings together thoughtful design and warm service. Every detail is carefully
              curated to ensure a comfortable and memorable stay.
            </p>

            <ul className="flex flex-col gap-3 mb-10">
              {[
                "Elegantly designed rooms across multiple categories",
                "Three distinctive dining experiences under one roof",
                "Spa, fitness studio, recreation zone & banquet facilities",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-secondary text-base">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Button variant="secondary">
              Discover Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
