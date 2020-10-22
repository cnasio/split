import React from 'react';

import InfoPanel from './InfoPanel/InfoPanel';
import './InfoBar.css'

const InfoBar = () => {
  return (
    <div id="info__bar">
      <InfoPanel />
      <InfoPanel />
    </div>
  );
};

export default InfoBar;