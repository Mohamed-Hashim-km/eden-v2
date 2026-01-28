"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// --- ICONS (Styled to match the image thin/clean look) ---

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MinusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.57A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

// --- COMPONENT ---

export const Footer = () => {
  // Set to true by default to match the provided screenshot where "Karwar/Gokarna" are visible
  const [destinationsOpen, setDestinationsOpen] = useState(true);

  return (
    <footer className="bg-[#020412] text-white pt-20 pb-8 font-sans antialiased">
      <div className="container mx-auto px-6 lg:px-16">
        
        {/* 1. Logo Section */}
        <div className="mb-16">
           {/* Replace with your actual Logo */}
           {/* If you don't have the exact SVG, this text acts as a placeholder or use <Image> */}
           <div className="flex flex-col">
              <span className="text-sm tracking-[0.2em] uppercase font-light text-gray-300 ml-1">Hotel</span>
              <h1 className="text-4xl font-serif tracking-wide text-white">ÉDEN</h1>
           </div>
        </div>

        {/* 2. Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
          
          {/* Left Column: Contact Info Groups (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-12">
            {/* Bookings */}
            <div>
              <h3 className="text-2xl font-serif mb-6 tracking-wide text-white">For Bookings Contact</h3>
              <div className="flex flex-col gap-2">
                <p className="text-lg font-normal text-gray-200">1-800-111-825</p>
                <p className="text-sm font-light text-gray-400">reservations@edenhotel.com</p>
              </div>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-2xl font-serif mb-6 tracking-wide text-white">Customer Support</h3>
              <div className="grid grid-cols-1 gap-2 text-sm font-light text-gray-300">
                <p>contact@edenhotel.com</p>
                <p>website.feedback@edenhotel.com</p>
              </div>
            </div>
          </div>

          {/* Middle Column: Navigation Links (Span 3 - Offset slightly) */}
          {/* The image shows these aligned somewhat centrally but left-justified in their column */}
          <div className="lg:col-span-4 lg:col-start-6">
            <nav className="flex flex-col gap-4 text-[15px] font-light text-gray-300">
              <Link href="#" className="hover:text-[#D4AF37] transition-colors w-max">Dining</Link>
              <Link href="#" className="hover:text-[#D4AF37] transition-colors w-max">Spa</Link>
              <Link href="#" className="hover:text-[#D4AF37] transition-colors w-max">Event Spaces</Link>
              <Link href="#" className="hover:text-[#D4AF37] transition-colors w-max">Karwar</Link>
              <Link href="#" className="hover:text-[#D4AF37] transition-colors w-max">Gokarna</Link>
              <div className="h-2"></div> {/* Spacer to match image visual gap */}
              <Link href="#" className="hover:text-[#D4AF37] transition-colors w-max">About Us</Link>
              <Link href="#" className="hover:text-[#D4AF37] transition-colors w-max">Contact Us</Link>
            </nav>
          </div>

          {/* Right Column: Contact Details & Socials (Span 3) */}
          <div className="lg:col-span-3 lg:col-start-10 flex flex-col items-start lg:items-end text-right">
            <div className="flex flex-col gap-4 mb-10 text-sm font-light text-gray-300 w-full lg:items-end">
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

            <div className="flex gap-3">
               {/* Social Icons - White bg with black icon */}
              <Link href="#" className="bg-white text-black w-8 h-8 flex items-center justify-center rounded hover:bg-[#D4AF37] transition-colors">
                 <InstagramIcon />
              </Link>
              <Link href="#" className="bg-white text-black w-8 h-8 flex items-center justify-center rounded hover:bg-[#D4AF37] transition-colors">
                 <FacebookIcon />
              </Link>
              <Link href="#" className="bg-white text-black w-8 h-8 flex items-center justify-center rounded hover:bg-[#D4AF37] transition-colors">
                 <LinkedinIcon />
              </Link>
            </div>
          </div>
        </div>

        {/* 3. Destinations Accordion */}
        <div className="border-t border-white/10 border-b border-white/10 mb-10">
          <button
            onClick={() => setDestinationsOpen(!destinationsOpen)}
            className="w-full flex justify-between items-center py-6 group outline-none"
          >
            <span className="text-xl font-serif tracking-wide text-white group-hover:text-gray-300 transition-colors">Destinations</span>
            <span className="text-white">{destinationsOpen ? <MinusIcon /> : <PlusIcon />}</span>
          </button>
          
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${destinationsOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="pb-8 flex flex-col gap-3 pl-0 text-sm font-light text-gray-300">
               {/* Indentation logic or visual structure based on image */}
               <Link href="#" className="hover:text-white transition-colors">Karwar</Link>
               <Link href="#" className="hover:text-white transition-colors">Gokarna</Link>
            </div>
          </div>
        </div>

        {/* 4. Our Brands Section */}
        <div className="flex flex-col lg:flex-row items-center border-b border-white/10 pb-8 mb-8">
          <h4 className="text-xl font-serif text-white lg:mr-auto mb-8 lg:mb-0">Our Brands</h4>
          
          <div className="flex flex-wrap justify-center lg:justify-end gap-x-8 gap-y-6 items-center w-full lg:w-auto">
             {/* For the logos: The layout expects SVG/Images. 
                 Using grayscale/brightness filters helps ensure mismatched logos look uniform and white 
             */}
             <div className=" relative opacity-80 w-auto h-auto hover:opacity-100 transition-opacity">
                {/* Replace src with your actual brand logo paths */}
                <Image src="/svgs/brands/terminal.svg" alt="Terminal 5" fill className="object-contain brightness-0 invert" />
             </div>
             <div className=" relative w-auto h-auto opacity-80 hover:opacity-100 transition-opacity">
                <Image src="/svgs/brands/tulip.svg" alt="Tulip" fill className="object-contain brightness-0 invert" />
             </div>
             <div className=" relative opacity-80 w-auto h-auto hover:opacity-100 transition-opacity">
                <Image src="/svgs/brands/oyster.svg" alt="Oyster Bay" fill className="object-contain brightness-0 invert" />
             </div>
             <div className=" relative opacity-80 w-auto h-auto hover:opacity-100 transition-opacity">
                <Image src="/svgs/brands/food.svg" alt="Food Forest" fill className="object-contain brightness-0 invert" />
             </div>
             <div className=" relative opacity-80 w-auto h-auto hover:opacity-100 transition-opacity">
                <Image src="/svgs/brands/golden.svg" alt="The Golden Leaf" fill className="object-contain brightness-0 invert" />
             </div>
          </div>
        </div>

        {/* 5. Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[11px] font-light text-gray-500 tracking-wide">
          <p className="mb-4 md:mb-0 text-center md:text-left">
            Copyright © 2026-27 Milan Hospitality and Management Services. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
            <span>|</span>
            <Link href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};