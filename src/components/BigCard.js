import React from 'react';
import { FaCircle } from 'react-icons/fa'; // Importing icons for the dots

const BigCard = ({ leftImage, rightImage, buttonText }) => {
  return (
    <div className="bg-white border rounded-lg shadow-lg p-4 max-w-4xl mx-auto">
      {/* Flex container for the card content */}
      <div className="flex items-center justify-between">
        {/* Left Image */}
        <div className="w-1/2 p-4">
         
        </div>

        {/* Center Content with Button */}
        <div className="flex flex-col items-center justify-center w-1/2 p-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded mb-4">
            {buttonText}
          </button>
          {/* Dots for navigation */}
          <div className="flex space-x-2">
            <FaCircle className="text-gray-500 text-xs" />
            <FaCircle className="text-gray-500 text-xs" />
            <FaCircle className="text-gray-500 text-xs" />
          </div>
        </div>

        {/* Right Image */}
        <div className="w-1/2 p-4">

        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="p-6">
      <BigCard 
        leftImage="/path-to-left-image.jpg" 
        rightImage="/path-to-right-image.jpg" 
        buttonText="Click Me" 
      />
    </div>
  );
};

export default App;
