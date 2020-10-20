import React from 'react';

import Button from '../../../FormElements/Button/Button'
import InsertCommentIcon from '@material-ui/icons/InsertComment';

import './FriendsBar.css'

const FriendsBar = () => {
  return (
    <div className="friends_bar">
    <div id="friendslist" className="friendslist">Friends List</div>
    <div className="friends_button">
      <Button ><InsertCommentIcon />FRIENDS</Button>
    </div>
  </div>
  );
};

export default FriendsBar;