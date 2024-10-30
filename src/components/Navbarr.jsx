import React from "react";
import image from "../assets/LOGO.png";

const Navbar = () => {
  return (
    <nav className="bg-[#214A3E] flex justify-center items-center h-[90px] w-[100%]  ">
      {/* Logo */}
      <div className="flex justify-between w-[100%] items-center w-[90%]">
        <img src={image} className=" h-[21px]" />

        <ul className="flex justify-between font-raleway max-w-[42.97%] hidden 1350px:flex">
          <div className="px-[28px] py-[9px] hover:bg-[#556f64] hover:cursor-pointer rounded-full text-center">
            <li className="text-white cursor-pointer text-[20px] text-center">
              Home
            </li>
          </div>
          <div className="px-[28px] py-[9px] hover:bg-[#556f64] hover:cursor-pointer rounded-full text-center">
            <li className="text-white cursor-pointer text-[20px]">About</li>
          </div>
          <div className="px-[28px] py-[9px] hover:bg-[#556f64] hover:cursor-pointer rounded-full text-center">
            <li className=" text-white cursor-pointer text-[20px]">Products</li>
          </div>
          <div className="px-[28px] py-[9px] hover:bg-[#556f64] hover:cursor-pointer rounded-full text-center">
            <li className=" text-white cursor-pointer text-[20px]">
              Contact Us
            </li>
          </div>
        </ul>

        {/* Explore Button */}
        <button className="bg-[#10251F] font-raleway 1350px:flex hidden w-[184px] h-[56px] flex justify-center items-center text-[#ece6d1] px-[46px] py-[17px] rounded-[81px] text-[24px] leading-[120%]">
          EXPLORE
        </button>
        <div class="flex flex-col space-y-1 1350px:hidden">
          <span class="block w-8 h-1 bg-white"></span>
          <span class="block w-8 h-1 bg-white"></span>
          <span class="block w-8 h-1 bg-white"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
