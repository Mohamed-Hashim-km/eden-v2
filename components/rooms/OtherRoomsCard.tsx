import Link from "next/link";
import React from "react";
import { Button } from "../ui/Button";

function OtherRoomsCard(props) {
  const { Slug, Img, Title, Category, Author, AuthorImg, Description } = props;
  
  return (
    <div className="group h-full flex flex-col bg-white rounded-lg border border-gray-200 p-4  transition-shadow duration-300">
      
      {/* Image Section: Wrapped in a container to give it the padding effect seen in the image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg mb-6 bg-gray-100">
        {Slug ? (
          <Link href={Slug} className="block h-full w-full">
            <img
              className="h-full w-full object-cover transition-transform duration-700 "
              src={Img || "/assets/images/pages/blog/1.webp"}
              alt={Title || ""}
            />
          </Link>
        ) : (
          <img
            className="h-full w-full object-cover transition-transform duration-700 "
            src={Img || "/assets/images/pages/blog/1.webp"}
            alt={Title || ""}
          />
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-grow flex-col items-start px-1">
        
        {/* Title: Using  to match the elegant look in the image */}
        {Title && (
          <h6 className="mb-3 text-2xl  text-primary transition-colors">
            {Slug ? <Link href={Slug}>{Title}</Link> : Title}
          </h6>
        )}

        {/* Description: Light gray, readable text */}
        {Description && (
          <p className="mb-6 text-sm text-secondary leading-relaxed line-clamp-3">
            {Description}
          </p>
        )}

        {/* Button: Custom Gold/Brown color (#A68A64) to match the reference */}
        <div className="mt-auto">
          {Slug && (
            <Link href={Slug}>
              <Button variant="tertiary">
                Learn More
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default OtherRoomsCard;