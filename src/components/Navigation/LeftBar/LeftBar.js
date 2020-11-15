import React, { useContext } from 'react';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import CategoryRoundedIcon from '@material-ui/icons/CategoryRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';

import { useAuth } from '../../../shared/hooks/auth-hook'
import { UserContext } from '../../../shared/context/UserContext'
import ProfileCard from './ProfileCard/ProfileCard';
import LeftBarNavLink from './LeftBarNavLinks/LeftBarNavLinks';
import './LeftBar.css'

const LeftBar = props => {
  const auth = useContext(UserContext);
  const { userId } = useAuth();
  const inventoryLink = `/${userId}/items`
 
  return (
    <>
    {auth.isLoggedIn && (<aside id="left__bar">
      <ProfileCard userId={props.userId} />
      <nav className="leftbar__navlinks">
        <LeftBarNavLink link="/home" title="Home" Icon={HomeRoundedIcon} />
        <LeftBarNavLink link={inventoryLink} title="Inventory" Icon={CategoryRoundedIcon} />
        <LeftBarNavLink link="/community" title="Community" Icon={GroupRoundedIcon} />
      </nav>
    </aside>)}
    </>
  );
};

export default LeftBar;