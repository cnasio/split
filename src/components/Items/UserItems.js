import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ItemList from './ItemList/ItemList';
import ErrorModal from '../UIElements/ErrorModal/ErrorModal';
import LoadingSpinner from '../UIElements/LoadingSpinner/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';

const UserItems = () => {
  const [loadedItems, setLoadedItems] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const userId = useParams().userId;

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const responseData = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/items/user/${userId}`
        );
        setLoadedItems(responseData.items);
      } catch (err) {}
    };
    fetchItems();
  }, [sendRequest, userId]);

  const itemDeletedHandler = deletedItemId => {
    setLoadedItems(prevItems => prevItems.filter(i => i.id !== deletedItemId));
  };


  console.log(loadedItems)

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedItems && (
        <ItemList items={loadedItems} onDeleteItem={itemDeletedHandler} />
      )}
    </>
  );
};

export default UserItems;