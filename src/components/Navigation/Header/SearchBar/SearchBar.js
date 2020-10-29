import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

import './SearchBar.css'

const SearchBar = props => {
  return (
    <div className='search'>
          <input type={props.type} onChange={props.onChange} placeholder={props.placeholder} />
          <button onClick={props.onButtonClick}><SearchIcon /></button>
    </div>
  );
};

export default SearchBar;