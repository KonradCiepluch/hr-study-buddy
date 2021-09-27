import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './UserListItem.styles';
import Grade from 'components/atoms/Grade/Grade.styles';
import Button from 'components/atoms/Button/Button';

const UsersListItem = ({ index, user: { name, average, attendance = '0%' } }) => {
  const showIndex = (index) => alert(`kliknałes w element o indeksie ${index}`);

  return (
    <Wrapper key={name}>
      <Grade grade={average}>{average}</Grade>
      <div>
        <p>{name}</p>
        <p>attendance {attendance}</p>
      </div>
      <Button onClick={() => showIndex(index)} />
    </Wrapper>
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
