import { createSlice } from '@reduxjs/toolkit';
import data from '../contacts/contacts.json';


export const contactSlice = createSlice({
  name: 'items',
  initialState:  data,
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
    onDeleteContact: (state, action) => {
      const filteredContacts = state.filter(
        contact => contact.id !== action.payload
      );
      return filteredContacts;
    },
  },
});

export const { addContact, onDeleteContact } = contactSlice.actions;

export default contactSlice.reducer;