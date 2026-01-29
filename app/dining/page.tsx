import Dining from "@/components/dining/Dining";
import DiningPhilosophy from "@/components/dining/DiningPhilosophy";
import DiningSection from "@/components/dining/DiningSection";
import FeatureSection from "@/components/dining/FeatureSection";
import Overview from "@/components/dining/Overview";
import { Hero } from "@/components/rooms/Hero";
import RoomGalleryCarousel from "@/components/rooms/RoomGalleryCarousel";
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
      <Hero title="Dining" description="" />
      {/* <DiningPhilosophy /> */}
      <Overview/>
      <DiningSection/>
      <div className="md:pt-24">
      <RoomGalleryCarousel images={galleryImages} title="Gallery" />
      </div>
      <FeatureSection/>

    </div>
  );
};

export default page;
