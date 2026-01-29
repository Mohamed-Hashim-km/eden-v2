import React from "react";
import { Hero } from "@/components/sections/Hero";
import { ContentCarousel } from "@/components/shared/ContentCarousel";

import {
  FaWifi,
  FaCar,
  FaUtensils,
  FaSnowflake,
  FaShieldAlt,
  FaVideo,
  FaMapMarkedAlt,
  FaBatteryFull,
  FaFire,
  FaParking,
  FaGamepad,
  FaTags,
  FaLanguage,
  FaDoorOpen,
  FaSpa,
  FaSwimmingPool,
} from "react-icons/fa";
import { MdFamilyRestroom, MdKitchen } from "react-icons/md";
import PopularFacilities from "@/components/shared/PopularFacilities";
import { ContentGridCarousel } from "@/components/shared/ContentGrid";
import Faq from "@/components/shared/Faq";
import { FeatureShowcase } from "@/components/shared/FeatureShowcase";
import { CommonAmenities } from "@/components/features/CommonAmenities";

const amenities = [
  {
    id: 2,
    image: "/1.webp",
    title: "Hotel Tulip",
    description:
      "Tulip is a fine-dine multi-cuisine restaurant offering Pan-Indian, Oriental and Continental dishes, crafted with premium ingredients.",
  },
  {
    id: 3,
    image: "/1.webp",
    title: "Hotel Tulip",
    description:
      "The Golden Leaf Spa offers a curated wellness experience with relaxation therapies, beauty, and grooming, providing everyday luxury and complete rejuvenation.",
  },
  {
    id: 4,
    image: "/1.webp",
    title: "Bonfire",
    description:
      "Bonfire is an exquisite outdoor lounge where guests can enjoy curated drinks, gourmet bites and a warm, inviting fire under the stars.",
  },
];

const faqData = [
  {
    id: 1,
    question: "How far is Ember Castle from Gokarna Main Beach?",
    answer: "It’s approximately 2.6 km, making beach visits quick and easy.",
  },
  {
    id: 2,
    question: "Is parking available?",
    answer: "Yes, the property offers free private parking on site.",
  },
  {
    id: 3,
    question: "Does the property have dining options?",
    answer: "Yes, an on-site restaurant serves meals including buffet breakfast with local specialties. ",
  },
  {
    id: 4,
    question: "Are there activities onsite?",
    answer:
      "Guests can enjoy the pool, garden areas, spa facilities, and fitness centre, making this a great pick for both relaxation and adventure.",
  },
  {
    id: 5,
    question: "Do guests receive any complimentary benefits with their stay?",
    answer: "Yes, guests are welcomed with a complimentary welcome drink and can enjoy free breakfast during their stay.",
  },
];
const facilities = [
  { icon: <FaBatteryFull />, title: "Power Backup" },
  { icon: <FaShieldAlt />, title: "24-hour security" },
  { icon: <FaSnowflake />, title: "Air conditioning" },
  { icon: <FaParking />, title: "Ample Parking" },
  { icon: <FaFire />, title: "Bonfire" },

  { icon: <FaUtensils />, title: "Dining Area" },
  { icon: <MdFamilyRestroom />, title: "Family-friendly" },
  { icon: <FaCar />, title: "Free Car Parking" },
  { icon: <FaWifi />, title: "Free Wifi" },
  { icon: <MdKitchen />, title: "Fully equipped Kitchen" },
  { icon: <FaGamepad />, title: "Indoor Games" },
  { icon: <FaMapMarkedAlt />, title: "Local Experiences" },
  { icon: <FaTags />, title: "Long Stay Discounts" },
  { icon: <FaVideo />, title: "CCTV in common areas" },
  { icon: <FaLanguage />, title: "Multilingual Host" },
  { icon: <FaDoorOpen />, title: "Private entrance" },
  { icon: <FaSpa />, title: "Spa & wellness centre" },
  { icon: <FaSwimmingPool />, title: "Swimming Pool" },
];
const rooms = [
  {
    title: "10-Bed Dormitory",
    slug: "/rooms/10-bed-dormitory",
    image: "/1.webp",
    description: "A spacious and thoughtfully designed dormitory, perfect for large groups seeking comfort, privacy, and modern amenities.",
  },
  {
    title: "6-Bed Dormitory",
    slug: "/rooms/6-bed-dormitory",
    image: "/1.webp",
    description: "A cozy, group-friendly dormitory offering essential comforts for a relaxed and convenient stay.",
  },
  {
    title: "Premium Room",
    slug: "/rooms/premium-room",
    image: "/1.webp",
    description: "Our most luxurious and spacious accommodation for a truly exceptional stay.",
  },
  {
    title: "Suite Double Room",
    slug: "/rooms/suite-room-double",
    image: "/1.webp",
    description:
      "The Suite Double Room features a spacious, elegantly designed interior with a comfortable double bed, modern amenities, and a relaxing atmosphere.",
  },
  {
    title: "Suite Room",
    slug: "/rooms/suite-room",
    image: "/1.webp",
    description: "An expansive suite with sophisticated decor and thoughtful amenities, designed for comfort and relaxation",
  },
  {
    title: "Suite Room With Loft",
    slug: "/rooms/suite-room-with-loft",
    image: "/1.webp",
    description: "A stylish suite featuring a loft area, offering extra space and a unique, airy atmosphere for guests.",
  },
];
export default function GokarnaPage() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Experience the Best of Gokarna"
        description="Blessed with serene beaches, sacred temples and scenic coastal landscapes, Gokarna is a peaceful seaside town where spirituality and nature come together perfect for a refreshing getaway."
        bookingBarLocations={["Gokarna"]}
        bookingBarDefaultLocation="Gokarna"
        bookingBarEnableSelection={false}
      />
      <ContentGridCarousel
        title="Rooms Designed for Comfort and Space"
        description="At Hotel Eden, every room is crafted to be your personal retreat, combining elegant interiors, modern amenities and space to ensure a truly relaxing stay."
        items={rooms}
      />
      <PopularFacilities
        facilities={facilities}
        title="Popular Facilities"
        description="Hotel Eden Castle Ember offers a range of thoughtfully curated facilities to make your visit effortless and enjoyable."
        subtitle=""
      />

      <CommonAmenities items={amenities} />

      <Faq title="Frequently Asked Questions" description="" faqData={faqData} />
      <FeatureShowcase
        title="Discover Our Signature Dinner Offerings"
        description="Elevate your evenings with exclusive dinner offerings, including curated set menus and dining credits redeemable across our restaurants."
        buttonText="Explore"
        imageSrc="/1.webp"
        buttonLink="/dining"
      />
    </main>
  );
}
