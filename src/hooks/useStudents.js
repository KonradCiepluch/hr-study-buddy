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

  const getStudentById = useCallback(async (id) => {
    try {
      const response = await axios(`/students/${id}`);
      return response.data.student;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getStudentsByGroup = useCallback(async (groupId) => {
    try {
      const response = await axios.get(`/groups/${groupId}`);
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
    getStudentById,
    getStudentsByGroup,
    findStudents,
  };
};

export default useStudents;
