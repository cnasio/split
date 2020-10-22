import React, { useContext }  from 'react';

import { UserContext } from '../../../shared/context/UserContext'
import FriendsBar from './FriendsBar/FriendsBar';
import InfoBar from './InfoBar/InfoBar';
import './RightBar.css'

const RightBar = () => {

  const [currentUser] = useContext(UserContext)

  return (
    <>
      {currentUser.email && (<aside id="right_bar">
        <InfoBar />
        <FriendsBar />
      </aside>)}
    </>
  );
};

export default RightBar;