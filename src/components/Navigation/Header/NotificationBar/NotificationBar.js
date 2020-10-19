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



const NotificationBar = () => {

  const [currentUser, setCurrentUser] = useContext(UserContext)

  return (
  <div className="notifications_container">
    {currentUser && (<><div className="avatar">
      [Avatar] {currentUser}
    </div>
    <div className="notifications">
    [Notifications]
  </div></>)}
    {!currentUser && (<div className="notifications">
      <Link to='/auth'>[Sign In]</Link>
    </div>)}
  </div>
  );
};

export default NotificationBar;