import React from "react";
import image from "../assets/rectangle.png";
const NewArrivalsSection = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-start px-[260px] py-[98px] w-full"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-30"></div> */}

      {/* Content */}
      <div className="relative z-10 text-white w-[383px] flex flex-col gap-[23px]">
        <div className="flex items-center relative">
          {/* Line */}
          <div className="w-[64px] h-[2px] bg-white mr-3"></div>
          {/* New Arrivals Text */}
          <p className="uppercase tracking-widest font-semibold text-[14px]">
            New Arrivals
          </p>
        </div>
        <h1 className="text-[48px] font-bold leading-[109%] text-left">
          Everything you <br /> need for your{" "}
          <span className="italic">interiors</span>
        </h1>

        {/* Button with Arrow */}
        <button className="w-[179px] h-[50px] flex gap-[14px] text-[24px] relative bg-green-900 bg-opacity-80 py-[13px] px-[20px] rounded-full text-white font-semibold flex items-center justify-center transition-all">
          Purchase
          <span className=" w-8 h-[1px] bg-white inline-block relative">
            <span className="absolute right-0 top-[-3px] border-t-[2px] border-r-[2px] border-white w-2 h-2 rotate-45"></span>
          </span>
        </button>
      </div>
    </section>
  );
};

export default NewArrivalsSection;
