import React from 'react';
import PropTypes from 'prop-types';
import UserShape from 'components/types';
import UsersList from 'components/organisms/UsersList/UsersList';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper.styles';

const Dashboard = ({ users, isLoading, deleteUser }) => {
  return (
    <ViewWrapper>
      <UsersList users={users} isLoading={isLoading} deleteUser={deleteUser} />
    </ViewWrapper>
  );
};

Dashboard.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  isLoading: PropTypes.bool.isRequired,
  deleteUser: PropTypes.func.isRequired,
};

export default Dashboard;
