import image1 from "../assets/11.png";
import image2 from "../assets/22.png";
import image3 from "../assets/33.png";
import image4 from "../assets/44.png";
const CraftsSection = () => {
  return (
    <div className="w-full flex flex-col  items-center justify-center h-[1780px] gap-[64px]">
      {/* <div className="h-[1690px] gap-x-[64px] gap-y-[81px]"> */}
      {/* Title and description */}
      <div className="flex flex-row w-[1275px] h-[193px] px-[10px] py-[10px] justify-between items-center">
        <div className="flex flex-col ">
          <div className="flex items-center mb-4">
            <div className="w-[64px] h-[2px] bg-[#8FA49E]"></div>
            <h2 className="text-[14px] font-raleway uppercase tracking-wider text-[#8FA49E] ml-3">
              Recent works
            </h2>
          </div>
          <h2 className="text-[60px] font-bold font-raleway text-left leading-[72px]">
            Some of <span className="text-[#214A3E] italic">our crafts</span>{" "}
            <br />
            made with love
          </h2>
        </div>
        <div className="mt-6">
          {/* Line */}
          <p className="text-[#8490A1] font-raleway w-[581px] text-[24px] text-right leading-[28px]">
            We’ve designed and curated pieces that are a cut above your average
            home goods, because when you level up your everyday objects, you
            elevate your daily rituals. Let the magic happen.
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col items-center gap-[36px]">
          {/* Left column - Single image */}
          <div className="w-[1271px] h-[600px] flex flex-row gap-[36px]">
            <img
              src={image1} // replace with actual image URL
              alt="Craft 2"
              className="w-[792px] h-[600px] r"
            />
            <img
              src={image2} // replace with actual image URL
              alt="Craft 1"
              className="w-[446px] h-[600px] "
            />
          </div>

          {/* Right column - Two images stacked */}
          <div className="w-[1271px] h-[600px] flex flex-row gap-[36px]">
            <img
              src={image4}
              alt="Craft 4"
              className="w-[446px] h-[600px] "
            />
            <div class="relative w-[792px] h-[600px]">
              <img
                src={image3} // replace with actual image URL
                alt="Craft 3"
                className=" w-full h-full "
              />
              <button class="absolute font-raleway top-1/2 left-1/2 w-[225px] h-[63px] transform -translate-x-1/2 -translate-y-1/2 bg-transparent bg-opacity-20 text-white text-[20px] font-medium rounded-full flex items-center justify-center shadow-lg backdrop-blur-md transition">
                Show More
                <span className="w-[57px] h-[1px] ml-3 bg-white inline-block relative">
                  <span className="absolute right-0 top-[-3px] border-t-[2px] border-r-[2px] border-white w-2 h-2 rotate-45"></span>
                </span>
              </button>
              {/* <button
                className="font-raleway max-sm:w-[250px] max-sm:h-[44px] w-[267px] h-[63px] gap-[16px] text-[14px] bg-white bg-opacity-20 backdrop-blur-sm border border-white text-white py-[16px] px-[23px] rounded-[97px] transition-all flex items-center justify-center relative"
                style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              >
                Explore Our Collection
                <span className="w-[57px] h-[2px] bg-white inline-block relative">
                  <span className="absolute right-0 top-[-3px] border-t-[2px] border-r-[2px] border-white w-2 h-2 rotate-45"></span>
                </span>
              </button> */}
            </div>
          </div>

          {/* Lower left - Show more button overlaid */}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default CraftsSection;
