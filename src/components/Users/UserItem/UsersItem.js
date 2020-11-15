import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../UIElements/Avatar/Avatar';
import Card from '../../UIElements/Card/Card';
import './UserItem.css';

const UserItem = props => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/items`}>
          <div className="user-item__image">
            <Avatar
              image={`${process.env.REACT_APP_ASSET_URL}/${props.image}`}
              alt={props.name}
            />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.itemCount} {props.itemCount === 1 ? 'Item' : 'Items'}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;