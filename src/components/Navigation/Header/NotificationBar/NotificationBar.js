import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom'

import ProfileHeader from './ProfileHeader/ProfileHeader';
import Button from '../../../FormElements/Button/Button'
import Notifications from './Notifications/Notifications';
import { UserContext } from '../../../../shared/context/UserContext'
import { useHttpClient } from '../../../../shared/hooks/http-hook.js'
import './NotificationBar.css'

const NotificationBar = props => {

  const [loadedUsers, setLoadedUsers] = useState()
  const { sendRequest } = useHttpClient()

  const history = useHistory();
  const auth = useContext(UserContext);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + '/users'
        );
        setLoadedUsers(responseData.users)

      } catch (err) {}
    };
    fetchUsers();
  }, [sendRequest]);

  return (
  <div className="notifications__container">
    {auth.isLoggedIn && (
      <>
        <ProfileHeader items={loadedUsers} userId={props.userId} />
        <Notifications />
      </>
    )}
  {!auth.isLoggedIn && (<div className="notifications">
      <Button inverse onClick={() => history.push('/auth')}>Sign In</Button>
    </div>)}
  </div>
  );
};

export default NotificationBar;