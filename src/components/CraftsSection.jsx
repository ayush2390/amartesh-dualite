import image1 from "../assets/11.png";
import image2 from "../assets/22.png";
import image3 from "../assets/33.png";
import image4 from "../assets/44.png";
const CraftsSection = () => {
  return (
    // <div className="w-full flex flex-col  items-center justify-center h-[1780px] gap-[64px]">
    <div className="w-full flex h-[1780px] items-center justify-center px-[77px] max-sm:px-[18px] max-xmd:h-[1317px] max-md:h-[1061px] max-sm:h-[717px]">
      {/* <div className="h-[1690px] gap-x-[64px] gap-y-[81px]"> */}
      {/* Title and description */}
      <div className=" flex flex-col items-center justify-center gap-[64px]  max-md:gap-[14px]">
      <div className="flex flex-row  h-[213px] w-screen max-w-[1275px] px-[10px] py-[10px] justify-between items-center gap-[128px]  max-xmd:gap-[0] max-xmd:max-w-[942px] max-md:max-w-[728px] max-sm:max-w-[388px] max-sm:h-[94px]">
        <div className="flex flex-col w-[546px] gap-[9px]">
          <div className="flex items-center ">
            <div className="w-[64px] h-[2px] bg-[#8FA49E] max-sm:w-[22px]"></div>
            <h2 className="text-[14px] font-raleway uppercase tracking-wider text-[#8FA49E] ml-3">
              Recent works
            </h2>
          </div>
          <h2 className="text-[60px] font-bold font-raleway text-left leading-[72px] max-xmd:text-[48px] max-md:text-[24px] max-xmd:leading-[120%]">
            Some of <span className="text-[#214A3E] italic">our crafts</span>{" "}
            <br />
            made with love
          </h2>
        </div>
        <div className="">
          {/* Line */}
          <p className="text-[#8490A1] font-raleway max-w-[581px] w-screen text-[24px] text-right leading-[28px] max-xmd:text-[16px] max-md:text-[15px] max-xmd:leading-[150%] max-xmd:max-w-[461px] max-md:max-w-[244px] max-sm:text-[12px] max-xmd:leading-[120%] max-sm:max-w-[158px] max-sm:hidden" >
            We’ve designed and curated pieces that are a cut above your average
            home goods, because when you level up your everyday objects, you
            elevate your daily rituals. Let the magic happen.
          </p>
          <p className="text-[#8490A1] font-raleway max-w-[581px] hidden w-screen text-[24px] text-right leading-[28px] max-xmd:text-[16px] max-md:text-[15px] max-xmd:leading-[150%] max-xmd:max-w-[461px] max-md:max-w-[244px] max-sm:text-[12px] max-xmd:leading-[120%] max-sm:max-w-[158px] max-sm:block" >
          Our innovative finishes, from polished plasters to limewash, combine luxury and sustainability, 
          </p>
        </div>
      </div>
      <div className="w-full py-[10px] px-[10px]">
  <div className="flex flex-col max-w-[1274px]  w-screen items-center gap-[36px] max-xmd:gap-[64px] max-md:gap-[14px] max-sm:gap-[29px]">
    {/* Left column - Single image */}
    <div className=" h-[600px]  max-w-[1274px] w-screen flex flex-row justify-center gap-[36px] max-xmd:h-[378px] max-xmd:max-w-[942px] max-xmd:gap-[33px] max-md:max-w-[768px] max-md:h-[322px] max-sm:max-w-[388px] max-sm:max-h-[180px]">
      <div
        style={{ backgroundImage: `url(${image2})` }}
        className="w-[792px] h-full max-xmd:w-[617px] bg-cover bg-center max-md:w-[414px] max-md:h-[286px] max-sm:h-[180px]"
        aria-label="Craft 2"
      ></div>
      <div
        style={{ backgroundImage: `url(${image1})` }}
        className="w-[446px] h-full max-xmd:w-[281px] bg-cover bg-center max-md:w-[213px] max-md:h-[286px] max-sm:h-[180px]"
        aria-label="Craft 1"
      ></div>
    </div>

    {/* Right column - Two images stacked */}
    <div className="max-w-[1274px] w-screen flex flex-row justify-center gap-[36px]  max-xmd:max-w-[942px] max-xmd:gap-[33px] max-md:max-w-[768px] max-sm:max-w-[388px] max-sm:max-h-[180px]">
      <div
        style={{ backgroundImage: `url(${image4})` }}
        className="w-[446px] h-[600px] bg-cover bg-center max-xmd:h-[378px] max-md:w-[213px] max-md:h-[278px] max-sm:h-[180px]"
        aria-label="Craft 4"
      ></div>
      {/* <div className="relative w-[792px] h-[600px] flex items-start justify-center"> */}
      {/* <div className="relative w-[792px] h-[600px] "> */}
        {/* <div
          style={{ backgroundImage: `url(${image3})` }}
          className="w-[792px] h-[600px] max-xmd:w-[617px] bg-cover bg-center max-xmd:h-[378px] "
          aria-label="Craft 3"
        ></div>
        <button className="absolute top-[50%] left-[50%] font-raleway w-[225px] h-[63px] bg-transparent bg-opacity-20 text-white text-[20px] font-medium rounded-full flex items-center justify-center shadow-lg backdrop-blur-md transition">
          Show More
          <span className="w-[57px] h-[1px] ml-3 bg-white inline-block relative">
            <span className="absolute right-0 top-[-3px] border-t-[2px] border-r-[2px] border-white w-2 h-2 rotate-45"></span>
          </span>
        </button> */}
      {/* </div> */}
      <div
  style={{ backgroundImage: `url(${image3})` }}
  className="relative w-[792px] h-[600px] max-xmd:w-[617px] max-xmd:h-[378px] bg-cover bg-center max-md:w-[414px] max-md:h-[278px] max-sm:h-[180px]"
  aria-label="Craft 3"
>
  {/* Flex container for centering the button */}
  <div className="absolute inset-0 flex items-center justify-center">
    <button className="w-[225px] h-[63px] border-white/50 border-2 bg-white/5 text-white text-[20px] rounded-full flex items-center justify-center shadow-lg backdrop-blur-md transition max-sm:h-[33px] max-sm:w-[120px] max-sm:text-[12px] font-raleway">
      Show More
      <span className="w-[57px] h-[1px] ml-3 bg-white inline-block relative max-sm:w-[28px]">
        <span className="absolute right-0 top-[-3px] border-t-[2px] border-r-[2px] border-white w-2 h-2 rotate-45"></span>
      </span>
    </button>
  </div>
</div>

    </div>
  </div>
</div>

    </div>
    </div>
  );
};

export default CraftsSection;
