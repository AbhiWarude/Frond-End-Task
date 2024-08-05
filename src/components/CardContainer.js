import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import './CardContainer.css'; // Import the CSS file

const CardContainer = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center CardContainer-container bottom-30 height-20">
      {/* Discount Message */}
      <div className="absolute top-8 text-center">
      <p className="text-3xl font-bold mb-2">ONLINE ONLY</p>
      <p className="text-3xl mb-2">GET 20% OFF YOUR ORDER OF $50 OR MORE</p>
        <p className="text-2xl font-semibold">Use code <span className="text-red-800">“Chef20”</span></p>
      </div>

      {/* Main Content */}
      <div className="relative w-[80%] max-w-lg text-center bottom-20 p-4 bg-opacity-75 rounded-lg border-4 border-black">
        <h1 className="text-3xl font-bold mb-4">Show Now</h1>
      </div>
      {/* Icon */}
      <div className="absolute top-30">
        <FontAwesomeIcon icon={faEllipsisH} className="text-7xl" />
      </div>
    </div>
  );
};

export default CardContainer;
