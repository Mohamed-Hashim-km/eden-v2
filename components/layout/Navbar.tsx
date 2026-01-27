import React from "react";
import Link from "next/link";
import { Button } from "../ui/Button";

// Simple SVG Icons
const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

export const Navbar = () => {
  return (
    <header className="w-full bg-[#001446] text-[#FAF5EB] flex flex-col items-center">
      {/* Top Row */}
      <div className="w-full max-w-[1440px] px-8 py-6 flex justify-between items-center relative border-b border-[#FAF5EB]/10">
        {/* Left Actions */}
        <div className="flex items-center gap-6 z-10">
          <button className="text-sm uppercase tracking-widest hover:opacity-80 font-sans">En</button>
          <button className="hover:opacity-80">
            <MailIcon />
          </button>
        </div>

        {/* Logo (Centered) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="text-sm tracking-[0.2em] uppercase mb-1 font-serif opacity-80">Hotel</h2>
          <h1 className="text-5xl font-serif tracking-wide">EDEN</h1>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6 z-10">
          <button className="hover:opacity-80">
            <SearchIcon />
          </button>
          <Button variant="primary">Book Now</Button>
        </div>
      </div>

      {/* Bottom Row: Navigation */}
      <nav className="w-full flex justify-center py-6">
        <div className="flex items-center gap-12 text-lg font-sans">
          <Link href="/dining" className="hover:opacity-80 transition-opacity">
            Dining
          </Link>
          <Link href="/spa" className="hover:opacity-80 transition-opacity">
            Spa
          </Link>
          <Link href="/events" className="hover:opacity-80 transition-opacity">
            Events
          </Link>
          <Link href="/contact" className="hover:opacity-80 transition-opacity">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};
