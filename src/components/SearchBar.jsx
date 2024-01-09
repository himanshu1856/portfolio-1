import React, { useState } from 'react';
import SearchIcon from '../assets/search.png'

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

export default SearchBar;
