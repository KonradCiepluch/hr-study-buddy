import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Wrapper from './StudentListItem.styles';
import Grade from 'components/atoms/Grade/Grade.styles';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { UsersContext } from 'providers/UsersProvider';
import UserShape from 'components/types';

const StudentListItem = ({ student: { name, average, attendance = '0%' } }) => {
  const { deleteUser } = useContext(UsersContext);

  return (
    <Wrapper key={name}>
      <Grade grade={average}>{average}</Grade>
      <div>
        <p>{name}</p>
        <p>attendance {attendance}</p>
      </div>
      <DeleteButton onClick={() => deleteUser(name)} />
    </Wrapper>
  );
};

StudentListItem.propTypes = {
  student: PropTypes.shape(UserShape),
};

export default StudentListItem;
