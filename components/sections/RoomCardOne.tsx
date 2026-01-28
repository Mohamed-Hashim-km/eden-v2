import Link from "next/link";
import Image from "next/image";
import React from "react";

function RoomCardOne(props) {
  const { Slug, Img, Title, Price, Description } = props;

  return (
    // The card is now a single relative container
    <>
    {Slug?<Link href={`/rooms/${Slug}`}>
      <div className="group relative h-[600px] w-full overflow-hidden rounded-xl">
        {/* Background Image occupying the full card */}

        <Image
          src={Img || "/1.webp"}
          alt={Title}
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Content positioned at the bottom left */}
        <div className="absolute bottom-0 left-0 p-8 z-10">
          {/* Title with large, elegant font */}
          <h3 className="text-white text-4xl md:text-5xl  mb-4 drop-shadow-md">{Title}</h3>

          {/* Description with smaller white font */}
          <p className="text-white text-lg md:text-xl font-light drop-shadow-sm">{Description}</p>
        </div>
      </div>
    </Link>:
    <div>
      <div className="group relative h-[600px] w-full overflow-hidden rounded-md">
        {/* Background Image occupying the full card */}

        <Image
          src={Img || "/1.webp"}
          alt={Title}
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Content positioned at the bottom left */}
        <div className="absolute bottom-0 left-0 p-8 z-10">
          {/* Title with large, elegant font */}
          <h3 className="text-white text-4xl md:text-5xl  mb-4 drop-shadow-md">{Title}</h3>

          {/* Description with smaller white font */}
          <p className="text-white text-lg md:text-xl font-light drop-shadow-sm">{Description}</p>
        </div>
      </div>
    </div>}
    </>
  );
}

export default RoomCardOne;
