import React, { useContext } from 'react';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';

import { UserContext } from '../../../../../shared/context/UserContext'
import './Avatar.css'

const Avatar = () => {

  const [currentUser] = useContext(UserContext)

  return (
    <div className="avatar">
      <img src={currentUser.image} alt='' /> 
      <p>{currentUser.name.split(' ')[0]} <ArrowDropDownRoundedIcon /></p>
    </div>
  );
};

export default Avatar;