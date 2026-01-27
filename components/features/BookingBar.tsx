"use client";

import React, { useState } from "react";
import { Button } from "../ui/Button";

// Simple Minus/Plus Icons
const MinusIcon = () => (
  <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 1H1" stroke="#ACACAC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PlusIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 1V9M9 5H1" stroke="#ACACAC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronDownIcon = () => (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L5 5L9 1" stroke="#ACACAC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)


interface CounterProps {
  label: string;
  value: number;
  min?: number;
  onChange: (val: number) => void;
}

const Counter: React.FC<CounterProps> = ({ label, value, min = 0, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[#001446] font-serif text-lg">{label}</span>
      <div className="flex items-center gap-4">
        <button
          onClick={() => Math.max(min, value - 1) !== value && onChange(Math.max(min, value - 1))}
          className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
          disabled={value <= min}
        >
          <MinusIcon />
        </button>
        <span className="w-4 text-center text-sm font-sans">{value}</span>
        <button
          onClick={() => onChange(value + 1)}
          className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <PlusIcon />
        </button>
      </div>
    </div>
  );
};

export const BookingBar = () => {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  return (
    <div className="w-full max-w-[1100px] bg-white shadow-xl p-8 flex flex-wrap items-center justify-between gap-8 relative z-20 -mt-16 mx-auto">
      {/* Location */}
      <div className="flex flex-col gap-2 min-w-[200px] border-b border-gray-200 pb-2">
        <span className="text-[#001446] font-serif text-lg">Location</span>
        <div className="flex items-center justify-between cursor-pointer group">
            <span className="text-[#ACACAC] text-sm group-hover:text-gray-600 transition-colors">Gokarna</span>
            <ChevronDownIcon />
        </div>
      </div>

      {/* Check-In/Check-Out */}
      <div className="flex flex-col gap-2 min-w-[200px] border-b border-gray-200 pb-2">
        <span className="text-[#001446] font-serif text-lg">Check-In/Check-Out</span>
         <div className="flex items-center justify-between cursor-pointer group">
            <span className="text-[#ACACAC] text-sm group-hover:text-gray-600 transition-colors">SelectDates</span>
            <ChevronDownIcon />
        </div>
      </div>

      {/* Adults */}
      <Counter label="Adults" value={adults} min={1} onChange={setAdults} />

      {/* Children */}
      <Counter label="Children" value={children} min={0} onChange={setChildren} />

      {/* Check Availability Button */}
      <Button 
        className="bg-[#5B6378] hover:bg-[#4a5163] text-white px-8 py-3 h-auto"
        // Note: The image shows a bluish-grey color for this button, seemingly different from the Navbar button (Primary). 
        // Using a custom class to match the image, or could add a variant to Button.
      >
        Check Availability
      </Button>
    </div>
  );
};
