import PropTypes from 'prop-types';
import { StyledList } from './UsersList.styles';
import { Title } from 'components/atoms/Title/Title.styles';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import UserShape from 'components/types';

const UsersList = ({ users, isLoading, deleteUser }) => {
  return (
    <>
      <Title>{isLoading ? 'Loading...' : 'Students list:'} </Title>
      <StyledList>
        {users.map((user) => (
          <UsersListItem key={user.name} user={user} deleteUser={deleteUser} />
        ))}
      </StyledList>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  isLoading: PropTypes.bool.isRequired,
  deleteUser: PropTypes.func.isRequired,
};

export default UsersList;
