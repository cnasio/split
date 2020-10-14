import React from 'react';
import { Link } from 'react-router-dom'

import './ProfileCard.css'

const ProfileCard = () => {
  return (

      <div className="profile_card">
          <div id="profile_card_image">
            [Image]
          </div>
          <Link id="profile_card_name" to="inventory.html">[Name Surname]</Link>
          <Link id="avatarpanel_link_left" to="inventory.html">Profile</Link>
          <Link id="avatarpanel_link_right" to="inventory.html">Log out</Link>
      </div>
  );
};

export default ProfileCard;