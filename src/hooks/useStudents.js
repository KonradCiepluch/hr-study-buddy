import axios from 'axios';
import { useCallback } from 'react';

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
  const getGroups = useCallback(async () => {
    try {
      const response = await studentsApi.get(`/groups`);
      return response.data.groups;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getStudentById = useCallback(async (id) => {
    try {
      const response = await studentsApi(`/students/${id}`);
      return response.data.student;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getStudentsByGroup = useCallback(async (groupId) => {
    try {
      const response = await studentsApi.get(`/groups/${groupId}`);
      return response.data.students;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const findStudents = async (searchPhrase) => {
    try {
      const { data } = await studentsApi.post(`/students/search`, { searchPhrase });
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
