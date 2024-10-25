import React from "react";
import image from "../assets/1.png";

const HeroSection = () => {
  return (
    <section
      className="relative bg-fill bg-center h-[760px] w-full p-[10px] flex justify-center items-center "
      style={{ backgroundImage: `url(${image})`, }}
    >
      {/* Overlay */}

      <div className=" w-[1228px] flex flex-col items-center justify-center gap-[180px] ">
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full gap-[25px] text-center px-4">
          <h1 className="text-[64px] font-raleway font-bold text-white text-center leading-[120%] max-md:text-[32px] max-sm:text-[24px]">
            Bring <span className="italic">Serenity</span> to your place
            with Cementolime
          </h1>
          <p className="text-[24px] font-raleway text-white max-md:text-[20px]  max-sm:text-[12px]">
            find your dream interior for your home decoration with us, <br />
            and we will make it happen.
          </p>

          {/* Button */}
          <button
  className="font-raleway max-sm:w-[250px] max-sm:h-[44px] w-[267px] h-[63px] gap-[16px] text-[14px] bg-white bg-opacity-20 backdrop-blur-sm border border-white text-white py-[16px] px-[23px] rounded-[97px] transition-all flex items-center justify-center relative"
  style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
>
  Explore Our Collection
  <span className="w-[57px] max-sm:w-[40px] h-[1px] bg-white inline-block relative">
    <span className="absolute right-0 top-[-3px] border-t-[2px] border-r-[2px] border-white w-2 h-2 rotate-45"></span>
  </span>
</button>


          {/* <button className=" font-raleway max-sm:w-[250px]  max-sm:h-[44px] w-[267px] h-[63px] gap-[16px] text-[14px] bg-white/40 border border-white text-white py-[16px] px-[23px] rounded-[97px] flex items-center justify-center relative">
            Explore Our Collection
            <span className="w-[57px]  h-[2px] bg-white inline-block relative">
              <span className="absolute right-0 top-[-3px] border-t-[2px] border-r-[2px] border-white w-2 h-2 rotate-45"></span>
            </span>
          </button>*/}
        </div> 

        <div className="relative w-[200px] justify-between  flex gap-[10px]">
          <div className="w-[60px] h-[9px] bg-white rounded-full"></div>
          <div className="w-[60px] h-[9px] bg-[#FFFFFF] rounded-full opacity-[52%]"></div>
          <div className="w-[60px] h-[9px] bg-[#FFFFFF] rounded-full opacity-[52%]"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
