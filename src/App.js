import React, { useState } from 'react';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import ProductCard from './components/ProductCard';
import CardContainer from './components/CardContainer';
import ImageGrid from './components/ImageGrid';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App relative h-screen">
      {/* Sidebar with a fixed width and height */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content Area taking the rest of the width */}
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-84' : 'ml-0'}`}>
        <Home />
        <ProductCard/>
        <CardContainer/>
        <ImageGrid/>
        <FAQSection/>
        <Footer/>
      </div>
      
    </div>
  );
}

export default App;
