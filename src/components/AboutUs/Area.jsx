import React, { useState } from "react";
import plus from "../../assets/AboutUs/plus.png";
import cross from "../../assets/AboutUs/cross.png";

const materials = [
  {
    id: 1,
    title: "WATTLE AND DOB",
    description:
      "Perfect for creating durable, natural, and earthen structures that harmonize with the environment.",
  },
  {
    id: 2,
    title: "AAC BLOCKS",
    description:
      "Perfect for creating durable, natural, and earthen structures that harmonize with the environment.",
  },
  {
    id: 3,
    title: "COB/RAMMED COB",
    description:
      "Perfect for creating durable, natural, and earthen structures that harmonize with the environment.",
  },
  {
    id: 4,
    title: "MDF/HDHMR BOARDS",
    description:
      "Perfect for creating durable, natural, and earthen structures that harmonize with the environment.",
  },
];

const Area = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };
  return (
    <section className="flex items-center w-full px-[72px] max-sm:px-[31px] py-[100px]">
      <div className=" flex items-center w-full gap-[34px] max-sm:gap-[32px] max-md:flex-col ">
        <div className="max-w-[644px] flex  flex-col gap-[54px] w-full max-sm:gap-[32px] max-h-[595px] h-full ">
            <div className="flex flex-col gap-[26px]">
          <div className="flex items-center">
            <div className="w-[64px] h-[2px] bg-[#8FA49E] "></div>
            <h2 className="text-[14px] font-raleway font-semibold uppercase  tracking-wider text-[#8FA49E] ml-3">
              AREA OF USE
            </h2>
          </div>

          <h1 className="text-[54px] font-raleway font-bold text-[#000000] leading-[62px]  max-sm:text-[36px] max-sm:leading-[120%]">
            <span className="text-[#214A3E] italic"> Versatile Solutions</span>{" "}
            for Every Build
          </h1>
          </div>
          <p className="text-[24px] font-raleway font-light text-[#444444] text-left max-w-[510px] leading-[120%] max-sm:text-[16px] max-sm:leading-[120%] max-sm:tracking-[5%]">
            From traditional materials to modern innovations, Cementolime adapts
            to a wide range of surfaces.
          </p>

          <button className="bg-[#214A3E] font-raleway w-[214px] h-[50px] hover:bg-[#1D352E]  hover:w-[220px] transition-all duration-200 text-white px-[24px] py-[13px] rounded-[89px] text-[20px] flex items-center justify-between group">
            Our Products
            <span className=" w-[29px] h-[1px] bg-white inline-block relative transition-all duration-200 group-hover:ml-[20px]">
              <span className="absolute right-0 top-[-3px] border-t-[2px] border-r-[2px] border-white w-2 h-2 rotate-45"></span>
            </span>
          </button>
        </div>

        <div className=" flex flex-col max-w-[50%] max-md:max-w-[585px] w-full gap-[20px] ">
          {materials.map((material, index) => (
            <div
              key={material.id}
              className="border-b-2  px-[21px] max-h-[162px] cursor-pointer border-[#8FA49E]  py-[13px]"
              onClick={() => toggleExpand(material.id)}
            >
              <div className="flex justify-between items-center text-[#214A3E] font-raleway text-[24px] leading-[120%] max-sm:text-[16px] ">
                0{index + 1} {material.title}
                <div
                  // onClick={() => toggleExpand(material.id)}
                  className="w-[36px] cursor-pointer rounded-[18px] h-[36px] flex justify-center items-center bg-[#DCDFE3]"
                >
                  <img
                    src={expandedId === material.id ? cross : plus}
                    className="w-[12px] h-[12px]"
                  />
                </div>
              </div>
              {expandedId === material.id && material.description && (
                <p className=" mt-[30px]  text-[#8490A1] font-raleway leading-[120%] tracking-[5%] max-sm:text-[14px] text-[20px]">
                  {material.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Area;
