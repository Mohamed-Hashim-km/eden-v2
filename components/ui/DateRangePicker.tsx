"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../ui/Button";

interface DateRangePickerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (start: Date | null, end: Date | null) => void;
  initialStart?: Date | null;
  initialEnd?: Date | null;
}

const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DAYS = ["S", "M", "T", "W", "T", "F", "S"];

export const DateRangePicker: React.FC<DateRangePickerProps> = ({ 
  isOpen, 
  onClose, 
  onSelect, 
  initialStart = null, 
  initialEnd = null 
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [startDate, setStartDate] = useState<Date | null>(initialStart);
  const [endDate, setEndDate] = useState<Date | null>(initialEnd);
  const [hoverDate, setHoverDate] = useState<Date | null>(null);

  useEffect(() => {
    if (initialStart) setStartDate(initialStart);
    if (initialEnd) setEndDate(initialEnd);
  }, [initialStart, initialEnd]);

  if (!isOpen) return null;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  const prevMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    if (newDate < new Date(today.getFullYear(), today.getMonth(), 1)) return;
    setCurrentDate(newDate);
  };

  const handleDateClick = (date: Date) => {
    if (date < today) return;
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else {
      if (date < startDate) {
        setStartDate(date);
      } else {
        setEndDate(date);
        onSelect(startDate, date);
      }
    }
  };

  const renderCalendar = (year: number, month: number) => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const blanks = Array(firstDay).fill(null);
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    return (
      <div className="w-full">
        <div className="text-center font-medium text-[#001446] mb-4 text-lg">
          {MONTH_NAMES[month]} {year}
        </div>
        <div className="grid grid-cols-7 mb-2">
          {DAYS.map((d, i) => (
            <div key={i} className="text-center text-xs font-semibold text-[#001446]">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-y-1">
          {blanks.map((_, i) => <div key={`blank-${i}`} />)}
          {days.map((day) => {
            const date = new Date(year, month, day);
            const isSelectedStart = startDate?.getTime() === date.getTime();
            const isSelectedEnd = endDate?.getTime() === date.getTime();
            const isInRange = startDate && endDate && date > startDate && date < endDate;
            const isHovered = startDate && !endDate && hoverDate && date > startDate && date <= hoverDate;
            const isDisabled = date < today;

            let bgClass = "bg-white";
            let textClass = "text-[#001446]";

            if (isSelectedStart || isSelectedEnd) {
              bgClass = "bg-[#001446] text-white rounded-md";
              textClass = "text-white";
            } else if (isInRange || isHovered) {
              bgClass = "bg-[#E6F0FA]";
            }

            return (
              <div
                key={day}
                className={`relative flex flex-col items-center justify-center py-3 cursor-pointer transition-colors ${bgClass} ${isDisabled ? "opacity-30 cursor-not-allowed" : "hover:bg-gray-100"}`}
                onClick={() => !isDisabled && handleDateClick(date)}
                onMouseEnter={() => !isDisabled && setHoverDate(date)}
                onMouseLeave={() => setHoverDate(null)}
              >
                <div className={`text-sm font-medium ${textClass}`}>{day}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    /* CHANGE: Removed 'w-full'. 
       Using 'left-0 right-0' pins it to the BookingBar edges.
       'overflow-x-auto' ensures that if the BookingBar is too small for 2 calendars, 
       it scroll internally rather than pushing the BookingBar's width.
    */
    <div className="absolute top-full left-0 right-0 mt-4 bg-white  rounded-sm  p-8 z-[60] flex flex-col animate-in fade-in zoom-in-95 duration-200 overflow-x-auto min-w-0">
      <div className="flex gap-4 mb-8 min-w-[600px]">
        <div className={`flex-1 border-b-2 pb-2 text-center transition-colors ${!endDate ? "border-[#001446]" : "border-gray-200"}`}>
          <div className="text-gray-500 text-xs mb-1">Check-In Date</div>
          <div className="text-lg font-medium text-[#001446]">{startDate ? startDate.toLocaleDateString() : "-"}</div>
        </div>
        <div className={`flex-1 border-b-2 pb-2 text-center transition-colors ${startDate && !endDate ? "border-[#001446]" : "border-gray-200"}`}>
          <div className="text-gray-500 text-xs mb-1">Check-Out Date</div>
          <div className="text-lg font-medium text-[#001446]">{endDate ? endDate.toLocaleDateString() : "-"}</div>
        </div>
      </div>

      <div className="flex relative min-w-[600px]">
        <button onClick={prevMonth} className="absolute left-0 top-2 p-2 hover:bg-gray-100 rounded-full z-10" disabled={currentDate <= new Date(today.getFullYear(), today.getMonth(), 1)}>
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none" className="transform rotate-180">
            <path d="M1 9L5 5L1 1" stroke="#ACACAC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="grid grid-cols-2 gap-12 w-full px-8">
          {renderCalendar(currentDate.getFullYear(), currentDate.getMonth())}
          {renderCalendar(
            currentDate.getMonth() === 11 ? currentDate.getFullYear() + 1 : currentDate.getFullYear(),
            currentDate.getMonth() === 11 ? 0 : currentDate.getMonth() + 1,
          )}
        </div>

        <button onClick={nextMonth} className="absolute right-0 top-2 p-2 hover:bg-gray-100 rounded-full z-10">
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
            <path d="M1 9L5 5L1 1" stroke="#ACACAC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="mt-6 flex justify-end">
        <Button variant="tertiary" className="text-xs py-2 px-4" onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  );
};