import React, { useContext } from 'react';
import { Link } from 'react-router-dom'

import { UserContext } from '../../../../shared/context/UserContext'
import './ProfileCard.css'

const ProfileCard = () => {
  
  const [currentUser] = useContext(UserContext)
  let characterAmount;

  if(currentUser.email) {
    characterAmount = currentUser.name.split(' ').join('').length
  }
  return (
      <>
        {currentUser.email && (
          <div className="profile__card">
          <Link id="profile__card_image" to="/profile"><img src={currentUser.image} alt="" /></Link>
          <Link id="profile__card_name" to="/profile">{characterAmount < 30 ? currentUser.name : currentUser.name.split(' ')[0]}</Link>
          <Link id="avatarpanel__link_left" to="/profile">Profile</Link>
          <Link id="avatarpanel__link_right" to="#">Log out</Link>
      </div>
        )}
    </> 
  );
};

export default ProfileCard;