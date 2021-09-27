import React from 'react';
import users from 'data/users';
import { Wrapper, StyledList } from './UsersList.styles';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';

const UsersList = () => (
  <Wrapper>
    <StyledList>
      {users.map((user, i) => (
        <UsersListItem key={user.name} user={user} index={i} />
      ))}
    </StyledList>
  </Wrapper>
);

export default UsersList;
