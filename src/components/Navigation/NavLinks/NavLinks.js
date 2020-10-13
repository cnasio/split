import React from 'react'
import { useHistory } from 'react-router-dom';

import './NavLinks.css'

const NavLinks = () => {
  const history = useHistory();
  return (
    <ul id="navlinks">
      <li id="navlinks_active" onClick={() => history.push('/home')}>Home</li><br/>
      <li onClick={() => history.push('/inventory')}>Inventory</li>
      <li onClick={() => history.push('/community')}>Community</li>
    </ul>
  )
}

export default NavLinks
