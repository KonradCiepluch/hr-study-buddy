import React, { useState, useEffect, createContext } from 'react';
import usersData from 'data/users';

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

export const UsersContext = createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
});

const UsersProvider = ({ children }) => {
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

  const handleAddUser = (newUser) => setUsers([newUser, ...users]);

  return <UsersContext.Provider value={{ users, handleAddUser, deleteUser, isLoading }}>{children}</UsersContext.Provider>;
};

export default UsersProvider;
