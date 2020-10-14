import React from 'react';

import './FriendsBar.css'

const FriendsBar = () => {
  return (
    <div className="friends_bar">
    <div id="friendslist" className="friendslist">Friends List</div>
    <div className="friends_button">
      <button>Friends</button>
    </div>
  </div>
  );
};

export default FriendsBar;