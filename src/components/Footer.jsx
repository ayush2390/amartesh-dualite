import React from "react";
import image from "../assets/image-10.png";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white px-[75px] pt-[96px] w-full">
      <div className="container mx-auto   flex flex-col justify-between ">
        {/* Logo and Description */}
        <div className="flex justify-between w-[1290px] ">
          <div className="mb-[45px] w-[295px] w-[275px] flex flex-col gap-[25px]">
            <div className="flex items-center space-x-3 mb-4">
              <img src={image} alt="Logo" className="h-[137px] w-[139px]" />
            </div>
            <p className="text-sm max-w-xs text-left">
              Inspired by the raw beauty of stone, sand, & marble. Our textures
              bring the calming essence of nature indoors, adding depth &
              character.
            </p>
          </div>

          {/* Company Links */}
          <div className="mb-8 lg:mb-0 text-left  w-[141px] h-[247px]">
            <h3 className="font-semibold mb-4 text-[20px]">COMPANY</h3>
            <ul className="space-y-2">
              <li className="text-[16px] leading-[30px]">About us</li>
              <li className="text-[16px] leading-[30px]">Partner program</li>
              <li className="text-[16px] leading-[30px]">Career</li>
              <li className="text-[16px] leading-[30px]">Contact us</li>
              <li className="text-[16px] leading-[30px]">Privacy Policy</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="mb-8 lg:mb-0 text-left w-[141px] h-[247px]">
            <h3 className="font-semibold mb-4 text-[20px]">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li className="text-[16px] leading-[30px]">Pricing</li>
              <li className="text-[16px] leading-[30px]">Reviews</li>
              <li className="text-[16px] leading-[30px]">Mail</li>
              <li className="text-[16px] leading-[30px]">Contact us</li>
              <li className="text-[16px] leading-[30px]">Privacy Policy</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-left aa">
            <h3 className="font-semibold mb-4 text-[20px]">CONTACT</h3>
            <p className="mb-4 text-[24px] ">
              info@cementolime.com
              <br />
              www.cementolime.com
            </p>
            <p className="font-semibold text-[20px]">HELPLINE</p>
            <p className="text-[24px]">+91 9580628537</p>
          </div>
        </div>

        <div>
          {/* Divider Line */}
          <div className="border-t border-[#F5F0D0] mt-10 w-[1290px] "></div>

          {/* Footer Bottom */}
          <div className="container flex flex-row justify-between items-center w-[1290px] h-[155px] pt-[49px] pb-[48px]">
            {/* Left-side content */}
            <div className="w-[306px] h-[71px] leading-[22px]">
              <h2 className="text-[32px] font-bold w-[173px] h-[22px] leading-[22px]">
                Cementolime
              </h2>
              <p className="text-[14px] w-[306px] h-[38px] leading-[22px]">
                &copy; 2024 Cementolime, Inc. All rights reserved.
              </p>
            </div>

            {/* Right-side (Social Media Icons) */}
            <div className="flex space-x-4">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
