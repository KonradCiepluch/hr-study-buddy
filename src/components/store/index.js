import { configureStore } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// należy pamiętać żeby generować unikalne id na etapię tworzenia notatki, a nie przy mapowaniu gdyż przy każdym renderze ta wartość byłaby inna

const notesApi = createApi({
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
});

// use[MethodName][MethodType]
export const { useGetNotesQuery, useAddNoteMutation, useRemoveNoteMutation } = notesApi;

export const store = configureStore({
  reducer: {
    [notesApi.reducerPath]: notesApi.reducer,
    // notes: notesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(notesApi.middleware),
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
