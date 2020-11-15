import React from 'react';

import UserItem from '../UserItem/UsersItem';
import Card from '../../UIElements/Card/Card';
import './UsersList.css';

const UsersList = props => {
  if (props.items.length === 0) {
    return (
      <div className="view">
        <Card>
          <h2>No users found.</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className="users-list">
      {props.items.map(user => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          itemCount={user.items.length}
        />
      ))}
    </ul>
  );
};

export default UsersList;
