import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import RoomsShowcase from "@/components/sections/RoomsShowcase";
import RoomOne from "@/components/sections/RoomOne";
import { DiningShowcase } from "@/components/sections/DiningShowcase";
import EventShowcase from "@/components/sections/EventShowcase";
import Faq from "@/components/shared/Faq";
import { ImageCtaSection } from "@/components/shared/ImageCtaSection";
import GalleryOne from "@/components/shared/GalleryOne";
const faqData = [
  {
    id: 1,
    question: "What kind of hotel is Hotel Eden?",
    answer: "A designer boutique hotel in Karwar offering stays, dining, wellness, and event spaces.",
  },
  {
    id: 2,
    question: "Who is Hotel Eden ideal for?",
    answer: "Perfect for families, couples, and business travellers.",
  },
  {
    id: 3,
    question: "What dining options are available?",
    answer: "Three in-house restaurants: Tulip, Food & Forest and Oyster Bay.",
  },
  {
    id: 4,
    question: "Do you have spa and wellness facilities?",
    answer: "Yes, we have The Golden Leaf Spa along with fitness and recreation facilities.",
  },
  {
    id: 5,
    question: "Can I host events at Hotel Eden?",
    answer: "Yes, we offer banquet and conference spaces for events and celebrations.",
  },
  {
    id: 6,
    question: "Are the hotels affordable?",
    answer: "Both properties offer a great balance of comfort, facilities, and value for money, ensuring a luxurious experience without compromise.",
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

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero bookingBarLocations={["Karwar", "Gokarna"]} bookingBarDefaultLocation="Karwar" />
      <AboutSection />
      <RoomOne className={""} />
      <RoomsShowcase />
      <GalleryOne
        galleryImages={galleryImages}
        cta="Explore All Restaurants"
        title={"A Culinary Experience for Every Mood"}
        description={
          "From fine dining and rooftop indulgence to the freshest coastal flavours, Hotel Eden brings you three distinctive dining destinations under one roof."
        }
      />
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
      <EventShowcase
        title="Signature Spaces For Every Occasion"
        description="From elegant receptions, private celebrations, professional conferences and corporate meetings, Hotel Eden offers thoughtfully designed event spaces that adapt to your vision."
        buttonText="Explore Event Spaces"
        buttonLink="/events"
        imageSrc="/1.webp"
      />
      <Faq
        faqData={faqData}
        title="Everything You Need to Know"
        description=" Essential information to help you enjoy a seamless stay at Hotel Eden."
      />

      <DiningShowcase title="" description="" cta="Explore All Restaurants" />
      <ImageCtaSection
        backgroundImage="/1.webp"
        title="Your perfect stay in Karwar is
just a moment away."
        buttonText="Explore"
        buttonLink="/karwar"
      />
    </main>
  );
}
