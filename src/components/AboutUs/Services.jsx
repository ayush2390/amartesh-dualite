import React from "react";
import image1 from "../../assets/AboutUs/Service1.png";
import image2 from "../../assets/AboutUs/Service2.png";
import image3 from "../../assets/AboutUs/Service3.png";

const Services = () => {
  return (
    <div className="w-[100%] bg-red-900 flex px-[80px] items-center justify-center py-[112px] max-1215px:px-[30px] max-md:px-[32px]">
      {/* <section className="flex items-center w-full"> */}
      {/* <div className=" flex items-center gap-[95px] bg-red-900 py-[95px] px-[81px] max-md:w-[685px] justify-center max-md:gap-[35px] max-md:px-[40px]"> */}
      <div className=" flex  w-full flex-col bg-green-900 max-w-[88.89%] max-md:max-w-[704px] gap-[80px]   ">
        {/* Left Side - Form Section */}
        {/* <div className="w-[644px] h-[595px] space-y-[23px]"> */}
        <div className="max-w-[832px] w-full  max-h-[595px]  h-full space-y-[23px] ">
          <div className="flex items-center mb-4">
            <div className="w-[64px] h-[2px] bg-[#8FA49E]"></div>
            <h2 className="text-[14px] font-raleway font-semibold uppercase  tracking-wider text-[#8FA49E] ml-3">
              OUR SERVICES
            </h2>
          </div>

          <h1 className="text-[64px] w-full max-md:text-[48px] font-raleway font-bold text-[#000000] leading-[72px]  ">
            We provide the best{" "}
            <span className="text-[#214A3E] italic">
              eco - friendly solutions
            </span>{" "}
          </h1>

          {/* Form */}
        </div>
        <div className="flex min-h-[330px] gap-[32px] max-w-[1280px] bg-blue-900">
          <div className="flex gap-[80px] max-md:gap-[40px] border-4 border-[#8FA49E] p-[40px] flex-col ">
            <img src={image1} className="w-[48px] h-[48px]" />
            <div className="flex gap-[16px] flex-col">
              <div className="font-raleway text-[32px] max-md:text-[16px] max-md:leading-[28.8px] font-bold text-[#214A3E] leading-[48px]">
                Architectural & Interior design
              </div>
              <div className="font-raleway text-[18px] max-md:text-[12px] max-md:leading-[18px] font-light text-[#758195] leading-[32px]">
                Non diam pretium tristique augue placerat dolor. Accumsan nibh
                nunc, molestie volutpat ipsum, ultricies.
              </div>
            </div>
          </div>
          <div className="flex gap-[80px] max-md:gap-[40px] border-4 border-[#8FA49E] p-[40px] flex-col ">
            <img src={image1} className="w-[48px] h-[48px]" />
            <div className="flex gap-[16px] flex-col">
              <div className="font-raleway text-[32px] max-md:text-[16px] max-md:leading-[28.8px] font-bold text-[#214A3E] leading-[48px]">
                Architectural & Interior design
              </div>
              <div className="font-raleway text-[18px] max-md:text-[12px] max-md:leading-[18px] font-light text-[#758195] leading-[32px]">
                Non diam pretium tristique augue placerat dolor. Accumsan nibh
                nunc, molestie volutpat ipsum, ultricies.
              </div>
            </div>
          </div>
          <div className="flex gap-[80px] max-md:gap-[40px] border-4 border-[#8FA49E] p-[40px] flex-col ">
            <img src={image1} className="w-[48px] h-[48px]" />
            <div className="flex gap-[16px] flex-col">
              <div className="font-raleway text-[32px] max-md:text-[16px] max-md:leading-[28.8px] font-bold text-[#214A3E] leading-[48px]">
                Architectural & Interior design
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
