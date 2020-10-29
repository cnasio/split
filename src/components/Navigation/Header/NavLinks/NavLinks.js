import React from 'react'
import { NavLink } from 'react-router-dom';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import CategoryRoundedIcon from '@material-ui/icons/CategoryRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';

import RoutingPath from '../../../../routes/RoutingPath'
import './NavLinks.css'

const NavLinks = () => {
  return (
    <nav className="navlinks">
      <NavLink exact activeClassName="navlink--active" className="navlink" to={RoutingPath.homeView}><HomeRoundedIcon /></NavLink>
      <NavLink activeClassName="navlink--active"  className="navlink"  to={RoutingPath.inventoryView}><CategoryRoundedIcon /></NavLink>
      <NavLink activeClassName="navlink--active"  className="navlink"  to={RoutingPath.communityView}><GroupRoundedIcon /></NavLink>
    </nav>
  )
}

export default NavLinks
