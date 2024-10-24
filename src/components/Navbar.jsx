import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#223f35] px-[81px] flex justify-between items-center h-[90px] w-full min-w-[1440px]">
      {/* Logo */}
      <div className="text-[#ece6d1] font-serif text-xl">cementotime</div>

      {/* Navigation Links */}
      <ul className="flex justify-between items-center w-[467px]">
        <li className="bg-[#556f64] cursor-pointer text-white w-[122px] h-[38px] rounded-full text-[20px] text-center" >Home</li>
        <li className="text-white cursor-pointer text-[20px]">About</li>
        <li className=" text-white cursor-pointer text-[20px]">Products</li>
        <li className=" text-white cursor-pointer text-[20px]">Contact Us</li>
      </ul>

      {/* Explore Button */}
      <button className="bg-[#10251F] w-[184px] h-[56px] flex justify-center items-center text-[#ece6d1] px-[46px] py-[17px] rounded-[81px] text-[20px]">
        EXPLORE
      </button>
    </nav>
  );
};

export default Navbar;
