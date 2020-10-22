import React from 'react';

import Button from '../../../FormElements/Button/Button'
import ForumRoundedIcon from '@material-ui/icons/ForumRounded';

import './FriendsBar.css'

const FriendsBar = () => {

  const friendsButtonHandler = () => {
    const leftBarElement = document.getElementById('left__bar')
    const viewElement = document.getElementById('view')
    const friendsElement = document.getElementById('friendslist')
   
    console.log(leftBarElement.style.display)
   
    if(friendsElement.style.display === 'none' || !friendsElement.style.display) {
      friendsElement.style.display = 'flex'
      viewElement.style.display = 'none'
    } else {
      friendsElement.style.display = 'none'
      if(leftBarElement.style.display === 'none' || !leftBarElement.style.display) {
        viewElement.style.display = 'flex'
      }
    }
  }

  
  
  return (
      <div id="friends__bar">
        <div id="friendslist" className="friendslist">Friends List</div>
          <div className="friends__button">
            <Button onClick={friendsButtonHandler} ><ForumRoundedIcon />FRIENDS</Button>
          </div>
      </div>
  );
};

export default FriendsBar;