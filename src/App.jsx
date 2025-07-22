import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import QuickAccessMenu from './components/QuickAccessMenu';
import HeroBanner from './components/HeroBanner';

function App() {
  return (
    <div className="font-poppin bg-gray-50 pb-20">
      <Navbar />
      <HeroBanner />
      <div className="pt-5"></div>
      
      <QuickAccessMenu />
      
      <div className="pt-20"></div>
      
      <HeroCarousel />
      
      
    </div>
  );
}

export default App;