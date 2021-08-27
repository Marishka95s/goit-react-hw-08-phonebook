import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from './contacts-actions';

const { fetchContactRequest, fetchContactSuccess, fetchContactError, addContactRequest, addContactSuccess, addContactError, deleteContactRequest, deleteContactSuccess, deleteContactError, updateContactRequest, updateContactSuccess, updateContactError, changeFilter } = actions;

const items = createReducer([], {
    [fetchContactSuccess]: (_, { payload }) => payload,

    [addContactSuccess]: (state, { payload }) => [...state, payload],

    [deleteContactSuccess]: (state, { payload }) => state.filter(contact => contact.id !== payload),
    
    [updateContactSuccess]: (state, { payload }) => state.map(contact => contact.name === payload.name ? { ...contact, number: payload.number } : contact )
});

const loading = createReducer(false, {
    [fetchContactRequest]: () => true,
    [fetchContactSuccess]: () => false,
    [fetchContactError]: () => false,
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,
    [updateContactRequest]: () => true,
    [updateContactSuccess]: () => false,
    [updateContactError]: () => false,
})
           
const filter = createReducer('', {
    [changeFilter]: (_, { payload }) => payload
});

const error = createReducer(null, {
    [fetchContactError]: (_, { payload }) => payload,
    [addContactError]: (_, { payload }) => payload,
    [deleteContactError]: (_, { payload }) => payload,
    [updateContactError]: (_, { payload }) => payload,
    [fetchContactRequest]: () => null,
    [addContactRequest]: () => null,
    [deleteContactRequest]: () => null,
    [updateContactRequest]: () => null,
  });

export default combineReducers({ items, loading, filter, error });