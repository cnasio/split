import React from 'react'
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

import './NavLinks.css'

const NavLinks = () => {
  return (
    <nav className="navlinks">
      <NavLink exact activeClassName="navlink_active" className="navlink" to="/home"><HomeIcon /></NavLink>
      <NavLink activeClassName="navlink_active"  className="navlink"  to="/inventory"><LocalMallIcon /></NavLink>
      <NavLink activeClassName="navlink_active"  className="navlink"  to="/community"><PeopleAltIcon /></NavLink>
    </nav>
  )
}

export default NavLinks
