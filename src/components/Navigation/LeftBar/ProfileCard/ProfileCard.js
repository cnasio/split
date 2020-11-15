import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import { useAuth } from '../../../../shared/hooks/auth-hook'
import { UserContext } from '../../../../shared/context/UserContext'
import { useHttpClient } from '../../../../shared/hooks/http-hook'
import './ProfileCard.css'

const ProfileCard = props => {
  const auth = useContext(UserContext);

  

  const [loadedUsers, setLoadedUsers] = useState();
  const { sendRequest } = useHttpClient();

  const { userId } = useAuth();
  const inventoryLink = `/${userId}/items`


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + '/users'
        );
        setLoadedUsers(responseData.users);
      } catch (err) {}
    };
    fetchUsers();
  }, [sendRequest]);

  let currentUser
  let characterAmount;
  let userName
  let userImage
  
  if(loadedUsers) {
    currentUser = loadedUsers.filter(u => u.id === props.userId)
    characterAmount = currentUser[0].name.split(' ').join('').length
    characterAmount < 30 
      ? userName = currentUser[0].name 
      : userName = currentUser[0].name.split(' ')[0]
    userImage = currentUser[0].image
  }


  return (
      <>
        {auth.isLoggedIn && (
          <div className="profile__card">
          <Link id="profile__card_image" to={inventoryLink}><img src={`${process.env.REACT_APP_ASSET_URL}/${userImage}`} alt="" /></Link>
          <Link id="profile__card_name" to={inventoryLink}>{currentUser && userName}</Link>
          <Link id="avatarpanel__link_left" to="/profile">Profile</Link>
          <Link id="avatarpanel__link_right" to="#" onClick={auth.logout}>Log out</Link>
      </div>
        )}
    </> 
  );
};

export default ProfileCard;