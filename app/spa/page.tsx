"use client";
import GoldenLeafe from "@/components/spa/GoldenLeafe";
import OtherAmenities from "@/components/spa/OtherAmenities";
import SignatureServices from "@/components/spa/SignatureServices";
import SpaTreatment from "@/components/spa/SpaTreatment";
import WhatToExpect from "@/components/spa/WhatToExpect";
import React, { useEffect } from "react";


function page() {
  // useEffect(() => {
  //     document.documentElement.setAttribute("data-theme", "dark");
  //     return () => {
  //         document.documentElement.removeAttribute("data-theme"); // Cleanup when leaving this page
  //     };

  // }, []);
  const venueData = [
    {
      id: 1,
      image: "/1.webp",
      title: "Signature Therapies",
      description: "Relaxing and therapeutic massages designed to relieve stress, restore balance, and rejuvenate the body.",
    },
    {
      id: 2,
      image: "/1.webp",
      title: "Rejuvenation Facilities",
      description: "Steam, sauna, and jacuzzi experiences crafted for deep relaxation, detoxification, and renewal.",
    },
    {
      id: 3,
      image: "/1.webp",
      title: "Beauty & Grooming Studio",
      description: "Professional hair, skin, nails, and makeup services to enhance your natural elegance.",
    },
    {
      id: 4,
      image: "/1.webp",
      title: "Skin & Body Rituals",
      description: "Rejuvenating facials, body scrubs, and polishing treatments to refresh and glow.",
    },
    {
      id: 5,
      image: "/1.webp",
      title: "Hair & Scalp Care",
      description: "Specialized hair and scalp treatments for healthy and radiant hair.",
    },
  ];

  return (
    <div>
    <GoldenLeafe/>
    <WhatToExpect title="What to Expect" description="A thoughtfully curated wellness experience designed for complete relaxation and renewal." venueData={venueData}/>
   <SpaTreatment/>
    <SignatureServices/>
    <OtherAmenities/>
    </div>
  );
}

export default page;
