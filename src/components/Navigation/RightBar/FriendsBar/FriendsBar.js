import React from 'react';

import Button from '../../../FormElements/Button/Button'
import InsertCommentIcon from '@material-ui/icons/InsertComment';


import './FriendsBar.css'

const FriendsBar = () => {

  const friendsButtonHandler = () => {
    const leftBarElement = document.getElementById('left_bar')
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
      <div id="friends_bar">
        <div id="friendslist" className="friendslist">Friends List</div>
          <div className="friends_button">
            <Button onClick={friendsButtonHandler} ><InsertCommentIcon />FRIENDS</Button>
          </div>
      </div>
  );
};

export default FriendsBar;