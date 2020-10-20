import React from 'react'
import { useHistory } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

import './NavLinks.css'

const NavLinks = () => {
  const history = useHistory();
  return (
    <ul id="navlinks">
      <li  id="navlinks_active" onClick={() => history.push('/home')}><HomeIcon /></li>
      <li onClick={() => history.push('/inventory')}><LocalMallIcon /></li>
      <li onClick={() => history.push('/community')}><PeopleAltIcon /></li>
    </ul>
  )
}

export default NavLinks
