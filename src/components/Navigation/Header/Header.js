import React from 'react';
import { Link } from 'react-router-dom';


import NavLinks from './NavLinks/NavLinks'
import Hamburger from './Hamburger/Hamburger';
import SearchBar from './SearchBar/SearchBar';
import NotificationBar from './NotificationBar/NotificationBar';
import logo from '../../../shared/images/split50.png'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <Link id="logo" to="/home"><img src={logo} alt="" /></Link>
      <SearchBar />
      <NavLinks />
      <Hamburger />
      <NotificationBar />
    </header>
  )
}

export default Header;