import React, { useEffect, useState } from 'react';

import UsersList from '../components/Users/UsersList/UsersList';
import ErrorModal from '../components/UIElements/ErrorModal/ErrorModal';
import LoadingSpinner from '../components/UIElements/LoadingSpinner/LoadingSpinner';
import { useHttpClient } from '../shared/hooks/http-hook';

const CommunityView = () => {
  const [loadedUsers, setLoadedUsers] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + '/users'
        );
        setLoadedUsers(responseData.users);
      } catch (err) {}
    };
    fetchUsers();
  }, [sendRequest]);

  return (
    <div id='view'>
      <h1>Community</h1>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedUsers && <UsersList items={loadedUsers} />}
    </div>
  );
};

export default CommunityView;
