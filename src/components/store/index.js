import { configureStore } from '@reduxjs/toolkit';
import { notesApi } from './api/notes';
import { groupsApi } from './api/groups';
import { studentsApi } from './api/students';

// należy pamiętać żeby generować unikalne id na etapię tworzenia notatki, a nie przy mapowaniu gdyż przy każdym renderze ta wartość byłaby inna

/* const notesApi = createApi({
  reducerPath: 'notesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  tagTypes: ['Notes'],
  endpoints: (builder) => ({
    getNotes: builder.query({
      query: () => 'notes',
      providesTags: ['Notes'],
    }),
    addNote: builder.mutation({
      query: (body) => ({
        url: 'notes',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Notes'],
    }),
    removeNote: builder.mutation({
      query: (body) => ({
        url: 'notes',
        method: 'DELETE',
        body,
      }),
      invalidatesTags: ['Notes'],
    }),
  }),
}); */

// use[MethodName][MethodType]
// export const { useGetNotesQuery, useAddNoteMutation, useRemoveNoteMutation } = notesApi;
/* 
const groupsApi = createApi({
  reducerPath: 'groupsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  endpoints: (builder) => ({
    getGroups: builder.query({
      query: () => 'groups',
    }),
  }),
});
 */
// export const { useGetGroupsQuery } = groupsApi;

export * from './api/notes';
export * from './api/groups';
export * from './api/students';

export const store = configureStore({
  reducer: {
    [notesApi.reducerPath]: notesApi.reducer,
    [groupsApi.reducerPath]: groupsApi.reducer,
    [studentsApi.reducerPath]: studentsApi.reducer,
    // notes: notesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(notesApi.middleware, groupsApi.middleware),
});

/* const initialNotesState = [{ id: uuid(), title: 'Lorem ipsum', content: 'Lorem ipsum dolor sit amet' }]; */

/* const notesSlice = createSlice({
  name: 'notes',
  initialState: initialNotesState,
  reducers: {
    addNote(state, action) {
      state.push({
        id: uuid(),
        ...action.payload,
      });
    },
    removeNote(state, action) {
      return state.filter((note) => note.id !== action.payload.id);
    },
  },
});

export const { addNote, removeNote } = notesSlice.actions; */
