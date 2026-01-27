import React from "react";
import Image from "next/image";
import { Button } from "../ui/Button";

interface ImageCtaSectionProps {
  backgroundImage: string;
  title: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}

export const ImageCtaSection: React.FC<ImageCtaSectionProps> = ({
  backgroundImage,
  title,
  buttonText = "Explore",
  buttonLink = "/",
  className = "",
  
}) => {
  return (
    <section className={`relative w-full h-[60vh] min-h-[500px] flex items-center ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src={backgroundImage} alt={title} fill className="object-cover" priority />
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 md:px-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif mb-8 leading-tight drop-shadow-lg tracking-wide">{title}</h2>
          <a href={buttonLink}>
            <Button variant="primary" className="min-w-[150px]  font-medium">
              {buttonText}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
