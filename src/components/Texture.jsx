import React from "react";
import image1 from "../assets/color-palette.png";
import image2 from "../assets/pikaso.png";
const Texture = () => {
  return (
    <div className=" flex flex-col items-center justify-center bg-gray-100 h-[1092px] py-[86px] px-[88px] w-full gap-[62px] ">
      <div className="flex flex-col items-center gap-[40px]">
        <h1 className="text-[64px] font-bold leading-[120%] text-gray-900 text-center w-[1190px] h-[167px] ">
          Illuminate Your Space with{" "}
          <span className="text-[#214A3E] italic">
            <br />
            Captivating Designs
          </span>
        </h1>
        <p className="text-[20px] text-[#758195] text-center leading-[120%]">
          Inspired by the raw beauty of stone, sand, & marble. Our textures
          bring the calming essence of nature indoors, adding depth & character.
        </p>
      </div>
      {/* Selection Cards */}
      <div className="flex space-x-6 w-[1266px] h-[472px]">
        {/* Texture Card */}
        <div className="bg-[#E1E4C2] rounded-lg shadow-lg text-center w-[411px] h-[472px]">
          <h3 className="text-[14px] font-semibold mt-[41px]">SELECT BY</h3>
          <h2 className="text-[40px] font-bold text-gray-800 mt-[25px] ">
            TEXTURE
          </h2>
          <img
            src="/path/to/texture-image.jpg"
            alt="Texture Samples"
            className="w-[411px] h-100% mt-[41px]"
          />
        </div>

        {/* Color Card */}
        <div className="bg-[#DCEEEE] rounded-lg shadow-lg text-center w-[411px] h-[472px]">
          <h3 className="text-[14px] font-semibold mt-[37px]">SELECT BY</h3>
          <h2 className="text-[40px] font-bold text-gray-800  mt-[25px]">
            COLOR
          </h2>
          <img
            src={image1}
            alt="Color Palette"
            className="w-[411px] h-100% mt-[33px]"
          />
        </div>

        {/* Aesthetic Card */}
        <div className="bg-[#F3EFE1] rounded-lg shadow-lg   text-center w-[411px] h-[472px]">
          <h3 className="text-[14px] font-semibold mt-[37px] ">SELECT BY</h3>
          <h2 className="text-[40px] mt-[25px] font-bold text-gray-800">
            AESTHETIC
          </h2>
          <img
            src={image2}
            alt="Aesthetic Design"
            className="w-[411px] h-100% mt-[39px]"
          />
        </div>
      </div>

      {/* Button */}
      <button className=" px-[24px] py-[13px] bg-[#214A3E] leading-[120%] gap-[14px] text-white text-[19px] rounded-full   w-[258px] h-[50px] flex items-center justify-center">
        <div>Make your Choice</div>
        <span className="ml-[14px] w-[29px] h-[1px] bg-white inline-block relative">
          <span className="absolute right-0 top-[-3px] border-t-[2px] border-r-[2px] border-white w-2 h-2 rotate-45"></span>
        </span>
      </button>
    </div>
  );
};

export default Texture;
