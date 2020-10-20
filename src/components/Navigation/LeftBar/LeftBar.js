import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';


import './LeftBar.css'
import LeftBarNavLink from './LeftBarNavLinks/LeftBarNavLinks';
import ProfileCard from './ProfileCard/ProfileCard';

const LeftBar = () => {
  return (
    <aside id="left_bar">
      <ProfileCard />
      <ul id="leftbar_navlink">
        <LeftBarNavLink link="home" title="Home" Icon={HomeIcon} />
        <LeftBarNavLink link="inventory" title="Inventory" Icon={LocalMallIcon} />
        <LeftBarNavLink link="community" title="Community" Icon={PeopleAltIcon} />
      </ul>
    </aside>
  );
};

export default LeftBar;