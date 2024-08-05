import React from 'react';
import './FAQSection.css'; 
import { FaEnvelope } from 'react-icons/fa'; // Importing an icon for the email input

const FAQSection = () => {
  return (
    <div className="relative bg-cover bg-center h-[50vh] p-6 faqsection-container">
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 text-white">
        <div className="max-w-4xl mx-auto text-left">
          {/* Heading */}
          <h2 className="text-3xl font-bold mb-4 underline">SIGN UP SPECIAL PROMOTIONS</h2>

          {/* Description */}
          <p className="text-lg mb-6">Get the latest updates and special offers delivered straight to your inbox!</p>

          {/* Email Input and Subscribe Button */}
          <div className="flex justify-start items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full max-w-xs px-4 py-2 rounded-l-md border border-gray-300 text-white placeholder-gray-400 bg-black"
            />
            <button className="bg-[#D29A5A] text-white px-4 py-2 rounded-r-md flex items-center hover:bg-[#B87A47] transition-colors">
              <FaEnvelope className="mr-2" /> Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
