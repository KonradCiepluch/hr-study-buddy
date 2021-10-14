import React, { useState } from 'react';
import { SearchBarWrapper, StatusInfo, InputWrapper, MatchingStudents, MatchingStudent } from './SearchBar.styles';
import Input from 'components/atoms/Input/Input.styles';
import useStudents from 'hooks/useStudents';
import { debounce } from 'lodash';
import { useCombobox } from 'downshift';

const SearchBar = () => {
  const [matchingStudents, setMatchingStudents] = useState([]);
  const { findStudents } = useStudents();

  const getMatchingStudents = debounce(async ({ inputValue }) => {
    const { matchingStudents } = await findStudents(inputValue);
    setMatchingStudents(matchingStudents);
  }, 500);

  const { isOpen, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps } = useCombobox({
    items: matchingStudents,
    onInputValueChange: getMatchingStudents,
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
        <Input {...getInputProps()} placeholder="Search" name="Search" id="Search" />
        <MatchingStudents isVisible={isOpen && matchingStudents.length} {...getMenuProps()} aria-label="results">
          {isOpen &&
            matchingStudents.map((item, index) => (
              <MatchingStudent key={item.id} {...getItemProps({ item, index })} isHighlighted={highlightedIndex === index}>
                {item.name}
              </MatchingStudent>
            ))}
        </MatchingStudents>
      </InputWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
