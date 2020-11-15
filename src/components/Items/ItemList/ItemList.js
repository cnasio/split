import React from 'react';

import Card from '../../UIElements/Card/Card';
import Button from '../../FormElements/Button/Button';
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = props => {
  console.log(props.items)
  if (props.items.length === 0) {
    return (
      <div className="item-list center">
        <Card>
          <h2>No items found. Maybe create one?</h2>
          <Button to="/items/new">New Item</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="item-list">
      {props.items.map(item => (
        <Item
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
          // address={item.address}
          currentUser={item.currentUser}
          // coordinates={item.location}
          onDelete={props.onDeleteItem}
        />
      ))}
    </ul>
  );
};

export default ItemList;
