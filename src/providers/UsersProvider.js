import React, { useState, useEffect, createContext } from 'react';
// import usersData from 'data/users';
import axios from 'axios';

/* const mockApi = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  }); */

export const UsersContext = createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
  isLoading: false,
});

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('/students')
      .then(({ data }) => {
        setIsLoading(false);
        setUsers(data.students);
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
