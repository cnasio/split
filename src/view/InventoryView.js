import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import UserItems from '../components/Items/UserItems'
import ErrorModal from '../components/UIElements/ErrorModal/ErrorModal';
import LoadingSpinner from '../components/UIElements/LoadingSpinner/LoadingSpinner';
import { useHttpClient } from '../shared/hooks/http-hook'

const InventoryView = () => {
  // const [loadedItems, setLoadedItems] = useState();
  // const [loadedUsers, setLoadedUsers] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const userId = useParams().userId;

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     try {
  //       const responseData = await sendRequest(
  //         `${process.env.REACT_APP_BACKEND_URL}/items/user/${userId}`
  //       );
  //       setLoadedItems(responseData.items);
  //     } catch (err) {}
  //   };
  //   fetchItems();
  // }, [sendRequest, userId]);

  // const itemDeletedHandler = deletedItemId => {
  //   setLoadedItems(prevItems => prevItems.filter(i => i.id !== deletedItemId));
  // };
  

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const responseData = await sendRequest(
  //         process.env.REACT_APP_BACKEND_URL + '/users'
  //       );
  //       setLoadedUsers(responseData.users);
  //     } catch (err) {}
  //   };
  //   fetchUsers();
  // }, [sendRequest]);

  // let currentUser
  
  // if(loadedUsers) {
  //   currentUser = loadedUsers.filter(u => u.id === userId)
  // }



  return (
    <div id="view">
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      <h1>{userId}'s Inventory</h1>
      {/* <h1>{currentUser && currentUser[0].name}'s Inventory</h1> */}

      <UserItems />
    </div>
  )
}

export default InventoryView;