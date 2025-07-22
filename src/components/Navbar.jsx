import React, { useEffect, useState } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    }
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled? 'shadow-md bg-white/70 backdrop-blur-lg' : ''}`}>
      <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-blue-300 font-bold text-2xl">SIAKAD</span>
        </div> 
        
        <nav>
          <ul className="flex space-x-6"> 
            <li>
              <a href="#hero" className="text-white font-medium hover:hover:font-medium transition duration-300">
                Beranda
              </a>
            </li>
            <li>
              <a href="#programs" className="text-white hover:hover:font-medium font-thin transition duration-300">
                Program Studi
              </a>
            </li>
            <li>
              <a href="#login" className="text-white hover:hover:font-medium font-thin transition duration-300">
                Login
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;