import { createStore } from 'redux';
import { v4 as uuid } from 'uuid';

// należy pamiętać żeby generować unikalne id na etapię tworzenia notatki, a nie przy mapowaniu gdyż przy każdym renderze ta wartośc byłaby inna

export const addNote = (payload) => {
  return {
    type: 'ADD_NOTE',
    payload: {
      id: uuid(),
      ...payload,
    },
  };
};

export const removeNote = (payload) => {
  return {
    type: 'REMOVE_NOTE',
    payload,
  };
};

const initialState = {
  notes: [{ id: uuid(), title: 'Lorem ipsum', content: 'Lorem ipsum dolor sit amet' }],
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return { ...state, notes: [...state.notes, action.payload] };
    case 'REMOVE_NOTE':
      return { ...state, notes: state.notes.filter((note) => note.id !== action.payload.id) };
    default:
      return state;
  }
};

export const store = createStore(notesReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
