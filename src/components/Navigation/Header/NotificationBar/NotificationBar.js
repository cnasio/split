import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom'

import Button from '../../../FormElements/Button/Button'
import { UserContext } from '../../../../shared/context/UserContext'
import './NotificationBar.css'

// Dropdown i Avatar/Profile name
// Se Arastos Profile.tsx:

/* <div className='profile-dropdown-content'>
  <span>{currentUser}</span>
  <div className="profile-dropdown-content">
    <a>Profile</a>
    <a>Settings</a>
    <hr />
    <a>Logout</a>
  </div>
</div> */

// TO DO: If name längre än typ 20 tecken, ändra till att bara visa första namnet

const NotificationBar = () => {

  const history = useHistory();
  const [currentUser] = useContext(UserContext)

  return (
  <div className="notifications_container">
    {currentUser.email && (<><div className="avatar">
      <img src={currentUser.image} alt='' /> {currentUser.name.split(' ')[0]}
    </div>
    <div className="notifications">
    [Notifications]
  </div></>)}
    {!currentUser.email && (<div className="notifications">
      <Button inverse onClick={() => history.push('auth')}>Sign In</Button>
    </div>)}
  </div>
  );
};

export default NotificationBar;