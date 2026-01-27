"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// --- ICONS ---
const FacebookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" />
    <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7616 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const PlusIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MinusIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.57A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const MapPinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

// --- COMPONENT ---

export const Footer = () => {
  const [destinationsOpen, setDestinationsOpen] = useState(false);

  return (
    <footer className="bg-[#000510] text-white pt-16 pb-6 font-sans">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* 1. Logo Section */}
        <div className="mb-14">
          <Image 
            src="/svgs/edenFooter.svg" 
            alt="Hotel Eden Logo" 
            width={180} 
            height={80} 
            className="object-contain"
          />
        </div>

        {/* 2. Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
          
          {/* Left Column: Bookings & Support (Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            {/* Bookings */}
            <div>
              <h3 className="text-2xl font-serif mb-4 tracking-wide">For Bookings Contact</h3>
              <div className="flex flex-col gap-1">
                <p className="text-lg font-medium opacity-90">1-800-111-825</p>
                <p className="text-sm opacity-70">reservations@edenhotel.com</p>
              </div>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-2xl font-serif mb-4 tracking-wide">Customer Support</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm opacity-70">
                <p>contact@edenhotel.com</p>
                <p>website.feedback@edenhotel.com</p>
              </div>
            </div>
          </div>

          {/* Middle Column: Navigation Links (Span 3 - Centered Area) */}
          <div className="lg:col-span-3">
            <nav className="flex flex-col gap-3 text-sm opacity-80">
              <Link href="#" className="hover:text-[#D4AF37] transition-colors w-max">Dining</Link>
              <Link href="#" className="hover:text-[#D4AF37] transition-colors w-max">Spa</Link>
              <Link href="#" className="hover:text-[#D4AF37] transition-colors w-max">Event Spaces</Link>
              <Link href="#" className="hover:text-[#D4AF37] transition-colors w-max">Karwar</Link>
              <Link href="#" className="hover:text-[#D4AF37] transition-colors w-max">Gokarna</Link>
              <Link href="#" className="hover:text-[#D4AF37] transition-colors w-max mt-4">About Us</Link>
              <Link href="#" className="hover:text-[#D4AF37] transition-colors w-max">Contact Us</Link>
            </nav>
          </div>

          {/* Right Column: Contact Info & Socials (Span 4 - Right Aligned) */}
          <div className="lg:col-span-4 lg:flex lg:flex-col lg:items-end">
            <div className="flex flex-col gap-4 mb-8 text-sm opacity-80 w-full lg:w-auto">
              <div className="flex items-center gap-3">
                <PhoneIcon />
                <span>+91 9376537253</span>
              </div>
              <div className="flex items-center gap-3">
                <MailIcon />
                <span>eden@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPinIcon />
                <span>123 Street, California</span>
              </div>
            </div>

            <div className="flex gap-4">
               {/* Note: In Next.js/React, you usually wrap SVGs in a div or Link */}
              <Link href="#" className="bg-white text-black p-1.5 rounded hover:bg-[#D4AF37] transition-colors">
                 <InstagramIcon />
              </Link>
              <Link href="#" className="bg-white text-black p-1.5 rounded hover:bg-[#D4AF37] transition-colors">
                 <FacebookIcon />
              </Link>
              <Link href="#" className="bg-white text-black p-1.5 rounded hover:bg-[#D4AF37] transition-colors">
                 <LinkedinIcon />
              </Link>
            </div>
          </div>
        </div>

        {/* 3. Destinations Accordion */}
        <div className="border-t border-white/10 border-b border-white/10">
          <button
            onClick={() => setDestinationsOpen(!destinationsOpen)}
            className="w-full flex justify-between items-center py-5 group"
          >
            <span className="text-xl font-serif tracking-wide group-hover:opacity-80 transition-opacity">Destinations</span>
            <span>{destinationsOpen ? <MinusIcon /> : <PlusIcon />}</span>
          </button>
          
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${destinationsOpen ? "max-h-40 opacity-100 pb-5" : "max-h-0 opacity-0"}`}>
            <p className="text-sm opacity-70 pl-1">
              Karwar &nbsp;|&nbsp; Gokarna &nbsp;|&nbsp; Bangalore (Coming Soon)
            </p>
          </div>
        </div>

        {/* 4. Our Brands Section */}
        <div className="flex flex-col md:flex-row items-center py-8 border-b border-white/10 mb-8">
          <h4 className="text-xl font-serif min-w-max mr-auto md:mr-12 mb-6 md:mb-0">Our Brands</h4>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-8 md:gap-12 w-full opacity-90 items-center">
             {/* Using standard img tags for placeholders or Next Image if configured. 
                 Ensuring they are white/grayscale to match footer aesthetics */}
             <div className="h-8 relative w-24 grayscale brightness-0 invert">
                <Image src="/svgs/brands/terminal.svg" alt="Terminal 5" fill className="object-contain" />
             </div>
             <div className="h-10 relative w-24 grayscale brightness-0 invert">
                <Image src="/svgs/brands/tulip.svg" alt="Tulip" fill className="object-contain" />
             </div>
             <div className="h-10 relative w-24 grayscale brightness-0 invert">
                <Image src="/svgs/brands/oyster.svg" alt="Oyster Bay" fill className="object-contain" />
             </div>
             <div className="h-10 relative w-24 grayscale brightness-0 invert">
                <Image src="/svgs/brands/food.svg" alt="Food Forest" fill className="object-contain" />
             </div>
             <div className="h-10 relative w-24 grayscale brightness-0 invert">
                <Image src="/svgs/brands/golden.svg" alt="Golden Leaf" fill className="object-contain" />
             </div>
          </div>
        </div>

        {/* 5. Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs opacity-50 font-light">
          <p className="mb-4 md:mb-0 text-center md:text-left">
            Copyright © 2026-27 Milan Hospitality and Management Services. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:opacity-100 transition-opacity">Terms of Service</Link>
            <span>|</span>
            <Link href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};