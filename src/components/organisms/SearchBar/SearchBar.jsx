import React, { useState } from 'react';
import { SearchBarWrapper, StatusInfo, InputWrapper, MatchingStudents, MatchingStudent } from './SearchBar.styles';
import Input from 'components/atoms/Input/Input.styles';
import Modal from '../Modal/Modal';
import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';
import { debounce } from 'lodash';
import { useCombobox } from 'downshift';
import { useFindStudentsMutation } from 'components/store';
import useModal from '../Modal/useModal';

const SearchBar = () => {
  const [matchingStudents, setMatchingStudents] = useState([]);
  const [currentStudentId, setCurrentStudentId] = useState('');
  const [findStudents] = useFindStudentsMutation();

  const handleOpenStudentDetails = (id) => {
    setCurrentStudentId(id);
    handleOpenModal();
  };

  const enterStudentDetails = (e) => {
    if (e.key === 'Enter' && e.target.value) {
      const matchingStudent = matchingStudents.find((student) => student.name === e.target.value);
      if (matchingStudent) {
        setCurrentStudentId(matchingStudent.id);
        handleOpenModal();
      }
    }
  };

  const { isOpen: isOpenModal, handleCloseModal, handleOpenModal } = useModal();

  const getMatchingStudents = debounce(async ({ inputValue }) => {
    const { data } = await findStudents({ searchPhrase: inputValue });
    setMatchingStudents(data.matchingStudents);
  }, 500);

  const { isOpen, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps } = useCombobox({
    items: matchingStudents,
    onInputValueChange: getMatchingStudents,
    itemToString: (item) => (item ? item.name : ''),
  });

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <InputWrapper {...getComboboxProps()}>
        <Input {...getInputProps({ onKeyUp: enterStudentDetails })} placeholder="Search" name="Search" id="Search" />
        <MatchingStudents isVisible={isOpen && matchingStudents.length} {...getMenuProps()} aria-label="results">
          {isOpen &&
            matchingStudents.map((item, index) => (
              <MatchingStudent
                key={item.id}
                {...getItemProps({
                  item,
                  index,
                  onClick: () => handleOpenStudentDetails(item.id),
                })}
                isHighlighted={highlightedIndex === index}
              >
                {item.name}
              </MatchingStudent>
            ))}
        </MatchingStudents>
      </InputWrapper>
      <Modal handleClose={handleCloseModal} isOpen={isOpenModal}>
        <StudentDetails studentId={currentStudentId} />
      </Modal>
    </SearchBarWrapper>
  );
};

export default SearchBar;
