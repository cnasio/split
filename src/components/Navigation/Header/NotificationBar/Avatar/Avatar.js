import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';

import { UserContext } from '../../../../../shared/context/UserContext'
import './Avatar.css'

const Avatar = () => {

  const [currentUser] = useContext(UserContext)

  return (
    <div className="avatar">
      <Link to="/profile"><img id="avatar__image" src={currentUser.image} alt="" /></Link>
      <p>{currentUser.name.split(' ')[0]} <ArrowDropDownRoundedIcon /></p>
    </div>
  );
};

export default Avatar;