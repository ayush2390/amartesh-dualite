import React from "react";
import image from "../assets/image-10.png";
import image1 from "../assets/x.png";
import image2 from "../assets/instagram.png";
import image3 from "../assets/facebook.png";

const Footer = () => {
  return (
    <footer className="bg-[#214A3E] text-white px-[75px] pt-[96px] w-full">
      <div className="container   flex flex-col justify-between ">
        {/* Logo and Description */}
        <div className="flex h-[246px] justify-between w-[1290px] mb-[96px] ">
          <div className=" pr-[17px] pb-[45px]  w-[295px] flex flex-col gap-[25px]">
            <div className="flex items-center space-x-3 mb-4">
              <img src={image} alt="Logo" className="h-[137px] w-[139px]" />
            </div>
            <p className="text-[14px] tracking-[5%] leading-[120%] text-left font-roboto font-light">
              Inspired by the raw beauty of stone, sand, & marble. Our textures
              bring the calming essence of nature indoors, adding depth &
              character.
            </p>
          </div>

          {/* Company Links */}
          <div className=" flex flex-col gap-[27px] text-left h-[247px]">
            <h3 className="font-bold font-raleway leading-[18px] text-[20px]">
              COMPANY
            </h3>
            <ul className="space-y-2">
              <li className="text-[16px] font-roboto font-light leading-[30px]">
                About us
              </li>
              <li className="text-[16px] font-roboto font-light  leading-[30px]">
                Partner program
              </li>
              <li className="text-[16px] font-roboto font-light leading-[30px]">
                Career
              </li>
              <li className="text-[16px] font-roboto font-light  leading-[30px]">
                Contact us
              </li>
              <li className="text-[16px] font-roboto font-light leading-[30px]">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-[27px] text-left h-[247px]">
            <h3 className="font-bold font-raleway  leading-[18px] text-[20px]">
              QUICK LINKS
            </h3>
            <ul className="space-y-2">
              <li className="text-[16px] font-roboto font-light  leading-[30px]">Pricing</li>
              <li className="text-[16px] font-roboto font-light  leading-[30px]">Reviews</li>
              <li className="text-[16px] font-roboto font-light  leading-[30px]">Mail</li>
              <li className="text-[16px]  font-roboto font-light  leading-[30px]">Contact us</li>
              <li className="text-[16px] font-roboto font-light  leading-[30px]">Privacy Policy</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-left space-y-[14px]">
            <h3 className="font-bold font-raleway text-[20px]">CONTACT</h3>
            <p className=" text-[24px] font-roboto font-extralight ">
              info@cementolime.com
              <br />
              www.cementolime.com
            </p>
            <p className="font-bold font-raleway text-[20px]">HELPLINE</p>
            <p className="text-[24px] font-roboto font-extralight">+91 9580628537</p>
          </div>
        </div>

        <div>
          {/* Divider Line */}
          <div className="border-t border-[#F5F0D0]  w-[1290px] "></div>

          {/* Footer Bottom */}
          <div className="container flex flex-row justify-between items-center w-[1290px] h-[155px] pt-[49px] pb-[48px]">
            {/* Left-side content */}
            <div className="w-[306px] h-[71px] flex flex-col gap-[9px] py-[1px]">
              <h2 className="text-[32px] leading-[22px] font-italiana">Cementolime</h2>
              <p className="text-[14px] font-roboto leading-[22px]">
                &copy; 2024 Cementolime, Inc. All rights reserved.
              </p>
            </div>

            {/* Right-side (Social Media Icons) */}
            <div className="flex w-[226px] gap-[23px] mr-[100px]">
              <div className="w-[60px] h-[60px] rounded-full bg-white bg-opacity-15 border-white border-[1px] border-opacity-50	 px-[13px] py-[12px]">
                <img src={image1} />
              </div>
              <div className="w-[60px] h-[60px] rounded-full bg-white bg-opacity-15 border-white border-[1px] border-opacity-50	 px-[13px] py-[12px]">
                <img src={image2} />
              </div>
              <div className="w-[60px] h-[60px] rounded-full bg-white bg-opacity-15 border-white border-[1px] border-opacity-50	 px-[13px] py-[12px]">
                <img src={image3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
