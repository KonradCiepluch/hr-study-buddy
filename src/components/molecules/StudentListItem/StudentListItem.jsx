import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './StudentListItem.styles';
import Grade from 'components/atoms/Grade/Grade.styles';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import UserShape from 'components/types';
import { useRemoveStudentFromGroupMutation } from 'components/store';

const StudentListItem = ({ student: { name, average, attendance = '0%', id }, ...props }) => {
  const [removeStudent] = useRemoveStudentFromGroupMutation();

  const deleteStudent = (e) => {
    e.stopPropagation();
    removeStudent({ id });
  };

  return (
    <Wrapper {...props}>
      <Grade grade={average}>{average}</Grade>
      <div>
        <p>{name}</p>
        <p>attendance {attendance}%</p>
      </div>
      <DeleteButton onClick={deleteStudent} />
    </Wrapper>
  );
};

StudentListItem.propTypes = {
  student: PropTypes.shape(UserShape),
};

export default StudentListItem;
