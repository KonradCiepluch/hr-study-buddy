import React from 'react';
import PropTypes from 'prop-types';

const UsersListItem = ({ user: { name, average, attendance = '0%' } }) => {
  return (
    <li key={name}>
      <div>{average}</div>
      <div>
        <p>{name}</p>
        <p>{attendance}</p>
      </div>
      <button>X</button>
    </li>
  );
};

UsersListItem.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    average: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
