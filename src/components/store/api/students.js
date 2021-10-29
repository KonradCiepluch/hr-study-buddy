import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const studentsApi = createApi({
  reducerPath: 'studentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
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
  }),
});

export const { useGetStudentByIdQuery, useFindStudentsMutation } = studentsApi;
