import CelebrationsList from "@/components/events/CelebrationsList";
import { Hero } from "@/components/events/Hero";
import WhatToExpect from "@/components/events/WhatToExpect";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import GalleryOne from "@/components/shared/GalleryOne";
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
    author: "IP Das",

    text: "We went to Hotel Eden to organize a buffet party for friends and family. The staff was really helpful. The service was very nice during the event. The room is spacious and ACs were working and would definitely book again for a future event.",

    rating: 5,
  },
  {
    author: "Joseph Dias",

    text: "We celebrated our daughter's first holy communion here in the hotel hall. The arrangements and food was on the mark and a special mention to the team for making this event a success",

    rating: 5,
  },
  {
    author: "Akshat Nagar",

    text: " It happened to celebrate my kid's first birthday at Eden. The venue was really good and the team took care of all the details and requirements. The food and the cake with its ",

    rating: 5,
  },
];
export default function RoomPage() {
  return (
    <div>
      <Hero
        title="A Destination for Your Finest Celebrations"
        description="Terminal 5 offers both an elegant indoor hall for intimate gatherings and a spacious open rooftop venue with stunning panoramic views of Karwar, making it ideal for everything from private celebrations to grand corporate events."
      />
      <CelebrationsList/>
      <WhatToExpect />
      <GalleryOne
        title="Gallery"
        description="A glimpse of Terminal 5, where elegant indoor spaces and stunning rooftop views create unforgettable celebrations"
        cta=""
        galleryImages={galleryImages}
      />
      <TestimonialSection title="Testimonial" reviews={testimonialData} />
    </div>
  );
}
