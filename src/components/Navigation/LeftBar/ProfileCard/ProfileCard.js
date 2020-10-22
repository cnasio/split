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
          <div className="profile_card">
          <Link id="profile_card_image" to="/inventory"><img src={currentUser.image} alt="" /></Link>
          <Link id="profile_card_name" to="/inventory">{characterAmount < 30 ? currentUser.name : currentUser.name.split(' ')[0]}</Link>
          <Link id="avatarpanel_link_left" to="#">Profile</Link>
          <Link id="avatarpanel_link_right" to="#">Log out</Link>
      </div>
        )}
    </> 
  );
};

export default ProfileCard;