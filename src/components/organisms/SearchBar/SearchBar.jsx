import React, { useState, useEffect } from 'react';
import { SearchBarWrapper, StatusInfo, InputWrapper, MatchingStudents } from './SearchBar.styles';
import Input from 'components/atoms/Input/Input.styles';
import useStudents from 'hooks/useStudents';
import { debounce } from 'lodash';

const SearchBar = () => {
  const [value, setValue] = useState('');
  const [matchingStudents, setMatchingStudents] = useState([]);
  const { findStudents } = useStudents();

  const getMatchingStudents = debounce(async (searchPhrase) => {
    const { matchingStudents } = await findStudents(searchPhrase);
    setMatchingStudents(matchingStudents);
  }, 1500);

  useEffect(() => {
    if (!value) return;
    getMatchingStudents(value);
  }, [value, getMatchingStudents]);

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <InputWrapper>
        <Input value={value} onChange={(e) => setValue(e.target.value)} />
        {value && matchingStudents.length ? (
          <MatchingStudents>
            {matchingStudents.map((student) => (
              <li key={student.id}>{student.name}</li>
            ))}
          </MatchingStudents>
        ) : null}
      </InputWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
