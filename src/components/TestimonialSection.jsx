import React from "react";

const TestimonialSection = () => {
  return (
    <section className="bg-[#e9f0e6] py-16 px-4 flex items-center justify-center w-full h-[652px]">
      <div className="max-w-3xl text-center relative">
        {/* Quotation Mark */}
        <div className="text-[272px] h-[162px] text-green-800 leading-none absolute -top-10 left-1/2 transform -translate-x-1/2">
          “
        </div>

        {/* Testimonial Text */}
        <div className="top-[5435px] left-[235px] flex flex-col gap-[60px]">
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 mt-16">
            We chose Cementolime, for their specialist expertise and creativity
            and were absolutely delighted with the end results. We wanted to
            create a striking yet welcoming reception and waiting area and this
            was achieved using Cementolime’s beautiful Perlata and Granite
            finishes on the walls and desk panels. Cementolime realised our
            vision throughout the whole design process and delivered seamlessly.
            I would certainly choose Cementolime for any future projects.
          </p>

          {/* Author */}
          <p className="text-green-900 font-semibold text-lg">
            Lucy Walker, Founder at Walker Malagoni
          </p>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-200 transition duration-200">
              <span className="text-gray-600">←</span>
            </button>
            <button className="bg-green-800 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-green-900 transition duration-200">
              <span className="text-white">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
