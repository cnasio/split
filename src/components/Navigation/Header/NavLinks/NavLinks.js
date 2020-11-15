import React from 'react'
import { NavLink } from 'react-router-dom';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import CategoryRoundedIcon from '@material-ui/icons/CategoryRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';

import { useAuth } from '../../../../shared/hooks/auth-hook'
import './NavLinks.css'

const NavLinks = () => {

  const { userId } = useAuth();
  const inventoryLink = `/${userId}/items`


  return (
    <nav className="navlinks">
      <NavLink exact activeClassName="navlink--active" className="navlink" to='/home'><HomeRoundedIcon /></NavLink>
      <NavLink activeClassName="navlink--active"  className="navlink"  to={inventoryLink}><CategoryRoundedIcon /></NavLink>
      <NavLink activeClassName="navlink--active"  className="navlink"  to='/community'><GroupRoundedIcon /></NavLink>
    </nav>
  )
}

export default NavLinks
