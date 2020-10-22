import React, { useContext } from 'react';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import CategoryRoundedIcon from '@material-ui/icons/CategoryRounded';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

import ProfileCard from './ProfileCard/ProfileCard';
import LeftBarNavLink from './LeftBarNavLinks/LeftBarNavLinks';
import { UserContext } from '../../../shared/context/UserContext'
import './LeftBar.css'

const LeftBar = () => {

  const [currentUser] = useContext(UserContext)

  return (
    <>
    {currentUser.email &&
      (<aside id="left_bar">
      <ProfileCard />
      <nav className="leftbar_navlinks">
        <LeftBarNavLink link="home" title="Home" Icon={HomeRoundedIcon} />
        <LeftBarNavLink link="inventory" title="Inventory" Icon={CategoryRoundedIcon} />
        <LeftBarNavLink link="community" title="Community" Icon={PeopleAltIcon} />
      </nav>
    </aside>)}
    </>
  );
};

export default LeftBar;