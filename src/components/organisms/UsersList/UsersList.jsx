import React, { useState, useEffect } from 'react';
import usersData from 'data/users';
import { Wrapper, StyledList } from './UsersList.styles';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';

const mockApi = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    mockApi()
      .then((data) => {
        setIsLoading(false);
        setUsers(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <Wrapper>
      <h1>{isLoading ? 'Loading...' : 'Students list:'} </h1>
      <StyledList>
        {users.map((user, i) => (
          <UsersListItem key={user.name} user={user} deleteUser={deleteUser} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UsersList;
