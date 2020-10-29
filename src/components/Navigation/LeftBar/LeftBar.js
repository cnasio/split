import React, { useContext } from 'react';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import CategoryRoundedIcon from '@material-ui/icons/CategoryRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';

import RoutingPath from '../../../routes/RoutingPath'
import ProfileCard from './ProfileCard/ProfileCard';
import LeftBarNavLink from './LeftBarNavLinks/LeftBarNavLinks';
import { UserContext } from '../../../shared/context/UserContext'
import './LeftBar.css'

const LeftBar = () => {

  const [currentUser] = useContext(UserContext)

  return (
    <>
    {currentUser.email &&
      (<aside id="left__bar">
      <ProfileCard />
      <nav className="leftbar__navlinks">
        <LeftBarNavLink link={RoutingPath.homeView} title="Home" Icon={HomeRoundedIcon} />
        <LeftBarNavLink link={RoutingPath.inventoryView} title="Inventory" Icon={CategoryRoundedIcon} />
        <LeftBarNavLink link={RoutingPath.communityView} title="Community" Icon={GroupRoundedIcon} />
      </nav>
    </aside>)}
    </>
  );
};

export default LeftBar;