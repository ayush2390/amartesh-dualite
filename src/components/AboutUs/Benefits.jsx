import React from "react";
import benefit from "../../assets/AboutUs/Benefits.png";
import benefits1 from "../../assets/AboutUs/benefits1.png";
import benefits2 from "../../assets/AboutUs/benefits2.png";
import benefits3 from "../../assets/AboutUs/benefits3.png";
import benefits4 from "../../assets/AboutUs/benefits4.png";

const Benefits = () => {
  return (
    <div className="w-[100%] flex h-full h-[758px]">
      <div className="w-[50%] bg-green-900 max-md:hidden">
        <img src={benefit} />
      </div>
      <div className="w-[50%]  max-md:w-[100%] ">
        <div className=" flex h-[50%] max-sm:flex-col-reverse  ">
          <div className="w-[50%] max-sm:w-[100%] max-sm:h-[50%] h-[100%] bg-[#FAFAFA] px-[52px] py-[54px] flex flex-col justify-center">
            <div className="flex gap-[22px] flex-col justify-between">
            <img src={benefits1} className="w-[126px] h-[126px]"/>
            <div className="font-raleway text-[24px] font-bold text-[#285A43] leading-[140%]">Quality Product</div>
            <div className="font-raleway text-[16px] font-light text-[#8490A1] leading-[150%]">Lorem Ipsum</div>
          </div>
          </div>
          <div className="w-[50%] max-sm:w-[100%] max-sm:h-[50%] h-[100%] max-sm:border-b-1 border-[#D4D4D4] bg-[#E5EDE4] px-[44px] py-[49px] flex flex-col justify-center">
          <div className="flex gap-[20px] flex-col justify-between ">
            <img src={benefits2} className="w-[129px] h-[83px]"/>
            <div className="font-raleway text-[24px] font-bold text-[#285A43] leading-[140%]">Breathable & Absorbs CO2</div>
            <div className="font-raleway text-[15px] font-light text-[#8490A1] leading-[120%]">Our Lime Plaster Breathes Like Living Skin. Reducing Moisture And Absorbing CO2 For a Healthier.</div>
          </div>
          </div>
        </div>
        <div className=" flex h-[50%] max-sm:block">
        
          <div className="w-[50%] max-sm:w-[100%] max-sm:h-[50%] h-[100%] bg-[#E5EDE4] px-[44px] py-[49px] flex flex-col justify-center">
          <div className="flex gap-[20px] flex-col justify-between ">
            <img src={benefits3} className="w-[86px] h-[76px]"/>
            <div className="font-raleway text-[24px] font-bold text-[#285A43] leading-[140%]">Bio - degradable</div>
            <div className="font-raleway text-[15px] font-light text-[#8490A1] leading-[120%]">Crafted From Natural Limestone, Our Plaster Eventually Returns To The Earth, Leaving No Trace Behind.</div>
          </div>
          </div>
          <div className="w-[50%] max-sm:w-[100%] max-sm:h-[50%] h-[100%] bg-[#FAFAFA] px-[44px] py-[49px] flex flex-col justify-center">
          <div className="flex gap-[20px] flex-col justify-between ">
            <img src={benefits4} className="w-[70px] h-[75px]"/>
            <div className="font-raleway text-[24px] font-bold text-[#285A43] leading-[140%]">Zero Carbon Product</div>
            <div className="font-raleway text-[15px] font-light text-[#8490A1] leading-[120%]">During Production. Any CO2 Released Is Reabsorbed As The Plaster Cures, Making It A Sustainable Choice For A Greener Future.</div>
          </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Benefits;
