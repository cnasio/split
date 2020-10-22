import React from 'react'
import { NavLink } from 'react-router-dom';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import CategoryRoundedIcon from '@material-ui/icons/CategoryRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';

import './NavLinks.css'

const NavLinks = () => {
  return (
    <nav className="navlinks">
      <NavLink exact activeClassName="navlink--active" className="navlink" to="/home"><HomeRoundedIcon /></NavLink>
      <NavLink activeClassName="navlink--active"  className="navlink"  to="/inventory"><CategoryRoundedIcon /></NavLink>
      <NavLink activeClassName="navlink--active"  className="navlink"  to="/community"><GroupRoundedIcon /></NavLink>
    </nav>
  )
}

export default NavLinks
