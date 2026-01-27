import React from "react";

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
import {  ContentGridCarousel } from "@/components/shared/ContentGrid";
import Faq from "@/components/shared/Faq";
import { FeatureShowcase } from "@/components/shared/FeatureShowcase";
import { Hero } from "@/components/rooms/Hero";
import GalleryOne from "@/components/shared/GalleryOne";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { ImageCtaSection } from "@/components/shared/ImageCtaSection";
import OtherRooms from "@/components/rooms/OtherRooms";

const amenities = [
   
    { id: 2, image:"/1.webp", title: "Hotel Tulip", description: "Tulip is a fine-dine multi-cuisine restaurant offering Pan-Indian, Oriental and Continental dishes, crafted with premium ingredients." },
    { id: 3, image:"/1.webp", title: "Hotel Tulip", description: "The Golden Leaf Spa offers a curated wellness experience with relaxation therapies, beauty, and grooming, providing everyday luxury and complete rejuvenation." },
    { id: 4, image:"/1.webp", title: "Bonfire", description: "Bonfire is an exquisite outdoor lounge where guests can enjoy curated drinks, gourmet bites and a warm, inviting fire under the stars." },
]

const faqData=[
    {
      "id": 1,
      "question": "How far is Ember Castle from Gokarna Main Beach?",
      "answer": "It’s approximately 2.6 km, making beach visits quick and easy."
    },
    {
      "id": 2,
      "question": "Is parking available?",
      "answer": "Yes, the property offers free private parking on site."
    },
    {
      "id": 3,
      "question": "Does the property have dining options?",
      "answer": "Yes, an on-site restaurant serves meals including buffet breakfast with local specialties. "
    },
    {
      "id": 4,
      "question": "Are there activities onsite?",
      "answer": "Guests can enjoy the pool, garden areas, spa facilities, and fitness centre, making this a great pick for both relaxation and adventure."
    },
    {
      "id": 5,
      "question": "Do guests receive any complimentary benefits with their stay?",
      "answer": "Yes, guests are welcomed with a complimentary welcome drink and can enjoy free breakfast during their stay."
    }
  ]
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
        image:"/1.webp",
      title: "6-Bed Dormitory",
      slug: "/rooms/6-bed-dormitory",
      description: "A cozy, group-friendly dormitory offering essential comforts for a relaxed and convenient stay.",
    },
    {
        image:"/1.webp",
      title: "Premium Room",
      slug: "/rooms/premium-room",
      description: "Our most luxurious and spacious accommodation for a truly exceptional stay.",
    },
    {
        image:"/1.webp",
      title: "Suite Double Room",
      slug: "/rooms/suite-room-double",
      description: "The Suite Double Room features a spacious, elegantly designed interior with a comfortable double bed, modern amenities, and a relaxing atmosphere.",
    },
    {
        image:"/1.webp",
      title: "Suite Room",
      slug: "/rooms/suite-room",
      description: "An expansive suite with sophisticated decor and thoughtful amenities, designed for comfort and relaxation",
    },
    {
        image:"/1.webp",
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
   
    text:
      "Stayed for two days at the new Hotel Eden. Rooms are spacious with modern amenities, staff were polite and helpful, housekeeping was good, and breakfast was excellent. Great stay within budget.",
    
    rating: 5,
    
  },
  {
    id: 2,
    author: "Natalie Harper",
   
    text:
      "One of the nicest budget hotels I’ve stayed at in India. Staff were amazing, went out of their way to help, and the restaurant served delicious meals. It felt like a 5-star experience at a great price.",
   
    rating: 5,
    
  },
  {
    id: 3,
    author: "Umang Malhotra",
   
    text:
      "I loved my 1-night stay at Hotel Eden, Karwar. Spacious, comfortable rooms with cozy bathrooms, great breakfast buffet, and excellent staff service. Affordable and highly recommended.",
   
    rating: 5,
    
  },
];
export default function GokarnaPage() {
  return (
    <main className="min-h-screen">
      <Hero title="10‑Bed Dormitory" description="Spacious and thoughtfully designed, this dormitory offers a comfortable shared stay for groups, complete with modern amenities and privacy-focused facilities."  />
        {/* specefic amanitles want to add futrue  */}
        <GalleryOne galleryImages={galleryImages} />
         
        <TestimonialSection title="Testimonials" reviews={testimonialData}/>
          
           <ImageCtaSection
                backgroundImage="/1.webp"
                title="Book Your Stay Now"
                buttonText="Book Now"
                buttonLink="/karwar"
                
              />

              <OtherRooms title={"Other Rooms"} data={rooms} />
    </main>
  );
}
