import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandSection from './components/BrandSection';
import CustomizationSection from './components/CustomizationSection';
import CustomerCreations from './components/CustomerCreations';
import Footer from './components/Footer'; // Import the Footer component
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Slider />
      <BrandSection />
      <CustomizationSection />
      <CustomerCreations />
      <Footer /> {/* Add Footer at the bottom */}
    </div>
  );
}

export default App;
