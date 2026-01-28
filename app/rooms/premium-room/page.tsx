"use client";

import React from "react";
import { FaSnowflake, FaBath, FaPlug } from "react-icons/fa";
import { Hero } from "@/components/rooms/Hero";
import GalleryOne from "@/components/shared/GalleryOne";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { ImageCtaSection } from "@/components/shared/ImageCtaSection";
import OtherRooms from "@/components/rooms/OtherRooms";
import RoomDetails from "@/components/rooms/RoomDetails";

// Reusing existing data arrays where possible or defining new ones for the specific page
const rooms = [
  {
    image: "/1.webp",
    title: "6-Bed Dormitory",
    slug: "/rooms/6-bed-dormitory",
    description: "A cozy, group-friendly dormitory offering essential comforts for a relaxed and convenient stay.",
  },
  {
    image: "/1.webp",
    title: "Premium Room",
    slug: "/rooms/premium-room",
    description: "Our most luxurious and spacious accommodation for a truly exceptional stay.",
  },
  {
    image: "/1.webp",
    title: "Suite Double Room",
    slug: "/rooms/suite-room-double",
    description:
      "The Suite Double Room features a spacious, elegantly designed interior with a comfortable double bed, modern amenities, and a relaxing atmosphere.",
  },
  {
    image: "/1.webp",
    title: "Suite Room",
    slug: "/rooms/suite-room",
    description: "An expansive suite with sophisticated decor and thoughtful amenities, designed for comfort and relaxation",
  },
  {
    image: "/1.webp",
    title: "Suite Room With Loft",
    slug: "/rooms/suite-room-with-loft",
    description: "A stylish suite featuring a loft area, offering extra space and a unique, airy atmosphere for guests.",
  },
];

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

const testimonialData = [
  {
    id: 1,
    author: "Ravindra Tayalur",
    text: "Stayed for two days at the new Hotel Eden. Rooms are spacious with modern amenities, staff were polite and helpful, housekeeping was good, and breakfast was excellent. Great stay within budget.",
    rating: 5,
  },
  {
    id: 2,
    author: "Natalie Harper",
    text: "One of the nicest budget hotels I’ve stayed at in India. Staff were amazing, went out of their way to help, and the restaurant served delicious meals. It felt like a 5-star experience at a great price.",
    rating: 5,
  },
  {
    id: 3,
    author: "Umang Malhotra",
    text: "I loved my 1-night stay at Hotel Eden, Karwar. Spacious, comfortable rooms with cozy bathrooms, great breakfast buffet, and excellent staff service. Affordable and highly recommended.",
    rating: 5,
  },
];

export default function RoomPage() {
  return (
    <main className="min-h-screen">
      <Hero title="Premium Room" description="Our most luxurious and spacious accommodation for a truly exceptional stay." />

      <RoomDetails
        breadcrumbs={[{ label: "Hotel Eden", href: "/" }, { label: "Rooms", href: "/rooms" }, { label: "Premium Room" }]}
        title="Premium Room"
        description={[
          "With warm interiors and a thoughtfully designed layout, the Premium Room at Eden Ember Castle, Gokarna offers a calm and comfortable retreat. Soothing tones and a peaceful ambiance make it ideal for relaxing after a day exploring Gokarna's beaches and town. Designed for both leisure and short stays, the room balances comfort, functionality, and quiet elegance.",
          "The room is well-equipped with modern amenities to ensure a seamless stay, offering a comfortable bed, a well-appointed bathroom, and essential conveniences for everyday comfort. Whether you're unwinding indoors or preparing for your next outing, the Premium Room provides a welcoming space that feels both relaxed and refined.",
        ]}
        details={{
          view: "Features a simple property or courtyard view, ideal for a peaceful stay.",
          size: "240 sq. ft.",
          occupancy: "2 Adults",
          bedding: "1 Queen Bed",
        }}
        amenities={[
          { icon: <FaSnowflake />, label: "Air-Conditioning" },
          { icon: <FaBath />, label: "Attached Bathroom" },
          { icon: <FaPlug />, label: "Power Backup" },
        ]}
        extraAmenitiesCount={3}
      />

      <GalleryOne galleryImages={galleryImages} title="Gallery" description="Explore the elegance and comfort of our Premium Room." cta="" />

      <TestimonialSection title="Testimonials" subtitle="Read what our guests have to say about their stay." reviews={testimonialData} />

      <ImageCtaSection backgroundImage="/1.webp" title="Book Your Stay Now" buttonText="Book Now" buttonLink="/karwar" />

      <OtherRooms title={"Other Rooms"} description="Explore other accommodation options at Eden Ember Castle." data={rooms} />
    </main>
  );
}
