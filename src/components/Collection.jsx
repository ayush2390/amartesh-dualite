import React, { useState } from "react";
import image1 from "../assets/Rectangle-15.png";
import image2 from "../assets/Rectangle-16.png";
import image3 from "../assets/Rectangle-17.png";

const Collection = () => {
  const [hovered, setHovered] = useState(null);
  return (
    <div className="flex items-center w-full justify-center h-screen px-8">
      <div className="w-[1440px] h-[623px] flex items-center  justify-center gap-[93px]">
        {/* Left Content */}
        <div className="w-[557px] space-y-6 gap-[36px]">
          <h1 className="text-[64px] font-bold text-gray-800 text-left leading-[120%]">
            Elevating Spaces with{" "}
            <span className="text-[#214A3E] italic">Eco-Friendly</span> Elegance
          </h1>
          <p className="text-[#758195] text-left text-[20px] leading-[120%]">
            Our innovative finishes, from polished plasters to limewash, combine
            luxury and sustainability, delivering beauty, durability, and
            healthier environments for interiors and exteriors.
          </p>
          <div className="flex align-left">
            <button className="bg-[#214A3E] text-white px-[24px] py-[13px] text-[20px] rounded-full hover:bg-green-700 transition flex items-center justify-between">
              Explore Our Collection 
              <span className="ml-[14px] w-8 h-[1px] bg-white inline-block relative">
            <span className="absolute right-0 top-[-3px] border-t-[2px] border-r-[2px] border-white w-2 h-2 rotate-45"></span>
          </span>
            </button>
          </div>
        </div>

        {/* Right Images */}
        <div className="flex space-x-4">
          {/* First Image */}
          <div
            className={`relative flex-shrink-0 ${
              hovered === "second" || hovered === "third"
                ? "w-[156px]"
                : "w-[350px]"
            } h-[520px] transform transition-width duration-700 ease-out`}
          >
            <img
              src={image1} // replace with actual image URLs
              alt="Best Seller"
              className="rounded-lg w-full h-[520px] object-cover"
            />
            <div
              className={`relative  text-white font-bold text-[40px] -rotate-90 ${
                hovered === "second" || hovered === "third"
                  ? "bottom-[150px] right-[30px] "
                  : "bottom-[220px] right-[130px]"
              } `}
            >
              Best Seller
            </div>
          </div>

          {/* Second Image */}
          <div
            className={`relative flex-shrink-0 ${
              hovered === "second" ? "w-[350px]" : "w-[156px]"
            } h-[520px] transform transition-width duration-700 ease-out`}
            onMouseEnter={() => setHovered("second")}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={image2} // replace with actual image URLs
              alt="Trendy"
              className="rounded-lg h-full w-full object-fill"
            />
            <div
              className={`relative  transform -rotate-90 text-white font-bold text-[40px] transition-all duration-500 ease-out ${
                hovered === "second" ? "right-[140px] bottom-[220px]" : "right-[50px] bottom-[120px]"
              }`}
            >
              Trendy
            </div>
          </div>

          {/* Third Image */}
          <div
            className={`relative flex-shrink-0 ${
              hovered === "third" ? "w-[350px]" : "w-[156px]"
            } h-[520px] transform transition-width duration-700 ease-out`}
            onMouseEnter={() => setHovered("third")}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={image3} // replace with actual image URLs
              alt="Aesthetic"
              className="rounded-lg w-full h-full object-fill"
            />
            <div
              className={`relative transform  -rotate-90 text-white font-bold text-[40px] transition-all duration-500 ease-out ${
                hovered === "third"
                  ? "right-[140px] bottom-[220px]"
                  : "right-[50px] bottom-[120px] "
              }`}
            >
              Aesthetic
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
