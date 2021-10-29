import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const groupsApi = createApi({
  reducerPath: 'groupsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  tagTypes: ['Groups'],
  endpoints: (builder) => ({
    getGroups: builder.query({
      query: () => 'groups',
    }),
    getStudentsByGroup: builder.query({
      query: (id) => `groups/${id}`,
      providesTags: ['Groups'],
    }),
    removeStudentFromGroup: builder.mutation({
      query: (body) => ({
        url: 'groups/delete',
        method: 'DELETE',
        body,
      }),
      invalidatesTags: ['Groups'],
    }),
    addNewStudentToGroup: builder.mutation({
      query: (body) => ({
        url: 'groups/add',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Groups'],
    }),
  }),
});

export const { useGetGroupsQuery, useGetStudentsByGroupQuery, useRemoveStudentFromGroupMutation, useAddNewStudentToGroupMutation } = groupsApi;
