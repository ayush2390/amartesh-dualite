import React from "react";
import image from "../assets/rectangle.png";
const NewArrivalsSection = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[615px] flex items-center justify-start px-[260px] py-[98px] w-full max-md:px-[100px]"
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
          <p className="uppercase font-raleway tracking-widest font-bold text-[14px]">
            New Arrivals
          </p>
        </div>
        <h1 className="text-[48px] font-raleway font-bold leading-[109%] text-left">
          Everything you <br /> need for your{" "}
          <span className="italic">interiors</span>
        </h1>

        {/* Button with Arrow */}
        <button className=" font-raleway w-[179px] h-[50px] flex gap-[14px] text-[20px] relative bg-[#214A3E] py-[13px] px-[20px] rounded-full text-white  flex items-center justify-center transition-all">
          Purchase
          <span className=" w-[29px] h-[1px] bg-white inline-block relative">
            <span className="absolute right-0 top-[-3px] border-t-[2px] border-r-[2px] border-white w-2 h-2 rotate-45"></span>
          </span>
        </button>
      </div>
    </section>
  );
};

export default NewArrivalsSection;
