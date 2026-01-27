"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/Button"; // Assuming you have a reusable Button component

const EventShowcase = ({ title, description, buttonText, buttonLink, imageSrc }) => {
  return (
    <section className="py-20 overflow-hidden">
      {/* Container: Full width with padding on right for larger screens */}
      <div className="w-full pl-0 pr-4 md:pr-12 lg:pr-16">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left Side: Image */}
          {/* w-full on mobile, w-1/2 on desktop. "h-[600px]" matches min-height: 600px */}
          <div className="w-full lg:w-1/2 relative h-[500px] md:h-[600px] bg-gray-50  overflow-hidden group">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={title || "Event Showcase"}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              // Placeholder State
              <div className="w-full h-full flex items-center justify-center text-gray-300">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
            )}
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 px-4 lg:px-0 lg:pl-12">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl  text-primary mb-6 leading-tight">{title || "Event Space Showcase"}</h2>

              <p className="text-secondary text-lg leading-relaxed mb-8">
                {description ||
                  "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices."}
              </p>

              <Link href={buttonLink || "#"}>
                <Button variant="tertiary" className="!px-8">
                  {buttonText || "Learn More"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventShowcase;
