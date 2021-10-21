import axios from 'axios';
import { useCallback } from 'react';
import useError from './useError';

const studentsApi = axios.create({});

studentsApi.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

const useStudents = () => {
  const { dispatchError } = useError();

  const getGroups = useCallback(async () => {
    try {
      const response = await studentsApi.get(`/groups`);
      return response.data.groups;
    } catch (e) {
      dispatchError(`Unfortunately couldn't get groups`);
    }
  }, [dispatchError]);

  const getStudentById = useCallback(
    async (id) => {
      try {
        const response = await studentsApi(`/students/${id}`);
        return response.data.student;
      } catch (e) {
        dispatchError(`Unfortunately couldn't get students`);
      }
    },
    [dispatchError]
  );

  const getStudentsByGroup = useCallback(
    async (groupId) => {
      try {
        const response = await studentsApi.get(`/groups/${groupId}`);
        return response.data.students;
      } catch (e) {
        dispatchError(`Unfortunately couldn't get students of this group`);
      }
    },
    [dispatchError]
  );

  const findStudents = async (searchPhrase) => {
    try {
      const { data } = await studentsApi.post(`/students/search`, { searchPhrase });
      return data;
    } catch (e) {
      dispatchError(`Unfortunately couldn't get students`);
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
