import React, { useState } from "react";
import image1 from "../assets/arrow-right.png";
import image2 from "../assets/arrow-left.png";
import quotes from "../assets/quotes.png";

const TestimonialSection = () => {
  const testimonials = [
    {
      text: "We chose Cementolime, for their specialist expertise and creativity and were absolutely delighted with the end results. We wanted to create a striking yet welcoming reception and waiting area and this was achieved using Cementolime’s beautiful Perlata and Granite finishes on the walls and desk panels. Cementolime realised our vision throughout the whole design process and delivered seamlessly. I would certainly choose Cementolime for any future projects.",
      author: "Lucy Walker, Founder at Walker Malagoni",
    },
    {
      text: "We chose Cementolime, for their specialist expertise and creativity and were absolutely delighted with the end results. We wanted to create a striking yet welcoming reception and waiting area and this was achieved using Cementolime’s beautiful Perlata and Granite finishes on the walls and desk panels. Cementolime realised our vision throughout the whole design process and delivered seamlessly. I would certainly choose Cementolime for any future projects.",
      author: "James Smith, CEO at Tech Solutions",
    },
    {
      text: "We chose Cementolime, for their specialist expertise and creativity and were absolutely delighted with the end results. We wanted to create a striking yet welcoming reception and waiting area and this was achieved using Cementolime’s beautiful Perlata and Granite finishes on the walls and desk panels. Cementolime realised our vision throughout the whole design process and delivered seamlessly. I would certainly choose Cementolime for any future projects.",
      author: "Samantha Lee, Creative Director at Lee Studios",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNext = () => {
    setCurrentTestimonial((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentTestimonial((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-[#e9f0e6] flex flex-col items-center justify-between pb-[50px] w-full h-[652px] max-md:max-h-[542px] max-sm:max-h-[596px]">
      {/* Quotation Mark */}
      <div className=" h-[63px] w-[83px] mt-[70px] max-md:mt-[40px] max-sm:mt-[70px]">
        <img src={quotes} />
      </div>

      {/* Testimonial Text */}
      <div className="flex text-center items-center flex-col w-full gap-[60px] max-w-[971px] h-[383px] max-xmd:max-w-[685px] max-sm:max-w-[324px]">
        <p className="text-[#214A3E] text-center font-raleway w-full text-[24px] max-xmd:text-[20px] max-md:max-w-[586px] max-md:text-[15px] max-sm:text-[12px] max-sm:max-w-[324px] leading-[120%]">
          {testimonials[currentTestimonial].text}
        </p>

        {/* Author */}
        <p className="text-[#214A3E] font-raleway font-semibold text-[20px]">
          {testimonials[currentTestimonial].author}
        </p>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={handlePrev}
            className="bg-white rounded-full w-[50px] h-[50px] flex items-center justify-center shadow-md text-center"
          >
            <img src={image2} alt="prev" />
          </button>
          <button
            onClick={handleNext}
            className="bg-[#214A3E] rounded-full w-[50px] h-[50px] flex items-center justify-center shadow-md text-center"
          >
            <img src={image1} alt="next" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
