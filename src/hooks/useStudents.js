import axios from 'axios';
import { useCallback } from 'react';

const useStudents = () => {
  const getGroups = useCallback(async () => {
    try {
      const response = await axios.get(`/groups`);
      return response.data.groups;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getStudents = useCallback(async (groupId) => {
    try {
      const response = await axios.get(`/students/${groupId}`);
      return response.data.students;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const findStudents = async (searchPhrase) => {
    try {
      const { data } = await axios.post(`/students/search`, { searchPhrase });
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    getGroups,
    getStudents,
    findStudents,
  };
};

export default useStudents;
