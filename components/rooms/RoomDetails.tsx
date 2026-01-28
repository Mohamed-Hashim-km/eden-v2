"use client";

import React from "react";
import Link from "next/link";
import { Button } from "../ui/Button";
import { IconType } from "react-icons";

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
  extraAmenitiesCount?: number; // For the "+3"
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
    <section className="py-12 md:py-16 bg-white text-gray-800 font-sans">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-8 flex items-center gap-2">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-primary transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-gray-400">{crumb.label}</span>
              )}
              {index < breadcrumbs.length - 1 && <span className="text-gray-400">›</span>}
            </React.Fragment>
          ))}
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-serif text-[#1C2E3D] mb-8 md:mb-12 border-b border-gray-200 pb-6 inline-block w-full max-w-xs">
          {title}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column: Description & Action */}
          <div className="flex flex-col gap-6">
            <div className="text-gray-600 leading-relaxed text-base md:text-[1.05rem] space-y-6">
              {Array.isArray(description) ? description.map((para, idx) => <p key={idx}>{para}</p>) : <p>{description}</p>}
            </div>

            <div className="mt-8">
              <Link href={bookNowLink}>
                <Button variant="primary" className="bg-[#0B1629] text-white hover:bg-[#15243b] px-8 py-3 rounded-none text-base">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Details & Amenities */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-8 mb-12">
              {/* View */}
              {details.view && (
                <div>
                  <h4 className="text-[#0B1629] font-bold text-lg mb-2">View:</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{details.view}</p>
                </div>
              )}

              {/* Size */}
              {details.size && (
                <div>
                  <h4 className="text-[#0B1629] font-bold text-lg mb-2">Size:</h4>
                  <p className="text-gray-500 text-sm">{details.size}</p>
                </div>
              )}

              {/* Occupancy */}
              {details.occupancy && (
                <div>
                  <h4 className="text-[#0B1629] font-bold text-lg mb-2">Occupancy:</h4>
                  <p className="text-gray-500 text-sm">{details.occupancy}</p>
                </div>
              )}

              {/* Bedding */}
              {details.bedding && (
                <div>
                  <h4 className="text-[#0B1629] font-bold text-lg mb-2">Bedding:</h4>
                  <p className="text-gray-500 text-sm">{details.bedding}</p>
                </div>
              )}
            </div>

            {/* Amenities */}
            <div>
              <h4 className="text-[#0B1629] font-bold text-lg mb-6">Amenities</h4>
              <div className="flex items-center gap-8 md:gap-12">
                {amenities.map((item, index) => (
                  <div key={index} className="flex flex-col items-center gap-3 text-center">
                    <div className="text-3xl text-[#1C2E3D]">{item.icon}</div>
                    <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wide max-w-[80px] leading-tight">{item.label}</span>
                  </div>
                ))}

                {extraAmenitiesCount > 0 && (
                  <div className="flex flex-col items-center justify-center pt-2">
                    <span className="text-2xl md:text-3xl text-[#1C2E3D] font-light">+{extraAmenitiesCount}</span>
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
