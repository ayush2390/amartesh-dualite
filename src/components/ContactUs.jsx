import React from "react";
import image from "../assets/rectangle-47.png";
const ContactUs = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 w-full">
      <div className="container mx-auto  lg:px-0 flex flex-col lg:flex-row items-center gap-[95px] w-[1277px] h-[66px]">
        {/* Left Side - Form Section */}
        <div className="w-[644px] h-[595px] mb-8 ">
          <div className="flex items-center mb-4">
            <div className="w-[64px] h-[2px] bg-gray-600"></div>
            <h2 className="text-[14px] uppercase tracking-wider text-gray-600 ml-3">
              Contact Us
            </h2>
          </div>

          <h1 className="text-[54px] font-bold text-gray-900 mb-4 w-[644px]">
            Let’s Create{" "}
            <span className="text-[#214A3E] italic">Something Great</span>{" "}
            Together
          </h1>
          <p className="text-[18px] w-[644px] text-gray-500 mb-8 text-left leading-[32px]">
            Lorem ipsum tempor dolor elementum tellus non ipsum faucibus. Justo,
            magna mauris posuere auctor justo. Habitant proin aliquet volutpat
            leo ultricies.
          </p>

          {/* Form */}
          <form className="space-y-[30px]">
            <div className="flex space-x-[32px]">
              <input
                type="text"
                placeholder="Enter Full Name"
                className="w-[305px] placeholder-[#8FA49E] h-[57px] p-3 bg-[#E5EDE4] border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="Enter Mobile Number"
                className="w-[305px] placeholder-[#8FA49E] h-[57px] p-3 bg-[#E5EDE4] border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <textarea
              placeholder="Enter Your Message"
              className="w-[644px] h-[144px] placeholder-[#8FA49E] p-3 bg-[#E5EDE4] border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="bg-[#214A3E] w-[150px] h-[50px] text-white px-[24px] py-[13px] rounded-[89px] hover:bg-green-700 transition ease-in-out flex items-center justify-between "
            >
              Submit 
              <span className="ml-[14px] w-8 h-[1px] bg-white inline-block relative">
            <span className="absolute right-0 top-[-3px] border-t-[2px] border-r-[2px] border-white w-2 h-2 rotate-45"></span>
          </span>
            </button>
          </form>
        </div>

        {/* Right Side - Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={image}
            alt="Decorative Image"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
