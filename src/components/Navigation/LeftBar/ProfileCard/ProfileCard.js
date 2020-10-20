import React, { useContext } from 'react';
import { Link } from 'react-router-dom'

import { UserContext } from '../../../../shared/context/UserContext'
import './ProfileCard.css'

const ProfileCard = () => {
  
  const [currentUser, setCurrentUser] = useContext(UserContext)
  let characterAmount;

  if(currentUser.name) {
    characterAmount = currentUser.name.split(' ').join('').length
    console.log(characterAmount)
  }
  return (
      <>
        {currentUser.name && (
          <div className="profile_card">
          <div id="profile_card_image">
            <img src={currentUser.image} alt="" />
          </div>
           <Link id="profile_card_name" to="inventory.html">{characterAmount < 30 ? currentUser.name : currentUser.name.split(' ')[0]}</Link>
          <Link id="avatarpanel_link_left" to="inventory.html">Profile</Link>
          <Link id="avatarpanel_link_right" to="inventory.html">Log out</Link>
      </div>
        )}
    </> 
  );
};

export default ProfileCard;