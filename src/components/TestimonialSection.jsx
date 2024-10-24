import React from "react";
import image1 from "../assets/arrow-right.png"
import image2 from "../assets/arrow-left.png"

const TestimonialSection = () => {
  return (
    <section className="bg-[#e9f0e6] flex items-center justify-center w-full h-[652px]">
        {/* Quotation Mark */}
        <div className="text-[272px] h-[162px] text-green-800 font-robotoserif leading-none absolute -top-10 left-1/2 transform -translate-x-1/2">
          “
        </div>

        {/* Testimonial Text */}
        <div className=" flex text-center flex-col gap-[60px] w-[971px] h-[383px]">
          <p className="text-[#214A3E] text-center font-raleway text-[24px] leading-[120%] mt-16">
            We chose Cementolime, for their specialist expertise and creativity
            and were absolutely delighted with the end results. We wanted to
            create a striking yet welcoming reception and waiting area and this
            was achieved using Cementolime’s beautiful Perlata and Granite
            finishes on the walls and desk panels. Cementolime realised our
            vision throughout the whole design process and delivered seamlessly.
            I would certainly choose Cementolime for any future projects.
          </p>

          {/* Author */}
          <p className="text-[#214A3E] font-raleway font-semibold text-[20px]">
            Lucy Walker, Founder at Walker Malagoni
          </p>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center space-x-4">
            <button className="bg-white rounded-full w-[50px] h-[50px] flex items-center justify-center shadow-md text-center">
              <img src={image2} />
            </button>
            <button className="bg-[#214A3E] rounded-full w-[50px] h-[50px] flex items-center justify-center shadow-md text-center">
             <img src={image1} />
            </button>
          </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
