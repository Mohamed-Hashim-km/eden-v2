"use client";

import React from "react";
import Link from "next/link";
import { Button } from "../ui/Button";
// Ensure you have these icons installed or replace with your own
import { FaRegsnowflake, FaBath, FaPlug } from "react-icons/fa";

interface Amenity {
  icon: React.ReactNode;
  label: string;
}

interface RoomDetailsProps {
  breadcrumbs: { label: string; href?: string }[];
  title: string;
  description: string | string[];
  details: {
    view?: string;
    size?: string;
    occupancy?: string;
    bedding?: string;
  };
  amenities: Amenity[];
  extraAmenitiesCount?: number;
  bookNowLink?: string;
}

const RoomDetails: React.FC<RoomDetailsProps> = ({
  breadcrumbs,
  title,
  description,
  details,
  amenities,
  extraAmenitiesCount = 0,
  bookNowLink = "/contact",
}) => {
  return (
    <section className="py-12 md:pb-20 md:pt-16 bg-white text-gray-800 ">
      <div className="container mx-auto px-4  max-w-7xl">
        {/* Breadcrumbs */}
        <nav className="text-base text-secondary mb-16 flex items-center gap-3">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              {crumb.href ? (
                <Link href={crumb.href} className="text-primary transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-secondary">{crumb.label}</span>
              )}
              {index < breadcrumbs.length - 1 && <span className="text-primary">›</span>}
            </React.Fragment>
          ))}
        </nav>

        {/* Title Section */}
        <div className="mb-10 md:mb-10">
          <h1 className="text-2xl md:text-4xl  text-primary mb-6">{title}</h1>
          {/* Decorative underline matching the image style */}
          <div className="h-[1px] w-32 bg-gray-300"></div>
        </div>

        {/* Main Grid: Changed to 12 columns for precise sizing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left Column: Description - Takes 7/12 columns (approx 58%) */}
          <div className="lg:col-span-7 flex flex-col gap-16">
            <div className="text-secondary leading-loose text-[1.05rem] space-y-8 ">
              {Array.isArray(description) ? description.map((para, idx) => <p key={idx}>{para}</p>) : <p>{description}</p>}
            </div>

            <div className="">
              <Link href={bookNowLink}>
                <Button variant="tertiary">Book Now</Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Details - Takes 5/12 columns (approx 42%) */}
       <div className="lg:col-span-5 pt-2">
            {/* Details Grid (View, Size, Occupancy, Bedding) */}
            <div className="grid grid-cols-2 gap-y-12 gap-x-8 mb-20">
              {/* View */}
              {details.view && (
                <div>
                  <h4 className="text-primary font-bold text-[15px] mb-2 tracking-wide ">View:</h4>
                  <p className="text-secondary text-[15px] leading-relaxed ">{details.view}</p>
                </div>
              )}

              {/* Size */}
              {details.size && (
                <div>
                  <h4 className="text-primary font-bold text-[15px] mb-2 tracking-wide ">Size:</h4>
                  <p className="text-secondary text-[15px] ">{details.size}</p>
                </div>
              )}

              {/* Occupancy */}
              {details.occupancy && (
                <div>
                  <h4 className="text-primary font-bold text-[15px] mb-2 tracking-wide ">Occupancy:</h4>
                  <p className="text-secondary text-[15px] ">{details.occupancy}</p>
                </div>
              )}

              {/* Bedding */}
              {details.bedding && ( 
                <div>
                  <h4 className="text-primary font-bold text-[15px] mb-2 tracking-wide ">Bedding:</h4>
                  <p className="text-secondary text-[15px] ">{details.bedding}</p>
                </div>
              )}
            </div>

            {/* Amenities Section */}
            <div>
              <h4 className="text-primary font-bold text-[15px] mb-8 tracking-wide ">Amenities</h4>
              <div className="flex flex-wrap items-center gap-12">
                {amenities.map((item, index) => (
                  <div key={index} className="flex flex-col items-center gap-3 group">
                    <div className="text-[32px] text-[#333333]  stroke-[0.5px]">{item.icon}</div>
                    <span className="text-[11px] text-secondary tracking-wide text-center">{item.label}</span>
                  </div>
                ))}

                {extraAmenitiesCount > 0 && (
                  <div className="flex flex-col items-center justify-center h-full mb-5">
                    <span className="text-2xl text-[#333333] ">+{extraAmenitiesCount}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
