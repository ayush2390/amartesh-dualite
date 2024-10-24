import image1 from "../assets/11.png";
import image2 from "../assets/22.png";
import image3 from "../assets/33.png";
import image4 from "../assets/44.png";
const CraftsSection = () => {
  return (
    <div className="w-full py-[80px] px-0 flex flex-col  justify-center h-[1690px] gap-x-[64px] gap-y-[81px]">
      {/* <div className="h-[1690px] gap-x-[64px] gap-y-[81px]"> */}
        {/* Title and description */}
        <div className="flex flex-row bg-red-900 w-[1285px] h-[213px] justify-between items-center mb-10">
          <div className="flex flex-col ">
            <div className="flex items-center mb-4">
              <div className="w-[64px] h-[2px] bg-[#8FA49E]"></div>
              <h2 className="text-[14px] uppercase tracking-wider text-gray-600 ml-3">
                Recent works
              </h2>
            </div>
            <h2 className="text-[60px] font-bold text-left">
              Some of <span className="text-[#214A3E] italic">our crafts</span>{" "}
              <br />
              made with love
            </h2>
          </div>
          <div className="mt-6">
            {/* Line */}
            <p className="text-[#8490A1] w-[581px] text-[24px] text-right leading-[28px]">
              We’ve designed and curated pieces that are a cut above your
              average home goods, because when you level up your everyday
              objects, you elevate your daily rituals. Let the magic happen.
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col items-center gap-[36px]">
            {/* Left column - Single image */}
            <div className="w-[1271px] h-[600px] flex flex-row gap-[36px]">
              <img
                src={image1} // replace with actual image URL
                alt="Craft 1"
                className="w-[446px] h-[600px] rounded-lg"
              />
              <img
                src={image2} // replace with actual image URL
                alt="Craft 2"
                className="w-[792px] h-[600px] rounded-lg"
              />
            </div>

            {/* Right column - Two images stacked */}
            <div className="w-[1271px] h-[600px] flex flex-row gap-[36px]">
              <div class="relative w-[792px] h-[600px]">
                <img
                  src={image3} // replace with actual image URL
                  alt="Craft 3"
                  className="w-[792px] h-[600px] rounded-lg"
                />
                <button class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent bg-opacity-20 text-white font-medium rounded-full py-2 px-6 flex items-center shadow-lg backdrop-blur-md hover:bg-opacity-30 transition">
                  Show More →
                </button>
              </div>
              <img
                src={image4}
                alt="Craft 4"
                className="w-[446px] h-[600px] rounded-lg"
              />
            </div>

            {/* Lower left - Show more button overlaid */}
          </div>
        </div>
      </div>
    // </div>
  );
};

export default CraftsSection;
