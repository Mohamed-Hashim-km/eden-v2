import React from "react";
import Image from "next/image";

function Contact() {
  return (
    <>
      <div className="py-20 lg:pb-28 lg:pt-54 bg-white">
        <div className="container mx-auto px-4">
          
          {/* Top Section: Intro & Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 lg:mb-32">
            
            {/* Left Column: Text & Contact Links */}
            <div>
              <div className="mb-10">
                <span className="block text-sm  uppercase tracking-widest text-primary mb-2">
                  Get in Touch
                </span>
                <h2 className="text-4xl md:text-5xl  text-primary leading-tight">
                  Plan your Eden experience.
                </h2>
              </div>
              
              <div className="space-y-8">
                {/* Phone Block */}
                <div>
                  <span className="block text-secondary text-sm mb-1 uppercase tracking-wide">
                    Call
                  </span>
                  <a 
                    href="tel:+919686804784" 
                    className="block text-2xl md:text-3xl  text-primary hover:text-primary transition-colors duration-300"
                  >
                    +91 96868 04784
                  </a>
                </div>

                {/* Email Block */}
                <div>
                  <span className="block text-secondary text-sm mb-1 uppercase tracking-wide">
                    Email
                  </span>
                  <a 
                    href="mailto:info@eden-grand-hotel.com" 
                    className="block text-xl md:text-2xl  text-primary hover:text-primary transition-colors duration-300"
                  >
                    info@eden-grand-hotel.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Next.js Image */}
            <div className="relative w-full">
              <Image
                src="/1.webp"
                alt="Contact us"
                width={645}
                height={560}
                className="w-full h-auto rounded-lg shadow-sm"
                priority // Adds priority loading since this is above the fold
              />
            </div>
          </div>

          {/* Bottom Section: Map & Info Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Map */}
            <div className="w-full h-[400px] lg:h-[560px] bg-gray-100 rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full border-0"
                src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=phuket+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                title="Map showing the location of My Business"
                loading="lazy"
              />
            </div>

            {/* Right Column: Detailed Info */}
            <div className="space-y-12 lg:pl-10">
              {/* Info Item 1 */}
              <div>
                <h4 className="text-2xl  text-primary mb-4">
                  Hotel Info Center
                </h4>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Open Hours: Monday – Sunday <br />
                  Telephone: +1 250 555 0199 <br />
                  Fax: +1 250 555 0199 <br />
                  Email: info@moonlit.com
                </p>
              </div>

              {/* Info Item 2 */}
              <div>
                <h4 className="text-2xl  text-primary mb-4">
                  Hotel location
                </h4>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Address: The Ritz-Carlton (California, USA) <br />
                  Telephone: +1 250 555 0199 <br />
                  Fax: +1 250 555 0199 <br />
                  Email: info@moonlit.com
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;