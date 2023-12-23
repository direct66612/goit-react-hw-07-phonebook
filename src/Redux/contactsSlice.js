import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (state, action) => {
        return [...state, action.payload];
      },
      prepare(user) {
        return {
          payload: {
            id: nanoid(),
            ...user,
          },
        };
      },
    },
    deleteContact: {
      reducer: (state, action) => {
        return state.filter(el => el.id !== action.payload);
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
