import React from 'react'

import NavLinks from '../NavLinks/NavLinks'
import logo from '../../../shared/images/split50.png'
import './Header.css'

export const Header = () => {
  
  return (
    <header className="header">
      <img src={logo} alt="" />
      <NavLinks />
    </header>
  )
}
