import React from "react";
import image1 from "../assets/color-palette.png";
import image2 from "../assets/pikaso.png";
import image3 from "../assets/textures.png";
const Texture = () => {
  return (
    <div className=" flex flex-col items-center justify-center bg-[#F8F8F8] h-full py-[86px] px-[88px] w-full gap-[68px] max-sm:px-[24px] ">
      <div className="flex flex-col items-center gap-[40px]">
        <h1 className="text-[64px] font-bold leading-[120%] font-raleway text-[#000000] text-center max-md:text-[40px] max-sm:text-[24px]">
          Illuminate Your Space with{" "}
          <span className="text-[#214A3E] italic">
            <br />
            Captivating Designs
          </span>
        </h1>
        <p className="text-[20px] text-[#758195] text-center font-raleway leading-[120%]  max-md:text-[20px] max-sm:text-[16px]">
          Inspired by the raw beauty of stone, sand, & marble. Our textures
          bring the calming essence of nature indoors, adding depth & character.
        </p>
      </div>
      {/* Selection Cards */}
      <div className="flex min-h-[472px] gap-[16px] justify-center max-md:flex-col w-full">
        {/* Texture Card */}
        <div className="bg-[#E1E4C2] shadow-lg justify-end flex flex-col gap-[10px] text-center h-[472px]">
          <h3 className="text-[14px] font-semibold ">SELECT BY</h3>
          <h2 className="text-[40px] font-raleway font-bold text-[#000000] flex leading-[120%] h-[75px] items-center justify-center">
            TEXTURE
          </h2>
          <img
            src={image3}
            alt="Texture Samples"
            className="w-100% h-[309px]"
          />
        </div>

        {/* Color Card */}
        <div className="bg-[#DCEEEE]  shadow-lg justify-end flex flex-col gap-[10px] text-center h-[472px]">
          <h3 className="text-[14px] font-semibold ">SELECT BY</h3>
          <h2 className="text-[40px] font-raleway font-bold text-[#000000] leading-[120%] h-[75px] flex items-center justify-center">
            COLOR
          </h2>
          <img
            src={image1}
            alt="Color Palette"
            className="w-100% h-[302px]"
          />
        </div>

        {/* Aesthetic Card */}
        <div className="bg-[#F3EFE1] shadow-lg justify-end flex flex-col gap-[10px] text-center h-[472px]">
        <h3 className="text-[14px] font-semibold ">SELECT BY</h3>
        <h2 className="text-[40px] font-raleway font-bold text-[#000000] leading-[120%] h-[75px] flex items-center justify-center">
            AESTHETIC
          </h2>
          <img
            src={image2}
            alt="Aesthetic Design"
           className="w-100% h-[296px]"
          />
        </div>
      </div>

      {/* Button */}
      <button className=" px-[24px] py-[13px] bg-[#214A3E] leading-[120%] gap-[14px] text-white text-[19px] rounded-full   w-[258px] h-[50px] flex items-center justify-center">
        <div className="font-raleway text-[20px] font-medium">Make your Choice</div>
        <span className=" w-[29px] h-[1px] bg-white inline-block relative">
          <span className="absolute right-0 top-[-3px] border-t-[2px] border-r-[2px] border-white w-2 h-2 rotate-45"></span>
        </span>
      </button>
    </div>
  );
};

export default Texture;
