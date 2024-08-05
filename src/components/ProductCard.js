import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './ProductCard.css'; // Import the CSS file

// Import local images
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';

const ProductCard = () => {
  return (
    <div className="relative w-full h-screen ProductCard-container">
      <div className="absolute top-0 left-20 p-8 text-white bg-black bg-opacity-0">
        <div className="w-[80%] max-w-lg text-center p-4 bg-opacity-75 rounded-lg">
          <h1 className="text-3xl font-bold mb-4" style={{ color: '#D29A5A' }}>
            Chef MATT PRODUCTS
          </h1>
          <hr className="my-4 border-t-4 border-[#D29A5A]" />
          <span>
            Shop Gourmet Chef Quality Products From the Chef Matt Brand.
            Chef it yourself and Thank us later.
          </span>
        </div>

        {/* Swiper Component for Circular Images */}
        <div className="mt-8 flex justify-center">
        <div className="swiper-container-wrapper mr-30"> 
            <Swiper
              rewind={true}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper w-full h-60" // Adjust width and height
              spaceBetween={140} // Adjust space between slides
              slidesPerView={'auto'} // Allows to see more than one slide
            >
              <SwiperSlide className="flex justify-center items-center">
                <img 
                  src={image1} 
                  alt="Slide 1" 
                  className="w-32 h-32 rounded-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center">
                <img 
                  src={image2} 
                  alt="Slide 2" 
                  className="w-32 h-32 rounded-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center">
                <img 
                  src={image3} 
                  alt="Slide 3" 
                  className="w-32 h-32 rounded-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center items-center">
                <img 
                  src={image4} 
                  alt="Slide 4" 
                  className="w-32 h-32 rounded-full object-cover"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
