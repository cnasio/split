import React from 'react';

import './LeftBar.css'
import LeftBarNavLinks from './LeftBarNavLinks/LeftBarNavLinks';
import ProfileCard from './ProfileCard/ProfileCard';

const LeftBar = () => {
  return (
    <aside id="left_bar">
      <ProfileCard />
      <LeftBarNavLinks />

    </aside>
  );
};

export default LeftBar;