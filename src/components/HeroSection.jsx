import React from "react";
import image from "../assets/1.png";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen w-full p-[10px] flex justify-center items-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <div className=" w-[1228px] flex flex-col items-center justify-center gap-[180px]">
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
          <h1 className="text-[64px] font-bold text-white text-center">
            Bring <span className="italic">Serenity</span> to your place
            with Cementolime
          </h1>
          <p className="text-[24px] text-white mt-4">
            find your dream interior for your home decoration with us, <br />
            and we will make it happen.
          </p>

          {/* Button */}
          <button className="mt-8 w-[267px] h-[63px] gap-[16px] text-[14px] bg-white bg-opacity-20 backdrop-blur-sm border border-white text-white py-[16px] px-[23px] rounded-full transition-all flex items-center justify-center relative">
            Explore Our Collection
            <span className="ml-4 w-10 h-[1px] bg-white inline-block relative">
              <span className="absolute right-0 top-[-3px] border-t-[2px] border-r-[2px] border-white w-2 h-2 rotate-45"></span>
            </span>
          </button>
        </div>

        <div className="relative w-[200px] justify-between  flex gap-[10px]">
          <div className="w-[60px] h-1 bg-white rounded-full"></div>
          <div className="w-[60px] h-1 bg-[#FFFFFF] rounded-full opacity-[52%]"></div>
          <div className="w-[60px] h-1 bg-[#FFFFFF] rounded-full opacity-[52%]"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
