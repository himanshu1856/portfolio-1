import React, { useState } from 'react';
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import SearchBar from './SearchBar';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navbar_buttons = [
    {
      "name": "Home"
    },
    {
      "name": "Projects"
    },
    {
      "name": "About Me"
    }
  ];

  return (
    <div className="w-full lg:flex justify-center items-center py-4 lg:py-6 px-10 lg:px-0">
      {/* Hamburger Icon */}
      <div className="lg:hidden">
        <button onClick={() => setIsMobileMenuOpen(true)}>
          {/*hamburger menu */}
          <span><RxHamburgerMenu color='white' size={42} /></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-gray-100 flex flex-col items-center justify-center z-10">
          {/* Close Button */}
          <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-5 right-5 text-2xl">
            <span><RxCross1 /></span>
          </button>

          {/* Mobile Menu Items */}
          {navbar_buttons.map((button, index) => (
            <a key={index} href={`#${button.name.toLowerCase()}`} className="text-black uppercase font-semibold text-lg my-2" onClick={() => setIsMobileMenuOpen(false)}>
              {button.name}
            </a>
          ))}
        </div>
      )}

      {/* Full Navbar for larger screens */}
      <div className="hidden lg:flex w-full h-14 bg-gray-600 opacity-70 rounded-full flex justify-around items-center shadow-lg">
        <a className='text-teal-300 uppercase font-semibold font-mono text-3xl'>PORTFOLIO</a>
        <div>
          {navbar_buttons.map((button, index) => (
            <a key={index} href={`#${button.name.toLowerCase()}`} className="text-white uppercase font-semibold hover:text-orange-200 transition duration-300 px-4 py-1">
              {button.name}
            </a>
          ))}
        </div>
        <SearchBar/>
      </div>
    </div>
  )
}

export default Navbar;
