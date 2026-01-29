import React from "react";
import { Hero } from "@/components/sections/Hero";
import { ContentCarousel } from "@/components/shared/ContentCarousel";

import {
  FaWifi,
  FaCar,
  FaUtensils,
  FaSnowflake,
  FaTv,
  FaShieldAlt,
  FaClock,
  FaBriefcase,
  FaVideo,
  FaHeart,
  FaNewspaper,
  FaMapMarkedAlt,
  FaMugHot,
  FaCouch,
  FaSuitcaseRolling,
  FaBatteryFull,
  FaTimesCircle,
} from "react-icons/fa";
import { MdElevator, MdBalcony, MdFamilyRestroom, MdLocalTaxi } from "react-icons/md";
import PopularFacilities from "@/components/shared/PopularFacilities";
import { ContentGridCarousel } from "@/components/shared/ContentGrid";
import Faq from "@/components/shared/Faq";
import { FeatureShowcase } from "@/components/shared/FeatureShowcase";
import InTheKarwar from "@/components/sections/InTheKarwar";
import EventSpaces from "@/components/sections/EventSpaces";

const amenities = [
  { id: 1, title: "Multi-cuisine Restaurants & Rooftop Dining", image: "/1.webp" },
  { id: 2, title: "Spa & Wellness", image: "/1.webp" },
  { id: 3, title: "Fitness Studio & Recreation Zone", image: "/1.webp" },
  { id: 4, title: "Banquet & Conference Facilities", image: "/1.webp" },
   { id: 1, title: "Multi-cuisine Restaurants & Rooftop Dining", image: "/1.webp" },
  { id: 2, title: "Spa & Wellness", image: "/1.webp" },
  { id: 3, title: "Fitness Studio & Recreation Zone", image: "/1.webp" },
  { id: 4, title: "Banquet & Conference Facilities", image: "/1.webp" },
];

const faqData = [
  {
    id: 1,
    question: "Where is Hotel Eden located in Karwar?",
    answer: "Hotel Eden is located near Mulla Stop in the heart of Karwar.",
  },
  {
    id: 2,
    question: "How far is the hotel from the railway station and bus stand?",
    answer: "About 7 km from the railway station and a short drive from the bus stand.",
  },
  {
    id: 3,
    question: "Is Hotel Eden close to Karwar’s beaches?",
    answer: "Yes, popular beaches like Rabindranath Tagore Beach and Devbagh Beach are easily accessible.",
  },
  {
    id: 4,
    question: "Which tourist places are near Hotel Eden?",
    answer: "Rabindranath Tagore Beach, Kurumgad Island, Sadashivgad Fort, and Oyster Rock Lighthouse are nearby.",
  },
  {
    id: 5,
    question: "Is the hotel centrally located in Karwar?",
    answer: "Yes, the hotel is centrally located, making it easy to explore the city.",
  },
];
const facilities = [
  { icon: <FaTimesCircle />, title: "Free Cancellation" },
  { icon: <FaBatteryFull />, title: "Power Backup" },
  { icon: <FaClock />, title: "24-hour front desk" },
  { icon: <FaShieldAlt />, title: "24-hour security" },
  { icon: <FaSnowflake />, title: "Air conditioning" },
  { icon: <FaBriefcase />, title: "Business centre" },
  { icon: <FaVideo />, title: "CCTV in common areas" },
  { icon: <FaVideo />, title: "CCTV outside property" },
  { icon: <MdLocalTaxi />, title: "Cab Service" },
  { icon: <FaUtensils />, title: "Complimentary breakfast" },
  { icon: <FaHeart />, title: "Couples Allowed" },
  { icon: <MdElevator />, title: "Elevator" },
  { icon: <MdFamilyRestroom />, title: "Family rooms" },
  { icon: <FaTv />, title: "Flat-screen TV" },
  { icon: <FaCar />, title: "Free Car Parking" },
  { icon: <FaWifi />, title: "Free Wifi" },
  { icon: <FaCouch />, title: "Fully furnished" },
  { icon: <MdBalcony />, title: "Living Area" },
  { icon: <FaSuitcaseRolling />, title: "Luggage Assistance" },
  { icon: <FaSnowflake />, title: "Mini-Fridge" },
  { icon: <FaNewspaper />, title: "Newspaper" },
  { icon: <FaMapMarkedAlt />, title: "Personalized city tours" },
  { icon: <FaMugHot />, title: "Tea/coffee maker" },
  { icon: <FaClock />, title: "24/7 Front Desk & Guest Assistance" },
];
const rooms = [
  {
    title: "Premium Room (Twin Bedded)",
    slug: "/rooms/premium-room-twin-bedded",
    image: "/1.webp",
    description: "A comfortable private room with twin beds, modern interiors, and all essential amenities for a peaceful stay.",
  },
  {
    title: "Premium Room (King-Size Bedded)",
    slug: "/rooms/premium-room-king-size-bedded",
    image: "/1.webp",
    description: "A stylish and comfortable room with a king-size bed, designed for guests who prefer extra space and a relaxed stay.",
  },
  {
    title: "Club Room",
    slug: "/rooms/club-room",
    image: "/1.webp",
    description: "Spacious and refined, offering added comfort and thoughtful conveniences.",
  },
  {
    title: "Suite Room (With Balcony)",
    slug: "/rooms/suite-room-with-balcony",
    image: "/1.webp",
    description: "A spacious and refined suite with a private balcony, perfect for guests who enjoy open views and an elevated stay experience.",
  },
  {
    title: "Suite Room (Without Balcony)",
    slug: "/rooms/suite-room-without-balcony",
    image: "/1.webp",
    description: "A spacious and elegant suite offering extra comfort and a calm, relaxing stay environment.",
  },
  {
    title: "Presidential Room",
    slug: "/rooms/presidential-room",
    image: "/1.webp",
    description: "Our most luxurious and spacious accommodation for a truly exceptional stay.",
  },
];
export default function KarwarPage() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Experience the Best of Karwar"
        description="Blessed with serene beaches, sacred temples and scenic coastal landscapes, Karwar is a peaceful seaside town where spirituality and nature come together perfect for a refreshing getaway."
        bookingBarLocations={["Karwar"]}
        bookingBarDefaultLocation="Karwar"
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

      <InTheKarwar />

      <ContentCarousel
        title="Everything You Need for a Comfortable Stay"
        description="From elegant in-room comforts to thoughtful property-wide amenities, Hotel Eden ensures a seamless and comfortable stay."
        items={amenities}
      />

      <Faq title="Frequently Asked Questions" description="" faqData={faqData} />

      <FeatureShowcase
        title="Discover Our Signature Dinner Offerings"
        description="Elevate your evenings with exclusive dinner offerings, including curated set menus and dining credits redeemable across our restaurants."
        buttonText="Explore"
        imageSrc="/1.webp"
        buttonLink="/dining"
      />
      <EventSpaces />
    </main>
  );
}
