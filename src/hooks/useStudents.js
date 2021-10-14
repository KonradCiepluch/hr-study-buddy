import { useEffect, useState } from 'react';
import axios from 'axios';

const useStudents = ({ groupId = '' } = {}) => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/groups`);
        setGroups(response.data.groups);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  useEffect(() => {
    if (!groupId) return;
    (async () => {
      try {
        const response = await axios.get(`/students/${groupId}`);
        setStudents(response.data.students);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [groupId]);

  const findStudents = async (searchPhrase) => {
    try {
      const { data } = await axios.post(`/students/search`, { searchPhrase });
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    groups,
    students,
    findStudents,
  };
};

export default useStudents;
