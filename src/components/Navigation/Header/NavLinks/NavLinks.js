import React from 'react'
import { NavLink } from 'react-router-dom';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import CategoryRoundedIcon from '@material-ui/icons/CategoryRounded';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

import './NavLinks.css'

const NavLinks = () => {
  return (
    <nav className="navlinks">
      <NavLink exact activeClassName="navlink_active" className="navlink" to="/home"><HomeRoundedIcon /></NavLink>
      <NavLink activeClassName="navlink_active"  className="navlink"  to="/inventory"><CategoryRoundedIcon /></NavLink>
      <NavLink activeClassName="navlink_active"  className="navlink"  to="/community"><PeopleAltIcon /></NavLink>
    </nav>
  )
}

export default NavLinks
