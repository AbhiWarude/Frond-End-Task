import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import chefImage from '../images/footerimg.jpg'; // Import the image

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full text-white flex flex-col p-4 transition-all duration-300 ${isOpen ? 'w-64 bg-gray-800' : 'w-0 overflow-hidden'}`}
      style={{
        height: '70%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 10,
        backgroundColor: '#130F0C',
      }}
    >
      <div className="flex items-center mb-6 cursor-pointer" onClick={toggleSidebar}>
        {isOpen ? (
          <FontAwesomeIcon icon={faTimes} style={{ width: '50px' }} className="mr-3" />

        ) : (
          <FontAwesomeIcon icon={faBars} style={{ width: '50px' }} className="mr-3" />

        )}
        <span className="text-xl font-semibold">{isOpen ? 'Close' : ''}</span>
      </div>
      {isOpen && (
        <>
          <nav className="flex-1 bg-transparent">
            <ul className="space-y-4">
              <li>
                <a 
                  href="/" 
                  className="block p-2 text-white rounded hover:bg-gray-600"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="block p-2 text-white rounded hover:bg-gray-600">Products</a>
              </li>
              <li>
                <a href="/" className="block p-2 text-white rounded hover:bg-gray-600">Meet Chef Matt</a>
              </li>
              <li>
                <a href="/" className="block p-2 text-white rounded hover:bg-gray-600">FAQ</a>
              </li>
              <li>
                <a href="/" className="block p-2 text-white rounded hover:bg-gray-600">Contact Us</a>
              </li>
            </ul>
          </nav>
          <hr className="my-4 border-gray-600" />
          <div className="mt-6">
            <p className="text-gray-400">Support 24/7</p>
            <p className="text-gray-400">0123456789</p>
          </div>
          <div className="flex mt-6 space-x-4 items-center">
            <FontAwesomeIcon icon={faShoppingCart} className="text-2xl hover:text-gray-400" />
            <span className="text-sm ml-2">CART</span>
            <FontAwesomeIcon icon={faHeart} className="text-2xl hover:text-gray-400" />
            <span className="text-sm ml-2">WISHLIST</span>
          </div>
        </>
      )}
      {!isOpen && (
        <div className="fixed top-1/2 left-0 transform -translate-y-1/2 flex flex-col items-center">
          {/* Image */}
          <img src={chefImage} alt="Chef Matt" className="h-24 w-34 object-cover rounded-full mb-2" style={{ transform: 'rotate(90deg)' }} /> {/* Rotate image 90 degrees */}

        </div>
        
      )}
    </div>
    
  );
};

export default Sidebar;
