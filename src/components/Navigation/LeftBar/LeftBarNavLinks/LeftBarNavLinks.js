import React from 'react';
import { useHistory } from 'react-router-dom';

const LeftBarNavLink = ({link, title, Icon}) => {
  const history = useHistory();
  
  return (  
      <li onClick={() => history.push(`/${link}`)}><Icon />{title}</li>
  );
};

export default LeftBarNavLink;