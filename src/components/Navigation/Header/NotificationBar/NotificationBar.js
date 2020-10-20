import React, { useContext } from 'react';
import { Link } from 'react-router-dom'

import { UserContext, UserProvider } from '../../../../shared/context/UserContext'
import './NotificationBar.css'

// Dropdown i Avatar/Profile name
// Se Arastos Profile.tsx:

{/* <div className='profile-dropdown-content'>
  <span>{currentUser}</span>
  <div className="profile-dropdown-content">
    <a>Profile</a>
    <a>Settings</a>
    <hr />
    <a>Logout</a>
  </div>
</div> */}


// TO DO: If name längre än typ 20 tecken, ändra till att bara visa första namnet

const NotificationBar = () => {

  const [currentUser, setCurrentUser] = useContext(UserContext)

  return (
  <div className="notifications_container">
    {currentUser.name && (<><div className="avatar">
      <img src={currentUser.image} alt='' /> {currentUser.name.split(' ')[0]}
    </div>
    <div className="notifications">
    [Notifications]
  </div></>)}
    {!currentUser.name && (<div className="notifications">
      <Link to='/auth'>[Sign In]</Link>
    </div>)}
  </div>
  );
};

export default NotificationBar;