import React, { useState } from 'react';
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

import SearchIcon from '../../assets/search.png'


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
    <div className="w-full lg:flex justify-center items-center py-2 lg:py-6">
      {/* Hamburger Icon */}
      <div className="lg:hidden">
        <button onClick={() => setIsMobileMenuOpen(true)}>
          {/*hamburger menu */}
          <span><RxHamburgerMenu color='white' size={36} /></span>
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
      <div className="hidden lg:flex w-full h-14 bg-gray-600 opacity-70 rounded-full justify-around items-center shadow-lg">
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

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle the search logic here
    console.log('Searching for:', searchQuery);
  }

  return (
    <form onSubmit={handleSearch} className="flex justify-center" dir='ltr'>
      <input 
        type="text" 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
        className=" rounded-s-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 px-4 py-2 w-3/4 shadow-sm"
      />
      <button 
        type="submit" 
        className="rounded-e-lg text-white bg-teal-600 hover:bg-blue-600 focus:outline-none px-4 py-2 shadow-sm w-1/5 text-sm"
      >
        <img src={SearchIcon} className='h-6'/>
      </button>
    </form>
  );
}

export default Navbar;
