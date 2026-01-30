"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

interface RoomVideoProps {
  coverImage: string;
  videoUrl?: string; // Accepts an embed URL
}

const RoomVideo: React.FC<RoomVideoProps> = ({ coverImage, videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="pt-5 pb-16 md:pb-0 md:pt-0 bg-white">
      <div className="">
        <div
          className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] rounded-sm overflow-hidden group cursor-pointer shadow-sm"
          onClick={() => setIsPlaying(true)}
        >
          {/* Cover Image */}
          <Image src={coverImage} alt="Room Video Tour" fill className="object-cover transition-transform duration-700" />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/20 transition-colors duration-300" />

          {/* Play Button Container */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            {/* Outer Ring */}
            <div className=" flex items-center justify-center    transition-transform duration-300">
              {/* Inner Circle */}
              <div className=" flex items-center justify-center">
              <svg width="104" height="104" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.5" d="M51.5523 0C23.1246 0 0 23.1268 0 51.5523C0 79.9778 23.1246 103.105 51.5523 103.105C79.98 103.105 103.105 79.9778 103.105 51.5523C103.105 23.1268 79.98 0 51.5523 0ZM72.0466 53.3584L41.9745 72.6906C41.622 72.9191 41.2151 73.0325 40.8123 73.0325C40.4599 73.0325 40.1033 72.9443 39.7845 72.7703C39.0922 72.3927 38.6642 71.671 38.6642 70.8844V32.2202C38.6642 31.4336 39.0922 30.7119 39.7845 30.3343C40.4641 29.961 41.3158 29.9839 41.9745 30.414L72.0466 49.7462C72.6591 50.1405 73.0325 50.8223 73.0325 51.5523C73.0325 52.2823 72.6591 52.964 72.0466 53.3584Z" fill="#9A9A9A"/>
</svg>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isPlaying && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-200">
          {/* Click outside to close */}
          <div className="absolute inset-0" onClick={() => setIsPlaying(false)} />

          <div className="relative w-full max-w-6xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl z-10">
            <iframe src={videoUrl} className="w-full h-full" allow="autoplay; encrypted-media" allowFullScreen title="Room Video" />
          </div>

          {/* Close Button */}
          <button
            className="absolute top-6 right-6 z-20 p-2 text-white/70 hover:text-white  rounded-full transition-all"
            onClick={(e) => {
              e.stopPropagation();
              setIsPlaying(false);
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18M6 6L18 18" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

export default RoomVideo;
