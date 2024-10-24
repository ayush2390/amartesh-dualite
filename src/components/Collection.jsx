import React, { useState } from "react";
import image1 from "../assets/Rectangle-15.png";
import image2 from "../assets/Rectangle-16.png";
import image3 from "../assets/Rectangle-17.png";

const Collection = () => {
  const [hovered, setHovered] = useState(null);
  return (
    // <div className="flex items-center w-full h-full py-[90px] ">
    <div className="flex items-center  w-full h-full py-[90px] max-md:justify-end">
      {/* <div className="w-full h-[520px] flex items-center flex-row justify-end  gap-[93px] max-md:flex-col"> */}
      <div className="w-full h-full flex items-center flex-row justify-end  gap-[93px] max-md:flex-col max-md:justify-center max-md:items-end">
        {/* Left Content */}
        <div className="w-[100%] max-w-[557px] flex flex-col gap-[36px]  max-md:pr-[50px] max-sm:w-[368px]">
          <h1 className="text-[64px]  font-bold text-[#0000000] font-raleway  text-left leading-[120%] max-md:text-[40px] max-sm:text-[24px]">
            Elevating Spaces with{" "}
            <span className="text-[#214A3E] italic">Eco-Friendly</span> Elegance
          </h1>
          <p className="text-[#758195] text-left font-raleway text-[20px] leading-[120%] max-sm:text-[16px]">
            Our innovative finishes, from polished plasters to limewash, combine
            luxury and sustainability, delivering beauty, durability, and
            healthier environments for interiors and exteriors.
          </p>
          <div className="flex">
            <button className="bg-[#214A3E] text-white px-[24px] py-[13px] text-[20px] rounded-[89px] font-raleway flex items-center justify-between">
              Explore Our Collection
              <span className="ml-[14px] w-[29px] h-[1px] bg-white inline-block relative">
                <span className="absolute right-0 top-[-3px] border-t-[2px] border-r-[2px] border-white w-2 h-2 rotate-45"></span>
              </span>
            </button>
          </div>
        </div>

        {/* Right Images */}
        <div className="flex space-x-4    max-sm:space-x-[22px]">
          {/* First Image */}
          <div
            className={`relative flex-shrink-0 ${
              hovered === "second" || hovered === "third"
                ? "w-[156px]"
                : "w-[49.58%]"
            } transform transition-width duration-700 ease-out max-sm:w-[197px] `}
          >
            <img
              src={image1} // replace with actual image URLs
              alt="Best Seller"
              className="rounded-[20px] w-full h-full object-cover"
            />
            {/* <div
              className={`relative bg-red-900 text-white font-bold text-[40px] -rotate-90 ${
                hovered === "second" || hovered === "third"
                  ? "bottom-[150px] right-[30px] "
                  : "bottom-[220px] right-[130px]"
              }`}
            >
              Best Seller
            </div> */}
          </div>

          {/* Second Image */}
          <div
            className={`relative flex-shrink-0 ${
              hovered === "second" ? "w-[350px]" : "w-[22.10%]"
            } transform transition-width duration-700 ease-out  max-sm:w-[87px]`}
            onMouseEnter={() => setHovered("second")}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={image2} // replace with actual image URLs
              alt="Trendy"
              className="rounded-[20px] h-full w-full object-fill"
            />
            {/* <div
              className={`relative  transform -rotate-90 text-white font-bold text-[40px] transition-all duration-500 ease-out ${
                hovered === "second"
                  ? "right-[140px] bottom-[220px]"
                  : "right-[50px] bottom-[120px]"
              } bg-red-900`}
            >
              Trendy
            </div> */}
          </div>

          {/* Third Image */}
          <div
            className={`relative flex-shrink-0 ${
              hovered === "third" ? "w-[350px]" : "w-[22.10%]"
            } transform transition-width duration-700 ease-out max-sm:w-[87px]`}
            onMouseEnter={() => setHovered("third")}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={image3} // replace with actual image URLs
              alt="Aesthetic"
              className="rounded-[20px] w-full h-full object-fill"
            />
            {/* <div
              className={`relative transform  -rotate-90 text-white font-bold text-[40px] transition-all duration-500 ease-out ${
                hovered === "third"
                  ? "right-[140px] bottom-[220px]"
                  : "right-[50px] bottom-[120px] "
              } bg-red-900`}
            >
              Aesthetic
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
