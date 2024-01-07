import React, { useState } from 'react';
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

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
          {/* Icon or text for the hamburger menu */}
          <span><RxHamburgerMenu color='white' size={42} /></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-gray-100 flex flex-col items-center justify-center z-10">
          {/* Close Button */}
          <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-5 right-5 text-2xl">
            {/* Cross icon, replace with an actual icon or SVG as needed */}
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
      <div className="hidden lg:flex w-1/2 h-14 bg-gray-600 opacity-50 rounded-full flex justify-around items-center shadow-lg">
        {navbar_buttons.map((button, index) => (
          <a key={index} href={`#${button.name.toLowerCase()}`} className="text-orange-200 uppercase font-semibold hover:text-white transition duration-300 px-4 py-1">
            {button.name}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Navbar;
