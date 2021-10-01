import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './UserListItem.styles';
import Grade from 'components/atoms/Grade/Grade.styles';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';

const UsersListItem = ({ deleteUser, user: { name, average, attendance = '0%' } }) => (
  <Wrapper key={name}>
    <Grade grade={average}>{average}</Grade>
    <div>
      <p>{name}</p>
      <p>attendance {attendance}</p>
    </div>
    <DeleteButton onClick={() => deleteUser(name)} />
  </Wrapper>
);

UsersListItem.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    average: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
  deleteUser: PropTypes.func.isRequired,
};

export default UsersListItem;
