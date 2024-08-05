import React from 'react';
import { FaShippingFast, FaHeadset, FaCertificate } from 'react-icons/fa'; // Import icons from react-icons
import chatImage from '../images/footerimg.jpg'; // Import the image

const Footer = () => {
  return (
    <div className="bg-black text-white py-4 h-[30vh] w-full">
      <div className="flex justify-between items-center px-6">
        {/* Left side: Free Shipping Worldwide */}
        <div className="flex items-center space-x-2 text-[#D29A5A] p-2 rounded">
          <FaShippingFast className="text-[20px]" /> {/* Adjust icon font size */}
          <div className="text-[20px] flex flex-col">
            <span>Free Shipping Worldwide</span>
            <span className="text-white">Guaranteed Delivery</span>
          </div> {/* Adjust text font size */}
        </div>

        {/* Center: 24/7 Customer Service */}
        <div className="flex items-center space-x-2 text-[#D29A5A]">
          <FaHeadset className="text-xl" />
          <div className="text-[20px] flex flex-col">
          <span>24/7 Customer Service</span>
          <span className="text-white text-[15px]">Text Us 24/7 at 070-7782-9137</span>
          </div>
        </div>

        {/* Right side: Quality Guarantee */}
        <div className="flex items-center space-x-2 text-[#D29A5A]">
          <FaCertificate className="text-[20px]" />
          <div className="text-[20px] flex flex-col">
          <span>Quality Guarantee</span>
          <span className="text-white text-[15px]">Send Within 30 Days</span>
        </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="my-4 bg-[#D29A5A] h-[5px] border-none top-15px"></div>

      {/* Centered: Chat with Matt and Image */}
      <div className="flex justify-center items-center px-6 w-[100%] mx-auto top-[50px]">
        <img src={chatImage} alt="Chat with Matt" className="w-8 h-8 mr-2 w-[10%] h-[5%]"  /> {/* Image */}

      </div>
    </div>
  );
};

export default Footer;
