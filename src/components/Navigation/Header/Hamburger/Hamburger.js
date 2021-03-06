import React, { useContext } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom'

import { UserContext } from '../../../../shared/context/UserContext'
import './Hamburger.css'

const Hamburger = () => {

  const history = useHistory();
  const auth = useContext(UserContext);



  const hamburgerExpandHandler = () => {
    
    if(auth.isLoggedIn) {
      const leftBarElement = document.getElementById('left__bar')
      const viewElement = document.getElementById('view')
      const friendsElement = document.getElementById('friends__bar')
      
      if(leftBarElement.style.display === 'none' || !leftBarElement.style.display) {
        leftBarElement.style.display = 'grid'
        viewElement.style.display = 'none'
      } else {
        leftBarElement.style.display = 'none'
        viewElement.style.display = 'flex'
        friendsElement.style.display = 'grid'
      } 
    } else {
      history.push('/auth')
    }

  }

  return (
      <div onClick={() => hamburgerExpandHandler()} className="hamburger">
         <MenuIcon />
      </div>
  );
};

export default Hamburger;