import React from 'react';
import './ImageGrid.css'; // Import the CSS file if you have custom styles

// Import images
import imagebanner1 from '../images/imagebanner1.jpg'; // Adjust the path accordingly
import imagebanner2 from '../images/imagebanner2.jpg';
import imagebanner3 from '../images/imagebanner3.jpg';
import imagebanner4 from '../images/imagebanner4.jpg';

const ImageGrid = () => {
  return (
    <div className="image-grid-wrapper bottom-20">
      <div className="image-grid-container">
        <div className="grid grid-cols-2 gap-0">
          {/* Image 1 */}
          <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden bottom-30">
            <img
              src={imagebanner1}
              className="object-cover w-full h-full image-style"
            />
          </div>
          {/* Image 2 */}
          <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={imagebanner2} // Use imported image
              className="object-cover w-full h-full image-style"
            />
          </div>
          {/* Image 3 */}
          <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={imagebanner3} // Use imported imag
              className="object-cover w-full h-full image-style"
            />
          </div>
          {/* Image 4 */}
          <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={imagebanner4} // Use imported image
              className="object-cover w-full h-full image-style"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
