import React from "react";
import image1 from "../../assets/AboutUs/Service1.png";
import image2 from "../../assets/AboutUs/Service2.png";
import image3 from "../../assets/AboutUs/Service3.png";

const Services = () => {
  return (
    // <div className="w-[100%]  flex px-[80px]  items-center justify-center py-[112px] max-1215px:px-[30px] max-md:px-[32px]">
    <div className="w-[100%]  flex   items-center justify-center py-[112px]  max-md:px-[32px]">
      <div className=" flex bg-yellow-900 w-full flex-col  max-w-[88.89%] max-md:max-w-[704px] gap-[80px]   ">
        <div className="max-w-[832px] w-full  max-h-[595px]  h-full space-y-[23px] ">
          <div className="flex items-center mb-4">
            <div className="w-[64px] h-[2px] bg-[#8FA49E]"></div>
            <h2 className="text-[14px] font-raleway font-semibold uppercase  tracking-wider text-[#8FA49E] ml-3">
              OUR SERVICES
            </h2>
          </div>

          <h1 className="text-[64px] w-full max-md:text-[48px] font-raleway font-bold text-[#000000] leading-[72px] max-sm:text-[36px] max-sm:leading-[150%] ">
            We provide the best{" "}
            <span className="text-[#214A3E] italic">
              eco - friendly solutions
            </span>{" "}
          </h1>

          {/* Form */}
        </div>
        <div className="flex h-full gap-[32px] w-full max-sm:flex-col ">
          <div className="flex w-full gap-[80px] max-md:gap-[40px] border-4 border-[#8FA49E] justify-center items-center flex-col ">
            <div className="flex w-full bg-red-900 ">
              <img src={image1} className="w-[48px] h-[48px]" />
            </div>
            <div className="flex gap-[16px] flex-col bg-red-900">
              <div className="font-raleway text-[32px] max-md:text-[16px] max-md:leading-[28.8px] font-bold text-[#214A3E] leading-[48px]">
                Architectural & Interior design
              </div>
              <div className="font-raleway text-[18px] max-md:text-[12px] max-md:leading-[18px] font-light text-[#758195] leading-[32px]">
                Non diam pretium tristique augue placerat dolor. Accumsan nibh
                nunc, molestie volutpat ipsum, ultricies.
              </div>
            </div>
          </div>
          <div className="flex  gap-[80px] max-md:gap-[40px] border-4 border-[#8FA49E] p-[40px] flex-col ">
            <img src={image2} className="w-[48px] h-[48px]" />
            <div className="flex gap-[16px] flex-col">
              <div className="font-raleway text-[32px] max-md:text-[16px] max-md:leading-[28.8px] font-bold text-[#214A3E] leading-[48px]">
                Building Renovation
              </div>
              <div className="font-raleway text-[18px] max-md:text-[12px] max-md:leading-[18px] font-light text-[#758195] leading-[32px]">
                Non diam pretium tristique augue placerat dolor. Accumsan nibh
                nunc, molestie volutpat ipsum, ultricies.
              </div>
            </div>
          </div>
          <div className="flex gap-[80px] max-md:gap-[40px] border-4 border-[#8FA49E] p-[40px] flex-col ">
            <img src={image3} className="w-[48px] h-[48px]" />
            <div className="flex gap-[16px] flex-col">
              <div className="font-raleway text-[32px] max-md:text-[16px] max-md:leading-[28.8px] font-bold text-[#214A3E] leading-[48px]">
                Construction Management
              </div>
              <div className="font-raleway text-[18px] max-md:text-[12px] max-md:leading-[18px] font-light text-[#758195] leading-[32px]">
                Non diam pretium tristique augue placerat dolor. Accumsan nibh
                nunc, molestie volutpat ipsum, ultricies.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </section> */}
    </div>
  );
};

export default Services;
