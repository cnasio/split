import React from 'react';
import { Link } from 'react-router-dom';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';

import './ProfileHeader.css'

const ProfileHeader = props => {

  let currentUser
  let userName
  let userImage

  if(props.items) {
    currentUser = props.items.find(u => u.id === props.userId)
    if(currentUser) {
      userName = currentUser.name.split(' ')[0]
      userImage = currentUser.image
    }
  }
  
  return (
    <div className="profile">
      <Link to="/profile"><img id="profile__image" src={currentUser && `${process.env.REACT_APP_ASSET_URL}/${userImage}`} alt="" /></Link>
      <p>{currentUser && userName} <ArrowDropDownRoundedIcon /></p>
    </div>
  );
};

export default ProfileHeader;