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
    <section className="py-12 md:py-20 bg-white text-gray-800 font-sans">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-3">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-[#0B1629] transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-gray-400">{crumb.label}</span>
              )}
              {index < breadcrumbs.length - 1 && <span className="text-gray-300">›</span>}
            </React.Fragment>
          ))}
        </nav>

        {/* Title Section */}
        <div className="mb-10 md:mb-14">
          <h1 className="text-4xl md:text-5xl font-serif text-[#1C2E3D] mb-6">
            {title}
          </h1>
          {/* Decorative underline matching the image style */}
          <div className="h-[1px] w-32 bg-gray-300"></div>
        </div>

        {/* Main Grid: Changed to 12 columns for precise sizing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Description - Takes 7/12 columns (approx 58%) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="text-gray-500 leading-loose text-[1.05rem] space-y-8 font-light">
              {Array.isArray(description) ? (
                description.map((para, idx) => <p key={idx}>{para}</p>)
              ) : (
                <p>{description}</p>
              )}
            </div>

            <div className="mt-10">
              <Link href={bookNowLink}>
                <Button 
                  variant="primary" 
                  className="bg-[#0B1629] text-white hover:bg-[#15243b] px-10 py-4 rounded-none text-sm tracking-widest uppercase font-medium"
                >
                  Book Now
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Details - Takes 5/12 columns (approx 42%) */}
          <div className="lg:col-span-5">
            
            {/* Details Grid (View, Size, etc) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8 mb-16 border-b border-gray-100 pb-12">
              
              {/* View */}
              {details.view && (
                <div>
                  <h4 className="text-[#0B1629] font-bold text-lg mb-3">View:</h4>
                  <p className="text-gray-500 text-[15px] leading-relaxed font-light">
                    {details.view}
                  </p>
                </div>
              )}

              {/* Size */}
              {details.size && (
                <div>
                  <h4 className="text-[#0B1629] font-bold text-lg mb-3">Size:</h4>
                  <p className="text-gray-500 text-[15px] font-light">{details.size}</p>
                </div>
              )}

              {/* Occupancy */}
              {details.occupancy && (
                <div>
                  <h4 className="text-[#0B1629] font-bold text-lg mb-3">Occupancy:</h4>
                  <p className="text-gray-500 text-[15px] font-light">{details.occupancy}</p>
                </div>
              )}

              {/* Bedding */}
              {details.bedding && (
                <div>
                  <h4 className="text-[#0B1629] font-bold text-lg mb-3">Bedding:</h4>
                  <p className="text-gray-500 text-[15px] font-light">{details.bedding}</p>
                </div>
              )}
            </div>

            {/* Amenities Section */}
            <div>
              <h4 className="text-[#0B1629] font-bold text-lg mb-8">Amenities</h4>
              <div className="flex flex-wrap items-start gap-10">
                {amenities.map((item, index) => (
                  <div key={index} className="flex flex-col items-center gap-4 text-center group">
                    <div className="text-3xl text-[#1C2E3D] group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <span className="text-[11px] text-gray-500 leading-tight max-w-[80px]">
                      {item.label}
                    </span>
                  </div>
                ))}

                {extraAmenitiesCount > 0 && (
                  <div className="flex flex-col items-center justify-start pt-1">
                    <span className="text-3xl text-[#1C2E3D] font-light">+{extraAmenitiesCount}</span>
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