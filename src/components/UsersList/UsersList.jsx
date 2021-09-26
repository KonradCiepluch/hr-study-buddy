import React from 'react';
import users from 'data/users';
import UsersListItem from 'components/UsersListItem/UsersListItem';

const UsersList = () => (
  <div>
    <ul>
      {users.map((user) => (
        <UsersListItem key={user.name} user={user} />
      ))}
    </ul>
  </div>
);

export default UsersList;
