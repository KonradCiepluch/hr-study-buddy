import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const studentsApi = createApi({
  reducerPath: 'studentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  tagTypes: ['Students'],
  endpoints: (builder) => ({
    getStudentById: builder.query({
      query: (id) => `students/${id}`,
    }),
    findStudents: builder.mutation({
      query: (body) => ({
        url: 'students/search',
        method: 'POST',
        body,
      }),
    }),
    addNewStudent: builder.mutation({
      query: (body) => ({
        url: 'students',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Students'],
    }),
  }),
});

export const { useGetStudentByIdQuery, useFindStudentsMutation, useAddNewStudentMutation } = studentsApi;
