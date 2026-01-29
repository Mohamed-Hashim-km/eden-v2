import Dining from "@/components/dining/Dining";
import DiningPhilosophy from "@/components/dining/DiningPhilosophy";
import DiningSection from "@/components/dining/DiningSection";
import Overview from "@/components/dining/Overview";
import { DishSection } from "@/components/dining/subPage/DishSection";
import { OtherDiningOptions } from "@/components/dining/subPage/OtherDiningOptions";
import { Hero } from "@/components/rooms/Hero";
import RoomGalleryCarousel from "@/components/rooms/RoomGalleryCarousel";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
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

const diningOptions = [
  {
    title: "Tulip – The Gourmet Restaurant",
    description: "Refined multi-cuisine dining in an elegant setting, where thoughtfully crafted flavours and warm service come together.",
    image: "/1.webp",
  },
  {
    title: "Food & Forest – Rooftop",
    description: "A relaxed rooftop experience with great views, food and crafted cocktails perfect for laid-back evenings.",
    image: "/1.webp",
  },
  {
    title: "Oyster Bar",
    description: "Fresh coastal flavours served by the coast, serving celebrate traditions and fresh catches.",
    image: "/1.webp",
  },
  {
    title: "In-Room Dining",
    description: "Enjoy our gourmet offerings in the comfort of your room with our 24/7 service.",
    image: "/1.webp",
  },
  {
    title: "The Vintage Lounge",
    description: "Classic spirits and fine cigars in a sophisticated, leather-bound atmosphere.",
    image: "/1.webp",
  },
  {
    title: "Tulip – The Gourmet Restaurant",
    description: "Refined multi-cuisine dining in an elegant setting, where thoughtfully crafted flavours and warm service come together.",
    image: "/1.webp",
  },
  {
    title: "Food & Forest – Rooftop",
    description: "A relaxed rooftop experience with great views, food and crafted cocktails perfect for laid-back evenings.",
    image: "/1.webp",
  },
  {
    title: "Oyster Bar",
    description: "Fresh coastal flavours served by the coast, serving celebrate traditions and fresh catches.",
    image: "/1.webp",
  },
  {
    title: "In-Room Dining",
    description: "Enjoy our gourmet offerings in the comfort of your room with our 24/7 service.",
    image: "/1.webp",
  },
  {
    title: "The Vintage Lounge",
    description: "Classic spirits and fine cigars in a sophisticated, leather-bound atmosphere.",
    image: "/1.webp",
  },
];
const page = () => {
  return (
    <div>
      <Hero title="Tulip" description="A thoughtfully curated dining experience designed for complete relaxation and renewal." />
      <DishSection
        title="Tulip – Fine Dine Multi-Cuisine"
        description="Tulip is a contemporary fine-dining restaurant offering a refined selection of Indian and global cuisine in an elegant, modern setting. Thoughtfully curated menus and attentive service come together to create a dining experience that is both sophisticated and memorable."
        data={diningOptions}
      />
      <RoomGalleryCarousel images={galleryImages} title="Gallery" />
      <TestimonialSection
        title="What Our Guests Love About Us"
        subtitle="From authentic guest experiences and cherished memories, discover why Hotel Eden is the perfect choice for your stay."
        reviews={[
          {
            text: "I stayed at Hotel Eden, Karwar for two nights and had a great experience. The rooms were spacious, clean, and well-equipped, the service was quick and helpful, and the right food, including the complimentary breakfast, was excellent. I would definitely recommend this hotel to anyone visiting the city.",
            author: "Singh",
            rating: 5,
          },
          {
            text: "An absolutely wonderful stay. The attention to detail in the room design and the warmth of the staff made our anniversary trip unforgettable. The dining options were superb, offering a true taste of local flavors.",
            author: "Aditi R.",
            rating: 5,
          },
          {
            text: "Perfect location and exceptional service. The team went above and beyond to ensure we were comfortable. Highly recommend for both business and leisure travelers.",
            author: "James T.",
            rating: 4,
          },
        ]}
      />
      <OtherDiningOptions data={diningOptions} title="" />
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
