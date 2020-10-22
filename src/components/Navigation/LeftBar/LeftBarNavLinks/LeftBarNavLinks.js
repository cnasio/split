import React from 'react';
import { NavLink } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const LeftBarNavLink = ({link, title, Icon}) => {
  
  const matches = useMediaQuery('(min-width:1098px)')
  
  const leftBarHiderHandler = () => {
    const leftBarElement = document.getElementById('left_bar')
    const viewElement = document.getElementById('view')
    const friendsElement = document.getElementById('friends_bar')

    if(matches) {
      leftBarElement.style.display = 'grid'
      viewElement.style.display = 'none'
    } else {
      leftBarElement.style.display = 'none'
      viewElement.style.display = 'flex'
      friendsElement.style.display = 'grid'
    }
  }

  return (  
  <NavLink onClick={() => leftBarHiderHandler()} className="leftbar__navlink" activeClassName="leftbar__navlink--active" to={link}><Icon />{title}</NavLink>
  );
};

export default LeftBarNavLink;