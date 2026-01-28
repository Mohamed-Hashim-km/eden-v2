import React from "react";
import Link from "next/link";
import { Button } from "../ui/Button";
import Image from "next/image";

// ... (Icons kept as provided) ...
const Phone = () => (
  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.3547 15.6569C17.3547 15.6569 16.2573 16.7346 15.9884 17.0506C15.5504 17.5181 15.0342 17.7388 14.3576 17.7388C14.2926 17.7388 14.2232 17.7388 14.1581 17.7345C12.87 17.6522 11.6729 17.1502 10.7751 16.7216C8.32023 15.5357 6.16463 13.8519 4.37335 11.7181C2.89436 9.93911 1.90547 8.29433 1.25055 6.52836C0.847192 5.4506 0.699727 4.6109 0.764785 3.81881C0.808157 3.31239 1.00333 2.89254 1.36332 2.53328L2.84231 1.05731C3.05484 0.858209 3.28037 0.75 3.50157 0.75C3.77482 0.75 3.99601 0.914478 4.13481 1.05299C4.13914 1.05731 4.14348 1.06164 4.14782 1.06597C4.41239 1.31269 4.66395 1.56806 4.92852 1.84075C5.06297 1.97925 5.20176 2.11776 5.34055 2.2606L6.52462 3.44224C6.98436 3.90105 6.98436 4.32523 6.52462 4.78403C6.39884 4.90955 6.27739 5.03508 6.15161 5.15627C5.78729 5.52851 6.07349 5.24289 5.69615 5.58051C5.68747 5.58916 5.6788 5.59349 5.67446 5.60215C5.30146 5.97439 5.37086 6.33797 5.44893 6.58468C5.45326 6.59767 5.4576 6.61065 5.46194 6.62364C5.76988 7.36812 6.2036 8.06931 6.86286 8.90469L6.8672 8.90901C8.06427 10.3807 9.3264 11.5277 10.7187 12.4063C10.8965 12.5189 11.0786 12.6098 11.2521 12.6963C11.4083 12.7742 11.5557 12.8478 11.6815 12.9257C11.6989 12.9344 11.7162 12.9474 11.7336 12.956C11.881 13.0296 12.0198 13.0642 12.1629 13.0642C12.5229 13.0642 12.7485 12.8392 12.8222 12.7656L13.6724 11.9172C13.8198 11.77 14.054 11.5925 14.3273 11.5925C14.5962 11.5925 14.8174 11.7613 14.9518 11.9085C14.9562 11.9128 14.9562 11.9128 14.9605 11.9172L17.3503 14.3021C17.7971 14.7436 17.3547 15.6569 17.3547 15.6569Z" stroke="#FAF5EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
);
const WhatsApp = () => (
  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.51758 3.42188C7.43479 -0.471899 13.761 -0.47378 17.6807 3.41602C19.5 5.32663 20.5935 7.81989 20.4941 10.3887L20.4932 10.3984V10.4082C20.4932 15.8969 16.0785 20.2898 10.5498 20.29C8.94597 20.29 7.33764 19.8917 5.8252 19.0898L5.65332 18.999L5.46387 19.0479L0.712891 20.2949L1.95898 15.7852L2.01367 15.585L1.91211 15.4053C-0.299936 11.5072 0.30516 6.61525 3.51758 3.42188ZM18.0967 5.13965C15.3355 1.233 9.9669 -0.0453429 5.74414 2.64551C1.40368 5.41146 0.0628238 10.9561 2.73633 15.3857L2.74316 15.3955L2.75 15.4062L2.83301 15.5312L2.04883 18.458L1.82715 19.2852L2.65625 19.0723L5.71094 18.2881L5.84277 18.376L5.8623 18.3887L5.88281 18.3994C7.31778 19.1675 8.87539 19.6123 10.5498 19.6123C12.343 19.6122 14.0145 19.0552 15.4521 18.1758C19.8123 15.5085 21.0309 9.84716 18.3594 5.53125L18.3564 5.52539L18.0967 5.13965ZM7.35059 6.08398C7.37108 6.14486 7.39568 6.24134 7.41699 6.38965L7.42578 6.44922L7.44824 6.50488C7.5552 6.7707 7.74145 7.22091 7.91504 7.61914C8.00163 7.81779 8.08677 8.00828 8.1582 8.15723C8.19358 8.23099 8.2286 8.29959 8.25977 8.35645C8.26623 8.36823 8.27324 8.38039 8.28027 8.39258L8.25586 8.41797V8.58105C8.25278 8.58863 8.24902 8.5987 8.24316 8.61035C8.23387 8.62883 8.22238 8.64644 8.21191 8.66211C8.07686 8.75002 7.97871 8.85298 7.91113 8.93359C7.87038 8.98222 7.83096 9.03373 7.80859 9.0625C7.7958 9.07895 7.78667 9.09081 7.7793 9.09961C7.77439 9.10546 7.77147 9.10834 7.77051 9.10938C7.58651 9.29229 7.32842 9.73102 7.57129 10.2139L7.58496 10.2412L7.60254 10.2676C8.04416 10.926 8.59278 11.5804 9.1416 12.126L9.1582 12.1426L9.17578 12.1562C9.85324 12.7175 10.6351 13.1609 11.4082 13.4902V13.4883C11.5599 13.5598 11.7599 13.6216 11.9775 13.5908C12.2128 13.5574 12.4094 13.4244 12.5361 13.2217C12.6655 13.0802 12.8251 12.8718 12.9531 12.7021C13.123 12.4769 13.2545 12.3047 13.3281 12.2314C13.34 12.2197 13.3498 12.212 13.3564 12.207C13.3634 12.2095 13.3731 12.2134 13.3857 12.2197C13.4992 12.2761 13.9049 12.4636 14.2949 12.6445C14.6961 12.8306 15.0821 13.0101 15.1797 13.0586L15.3799 13.1572C15.4114 13.397 15.3839 13.614 15.2822 13.8281C14.9086 14.3723 14.3944 14.7651 13.8545 14.8418L13.8438 14.8438C13.2553 14.9412 12.8305 14.93 12.4219 14.7676L12.3799 14.751L12.335 14.7422L12.1641 14.7031C11.7812 14.605 11.4553 14.4464 10.9658 14.251C9.27016 13.456 7.85974 12.1603 6.74121 10.543L6.73535 10.5352L6.72852 10.5264C6.16407 9.77813 5.87552 8.93276 5.77539 8.07227C5.7824 7.38761 6.03945 6.78842 6.57715 6.25391C6.57787 6.25323 6.5819 6.24855 6.59082 6.24121C6.60077 6.23302 6.61382 6.2225 6.62988 6.21094C6.66247 6.18748 6.70227 6.16223 6.74316 6.13965C6.78453 6.11683 6.82087 6.10054 6.84863 6.09082C6.85982 6.08691 6.86741 6.08487 6.87109 6.08398H7.35059Z" fill="#FAF5EB" stroke="#FAF5EB"/></svg>
);
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
);

export const Navbar = () => {
  return (
    <header className="w-full bg-[#001446] text-[#FAF5EB] flex flex-col items-center">
      {/* Top Row */}
      <div className="w-full px-8 py-7 flex justify-between items-center relative border-b border-[FEFFFF]">
        {/* Left Actions */}
        <div className="flex items-center gap-6 z-10">
          <button className="hover:opacity-80">
            <Phone />
          </button>
          <button className="hover:opacity-80">
            <WhatsApp />
          </button>
        </div>

        {/* Logo (Centered) */}
        <Link href={"/"}>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <Image src="/svgs/edenNav.svg" alt="Logo" width={100} height={100} />
          </div>
        </Link>

        {/* Right Actions */}
        <div className="flex items-center gap-6 z-10">
          <button className="hover:opacity-80">
            <SearchIcon />
          </button>
          <Button variant="primary">Book Now</Button>
        </div>
      </div>

      {/* Bottom Row: Navigation */}
      <nav className="w-full flex justify-center py-5 relative z-50">
        <div className="flex items-center gap-32 text-lg ">
          
          {/* --- Locations Dropdown --- */}
          <div className="relative group cursor-pointer">
            <span className="hover:opacity-80 transition-opacity border-b-2 border-transparent group-hover:border-[#FEFFFF] pb-1">
              Locations
            </span>
            <div className="absolute top-full left-0 pt-4 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top">
              <div className="bg-[#001446] flex flex-col p-6 shadow-xl">
                <Link href="/location/gokarna" className="group/item block mb-4">
                  <div className="">
                    <span className="relative text-base">
                      Eden Ember Castle Gokarna
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover/item:w-full"></span>
                    </span>
                  </div>
                </Link>
                <Link href="/location/karwar" className="group/item block">
                    <span className="relative text-base">
                      Hotel Eden Karwar
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover/item:w-full"></span>
                    </span>
                </Link>
              </div>
            </div>
          </div>

          {/* --- Dining Dropdown (Center Aligned) --- */}
          <div className="relative group cursor-pointer">
            <Link href="/dining"><span className="hover:opacity-80 transition-opacity border-b-2 border-transparent group-hover:border-[#FEFFFF] pb-1">
              Dining
            </span></Link>
            
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top">
              <div className="bg-[#001446] flex flex-col p-6 shadow-xl">
                
                {/* Item 1: Tulip – Fine Dine Multi-Cuisine */}
                <Link href="/dining/tulip" className="group/item block mb-4">
                  <div className="">
                    <span className="relative text-base">
                      Tulip – Fine Dine Multi-Cuisine
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover/item:w-full"></span>
                    </span>
                  </div>
                </Link>

                {/* Item 2: Oyster Bay – Coastal Seafood Dining */}
                <Link href="/dining/oyster-bay" className="group/item block mb-4">
                    <span className="relative text-base">
                     Oyster Bay – Coastal Seafood Dining
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover/item:w-full"></span>
                    </span>
                </Link>
                  <Link href="/dining/food-and-forest" className="group/item block">
                    <span className="relative text-base">
                     Food & Forest – Rooftop Casual Dining
                      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover/item:w-full"></span>
                    </span>
                </Link>

              </div>
            </div>
          </div>

          <Link href="/spa" className="hover:opacity-80 transition-opacity">
            Spa
          </Link>
          <Link href="/contact" className="hover:opacity-80 transition-opacity">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};