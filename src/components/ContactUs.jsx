import React from "react";
import image from "../assets/rectangle-47.png";
const ContactUs = () => {
  return (
    <section className="h-[856px] flex justify-center w-full">
      <div className="container flex items-center gap-[95px] py-[95px] justify-center">
        {/* Left Side - Form Section */}
        <div className="w-[644px] h-[595px] space-y-[23px]">
          <div className="flex items-center mb-4">
            <div className="w-[64px] h-[2px] bg-[#8FA49E]"></div>
            <h2 className="text-[14px] font-raleway font-semibold uppercase tracking-wider text-[#8FA49E] ml-3">
              Contact Us
            </h2>
          </div>

          <h1 className="text-[54px] font-raleway font-bold text-gray-900 leading-[62px]">
            Let’s Create{" "}
            <span className="text-[#214A3E] italic">Something Great</span>{" "}
            Together
          </h1>
          <p className="text-[18px] font-raleway font-light text-[#444444] text-left leading-[32px]">
            Lorem ipsum tempor dolor elementum tellus non ipsum faucibus. Justo,
            magna mauris posuere auctor justo. Habitant proin aliquet volutpat
            leo ultricies.
          </p>

          {/* Form */}
          <form className="space-y-[30px]">
            <div className="flex gap-[30px]">
              <input
                type="text"
                placeholder="Enter Full Name"
                className="w-[305px] placeholder-[#8FA49E] font-raleway placeholder-text-[18px] h-[57px] p-3 bg-[#E5EDE4] border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="Enter Mobile Number"
                className="w-[305px] placeholder-[#8FA49E] font-raleway placeholder-text-[18px] h-[57px] p-3 bg-[#E5EDE4] border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <textarea
              placeholder="Enter Your Message"
              className="w-[644px] h-[144px] placeholder-[#8FA49E] font-raleway placeholder-text-[18px] p-3 bg-[#E5EDE4] border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="bg-[#214A3E] font-raleway w-[150px] h-[50px] text-white px-[24px] py-[13px] rounded-[89px] text-[20px] flex items-center justify-between "
            >
              Submit 
              <span className="ml-[14px] w-8 h-[1px] bg-white inline-block relative">
            <span className="absolute right-0 top-[-3px] border-t-[2px] border-r-[2px] border-white w-2 h-2 rotate-45"></span>
          </span>
            </button>
          </form>
        </div>

        {/* Right Side - Image Section */}
        <div className="w-[538px] h-[666px] flex justify-center">
          <img
            src={image}
            alt="Decorative Image"
            className="w-full h-auto object-cover  shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
