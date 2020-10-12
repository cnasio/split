import React from 'react'
import {useHistory} from "react-router-dom";

export const Navbar = () => {
  const history = useHistory();
  return (
    <div className="navbar">
      <span onClick={() => history.push('/home')}>Home</span><br/>
      <span onClick={() => history.push('/inventory')}>Inventory</span>
    </div>
  )
}
