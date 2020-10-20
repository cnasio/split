import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className='search'>
          <input type="text" placeholder="Search..." />
          <button><SearchIcon /></button>
    </div>
  );
};

export default SearchBar;