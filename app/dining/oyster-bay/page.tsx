import Dining from "@/components/dining/Dining";
import DiningPhilosophy from "@/components/dining/DiningPhilosophy";
import DiningSection from "@/components/dining/DiningSection";
import Overview from "@/components/dining/Overview";
import GalleryOne from "@/components/shared/GalleryOne";
import { ImageCtaSection } from "@/components/shared/ImageCtaSection";
import React from "react";
const galleryImages = [
  "/1.webp",
  "/1.webp",
  "/1.webp",
  "/1.webp",
  "/1.webp",
  "/1.webp",
  "/1.webp",
  "/1.webp",
  "/1.webp",
  "/1.webp",
  "/1.webp",
  "/1.webp",
];
const page = () => {
  return (
    <div>
      <Dining />
      <DiningPhilosophy />
      <Overview/>
      <DiningSection/>
      <div className="pb-10">
      <GalleryOne  galleryImages={galleryImages}/>
      </div>
<ImageCtaSection
        backgroundImage="/1.webp"
        title="Your perfect stay in Karwar is
just a moment away."
        buttonText="Explore"
        buttonLink="/karwar"
      />
    </div>
  );
};

export default page;
