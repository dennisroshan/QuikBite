import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Slider from './components/Slider';
import BrandSection from './components/BrandSection';
import CustomizationSection from './components/CustomizationSection';
import CustomerCreations from './components/CustomerCreations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Slider Section */}
      <Slider />
      
      {/* Brand Section */}
      <BrandSection />
      
      {/* Customization Section */}
      <CustomizationSection />
      
      {/* Customer Creations Section */}
      <CustomerCreations />
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
