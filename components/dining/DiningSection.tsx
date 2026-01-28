"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/Button";

function DiningSection() {
  const diningItems = [
    { id: 1, title: "Tulip", image: "/1.webp" },
    { id: 2, title: "Oyster Bay", image: "/1.webp" }, // Ensure distinct images are used in production
    { id: 3, title: "Food & forest", image: "/1.webp" },
  ];

  return (
    <section className="py-20 md:pb-0 md:pt-0 bg-white">
      <div className="container mx-auto px-4 pt-10">
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diningItems.map((item) => (
            <div key={item.id} className="group relative h-[500px] md:h-[585px] w-full rounded-lg overflow-hidden cursor-pointer">
              {/* --- 1. Background Image --- */}
              {/* "fill" ensures the image covers the full height of the card */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />

              {/* --- 2. Dark Gradient Overlay --- */}
              {/* This ensures white text is readable against any image background */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

              {/* --- 3. Content Area --- */}
              {/* Positioned absolute at bottom left */}
              <div className="absolute bottom-10 left-8 z-10">
                {/* Title: Serif font to match the elegant look in the image */}
                <h3 className="text-white text-4xl font-serif mb-8 tracking-wide">{item.title}</h3>

                {/* Button: Transparent with White Border */}
                <Link href="#">
                  <Button variant="outline">View More</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DiningSection;
