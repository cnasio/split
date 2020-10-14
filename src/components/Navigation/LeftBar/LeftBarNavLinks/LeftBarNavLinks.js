import React from 'react';
import { useHistory } from 'react-router-dom';

import './LeftBarNavLinks.css'


const LeftBarNavLinks = () => {
  const history = useHistory();
  return (
    <ul id="leftbar_navlinks">
      <li onClick={() => history.push('/home')}>Home</li>
      <li onClick={() => history.push('/inventory')}>Inventory</li>
      <li onClick={() => history.push('/community')}>Community</li>
    </ul>
  );
};

export default LeftBarNavLinks;