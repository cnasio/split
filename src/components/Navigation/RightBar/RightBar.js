import React, { useContext } from 'react';

import { UserContext } from '../../../shared/context/UserContext'
import FriendsBar from './FriendsBar/FriendsBar';
import InfoBar from './InfoBar/InfoBar';
import './RightBar.css'

const RightBar = () => {
  const auth = useContext(UserContext);

  return (
    <>
      {auth.isLoggedIn && 
        (
          <aside id="right__bar">
            <InfoBar />
            <FriendsBar />
          </aside>
        )
      }
    </>
  );
};

export default RightBar;