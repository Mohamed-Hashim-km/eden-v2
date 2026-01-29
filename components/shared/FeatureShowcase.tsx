import React from "react";
import Image from "next/image";
import { Button } from "../ui/Button";
import Link from "next/link";

interface FeatureShowcaseProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  imageSrc?: string;
}

export const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({
  title = "Discover Our Signature Dinner Offerings",
  description = "Elevate your evenings with exclusive dinner offerings, including curated set menus and dining credits redeemable across our restaurants.",
  buttonText = "Explore",
  buttonLink = "/",
  imageSrc = "/image_21915b.jpg",
}) => {
  return (
    <section className="pt-0 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto ">
        {/* Flex Container */}
        <div className="flex flex-col-reverse md:flex-row items-start relative">
          {/* 1. Left: Blue Text Card 
              - w-[55%]: slightly more than half to give it weight.
              - z-10: Behind the image.
              - -mr-32: The key style. This pulls the image 8rem (approx 128px) 
                to the LEFT, creating the overlap.
          */}
          <div className="w-full md:w-[55%] z-10 relative md:-mr-32  md:mb-0">
            <div className="bg-[#001446] p-8 md:p-12 lg:p-16 lg:pr-32 pt-32 pb-10 md:pb-0 md:pt-0 shadow-2xl w-full text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#F7F4ED]  mb-6 leading-tight">{title}</h2>

              {/* Divider Line */}
              <div className="w-[50%] h-[1px] bg-[#F7F4ED] mb-8"></div>

              {/* Description 
                  - lg:pr-12: Extra padding ensures text doesn't run under the image.
              */}
              <p className="text-[#F7F4ED] leading-relaxed mb-10 text-base lg:text-lg font-light opacity-90 lg:pr-12">{description}</p>

              {buttonText && (
                <Link href={buttonLink}>
                  <Button className="w-full md:w-auto" variant="secondary">{buttonText}</Button>
                </Link>
              )}
            </div>
          </div>

          {/* 2. Right: Image 
              - w-[55%]: Same width as the card.
              - z-20: Sits ON TOP of the blue card.
              - mt-24: Pushed down significantly to stagger the vertical alignment.
          */}
          <div className="w-full md:w-[55%]  md:mt-24 h-[400px] md:h-[650px] relative z-20 shadow-xl">
            <Image src={imageSrc} alt={title} fill className="object-cover px-4 mt-20 md:px-0 md:mt-0" priority />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
