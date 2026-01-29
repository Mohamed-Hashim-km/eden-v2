"use client";

import React, { useState } from "react";

// 1. Rename the static data to avoid name collision with the prop
// const defaultFaqData = [
//   {
//     id: 1,
//     question: "What kind of hotel is Hotel Eden?",
//     answer:
//       "A designer boutique hotel in Karwar offering stays, dining, wellness, and event spaces.",
//   },
//   {
//     id: 2,
//     question: "Who is Hotel Eden ideal for?",
//     answer: "Perfect for families, couples, and business travellers.",
//   },
//   {
//     id: 3,
//     question: "What dining options are available?",
//     answer:
//       "Three in-house restaurants: Tulip, Food & Forest and Oyster Bay.",
//   },
//   {
//     id: 4,
//     question: "Do you have spa and wellness facilities?",
//     answer:
//       "Yes, we have The Golden Leaf Spa along with fitness and recreation facilities.",
//   },
//   {
//     id: 5,
//     question: "Can I host events at Hotel Eden?",
//     answer:
//       "Yes, we offer banquet and conference spaces for events and celebrations.",
//   },
//   {
//     id: 6,
//     question: "Are the hotels affordable?",
//     answer:
//       "Both properties offer a great balance of comfort, facilities, and value for money, ensuring a luxurious experience without compromise.",
//   },
// ];

// 2. Set the default value of the prop to 'defaultFaqData'
const Faq = ({ faqData, title, description }) => {
  const [activeId, setActiveId] = useState(1);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Side: Title and Description */}
          <div className="w-full lg:w-5/12">
            <div className="mb-2 lg:mb-0">
              <h2 className="text-4xl md:text-5xl lg:text-6xl  text-primary mb-6 leading-tight capitalize">
                {title || "Frequently Asked Questions"}
              </h2>
              <p className="text-secondary text-lg leading-relaxed">
                {description || "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sitoler aliquam sit nullam."}
              </p>
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="w-full lg:w-7/12">
            <div className="flex flex-col gap-4">
              {/* 3. Add a check to ensure faqData exists before mapping */}
              {faqData && faqData.length > 0 ? (
                faqData.map((item) => (
                  <div
                    key={item.id}
                    className={`border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 ${
                      activeId === item.id ? " " : "bg-white"
                    }`}
                  >
                    {/* Header */}
                    <div className="p-5 flex justify-between items-center cursor-pointer select-none" onClick={() => toggleAccordion(item.id)}>
                      <h6 className="text-lg font-semibold text-primary mb-0 pr-4">{item.question}</h6>
                      <span className="flex-shrink-0 text-primary">
                        {activeId === item.id ? (
                          /* Minus/Close Icon */
                          <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ) : (
                          /* Plus/Open Icon */
                          <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </span>
                    </div>

                    {/* Body */}
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        activeId === item.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-5 pb-5 pt-0">
                        <p className="text-secondary text-base leading-relaxed mb-0">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No FAQ data available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
