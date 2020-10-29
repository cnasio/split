import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';


import NavLinks from './NavLinks/NavLinks'
import Hamburger from './Hamburger/Hamburger';
import SearchBar from './SearchBar/SearchBar';
import NotificationBar from './NotificationBar/NotificationBar';
import logo from '../../../shared/images/split50.png'
import './Header.css'


// BUGG: logo-länken visar home över leftbar när man öppnat leftbar
// från hamburger och inte redan är i homeview

const Header = () => {

  const [search, setSearch] = useState()

  const searchHandler = e => {
    e.preventDefault();
    console.log(search)
  }

  return (
    <header className="header">
      <Link id="logo" to="/home"><img src={logo} alt="" /></Link>
      <form onSubmit={searchHandler}>
      <SearchBar type="text" onButtonClick={searchHandler} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." />
      </form>
      <NavLinks />
      <Hamburger />
      <NotificationBar />
    </header>
  )
}

export default Header;