import React from "react";
import OtherRoomsCard from "./OtherRoomsCard";


/**
 * @param {Object} props
 * @param {any} props.data
 * @param {string} [props.title]
 * @param {string} [props.description]
 */
function OtherRooms({ data, title, description }) {
  return (
    <>
      {/* blog style */}
      <div className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center text-center mb-12">
            <div className="w-full max-w-2xl wow fadeInUp" data-wow-delay=".3s">
              <div className="flex flex-col items-center">
                {title && (
                  <span className="text-4xl md:text-5xl lg:text-6xl  text-primary mb-4 leading-tight  block">
                    {title}
                  </span>
                )}
                {description && (
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    {description}
                  </h2>
                )}
              </div>
            </div>
          </div>
          {/* row end */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(data).map((data, index) => {
              return (
                <div key={index} className="w-full">
                  {
                    <OtherRoomsCard
                      Slug={data.slug}
                      Title={data.title}
                      Img={data.image}
                      Category={data.category}
                      AuthorImg={data.authorImg}
                      Author={data.author}
                      Description={data.description}
                    />
                  }
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* blog style end */}
    </>
  );
}

export default OtherRooms;