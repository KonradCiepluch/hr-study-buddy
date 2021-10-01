import React, { useContext } from 'react';
import { StyledList } from './UsersList.styles';
import { Title } from 'components/atoms/Title/Title.styles';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { UsersContext } from 'providers/UsersProvider';

const UsersList = () => {
  const { users, isLoading } = useContext(UsersContext);

  return (
    <>
      <Title>{isLoading ? 'Loading...' : 'Students list:'} </Title>
      <StyledList>
        {users.map((user) => (
          <UsersListItem key={user.name} user={user} />
        ))}
      </StyledList>
    </>
  );
};

export default UsersList;
