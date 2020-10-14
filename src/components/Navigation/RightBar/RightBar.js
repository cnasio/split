import React from 'react';

import FriendsBar from './FriendsBar/FriendsBar';
import InfoBar from './InfoBar/InfoBar';
import './RightBar.css'

const RightBar = () => {
  return (
    <aside id="right_bar">
      <InfoBar />
      <FriendsBar />
    </aside>
  );
};

export default RightBar;