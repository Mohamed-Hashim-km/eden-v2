"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "../ui/Button";

// Simple Minus/Plus Icons
const MinusIcon = () => (
  <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 1H1" stroke="#ACACAC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PlusIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 1V9M9 5H1" stroke="#ACACAC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L5 5L9 1" stroke="#ACACAC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface CounterProps {
  label: string;
  value: number;
  min?: number;
  onChange: (val: number) => void;
}

const Counter: React.FC<CounterProps> = ({ label, value, min = 0, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[#001446] mb-3 text-lg">{label}</span>
      <div className="flex items-center gap-4">
        <button
          onClick={() => Math.max(min, value - 1) !== value && onChange(Math.max(min, value - 1))}
          className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
          disabled={value <= min}
        >
          <MinusIcon />
        </button>
        <span className="w-4 text-center text-[#001446] text-sm ">{value}</span>
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

interface BookingBarProps {
  locations?: string[];
  defaultLocation?: string;
  enableLocationSelection?: boolean;
}

export const BookingBar: React.FC<BookingBarProps> = ({
  locations = ["Karwar", "Gokarna"],
  defaultLocation = "Karwar",
  enableLocationSelection = true,
}) => {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState(defaultLocation);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const locationRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (locationRef.current && !locationRef.current.contains(event.target as Node)) {
        setIsLocationOpen(false);
      }
    };

    if (isLocationOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLocationOpen]);

  const toggleLocation = () => {
    if (enableLocationSelection) {
      setIsLocationOpen(!isLocationOpen);
    }
  };

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
    setIsLocationOpen(false);
  };

  return (
    <div className="w-full container bg-[#FEFEFE] p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 rounded-sm">
      {/* Location */}
      <div className="relative flex flex-col gap-1 min-w-[180px] w-full md:w-auto border-b border-gray-200 pb-2" ref={locationRef}>
        <span className="text-[#001446] mb-3 text-lg tracking-wide">Location</span>
        <div
          className={`flex items-center justify-between group ${enableLocationSelection ? "cursor-pointer" : "cursor-default"}`}
          onClick={toggleLocation}
        >
          <span className="text-secondary text-sm transition-colors font-sans">{selectedLocation}</span>
          {enableLocationSelection && (
            <span className={`transform transition-transform duration-200 ${isLocationOpen ? "rotate-180" : ""}`}>
              <ChevronDownIcon />
            </span>
          )}
        </div>

        {/* Dropdown Menu */}
        {isLocationOpen && enableLocationSelection && (
          <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-100 shadow-lg rounded-md overflow-hidden z-50">
            {locations.map((loc) => (
              <div
                key={loc}
                className="px-4 py-3 text-sm text-[#001446] hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={() => handleLocationSelect(loc)}
              >
                {loc}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Check-In/Check-Out */}
      <div className="flex flex-col gap-1 min-w-[220px] w-full md:w-auto border-b border-gray-200 pb-2">
        <span className="text-[#001446] mb-3 text-lg tracking-wide">Check-In/Check-Out</span>
        <div className="flex items-center justify-between cursor-pointer group">
          <span className="text-secondary text-sm transition-colors font-sans">Select Dates</span>
          <ChevronDownIcon />
        </div>
      </div>

      {/* Adults */}
      <div className="w-full md:w-auto flex justify-between md:block border-b md:border-none border-gray-200 pb-2 md:pb-0">
        <Counter label="Adults" value={adults} min={1} onChange={setAdults} />
      </div>

      {/* Children */}
      <div className="w-full md:w-auto flex justify-between md:block border-b md:border-none border-gray-200 pb-2 md:pb-0">
        <Counter label="Children" value={children} min={0} onChange={setChildren} />
      </div>

      {/* Check Availability Button */}
      <Button variant="tertiary">Check Availability</Button>
    </div>
  );
};
