import React from 'react';

import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className='search'>
          <input type="text" placeholder="Search..." />
          <button>&#x1F50D;</button>
    </div>
  );
};

export default SearchBar;