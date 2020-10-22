import React, { useContext } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom'

import { UserContext } from '../../../../shared/context/UserContext'
import './Hamburger.css'

const Hamburger = () => {

  const history = useHistory();
  const [currentUser] = useContext(UserContext)


  const hamburgerExpandHandler = () => {
    
    if(currentUser.email) {
      const leftBarElement = document.getElementById('left_bar')
      const viewElement = document.getElementById('view')
      const friendsElement = document.getElementById('friends_bar')
      
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