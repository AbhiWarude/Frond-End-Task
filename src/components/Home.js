import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

const Home = () => {
  return (
    <div className="relative w-full h-screen home-container height-50">
      <div className="absolute bottom-0 w-full flex flex-col items-center text-white bg-black bg-opacity-50 p-8">
        <div className="w-[80%] max-w-lg text-center p-4 bg-opacity-75 rounded-lg border-4 border-white">
          <h1 className="text-3xl font-bold mb-4">Meet Chef Matt</h1>
        </div>
        <div className="mt-8" style={{ marginBottom: '0%' }}>
          <FontAwesomeIcon icon={faEllipsisH} className="text-7xl" />
        </div>
      </div>
    </div>
  );
};

export default Home;
