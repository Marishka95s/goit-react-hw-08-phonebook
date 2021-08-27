import { createAction } from '@reduxjs/toolkit';

const fetchContactRequest = createAction('contacts/fetchContactRequest');
const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
const fetchContactError = createAction('contacts/fetchContactError');

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction('contacts/addContactSuccess');
const addContactError = createAction('contacts/addContactError');

const deleteContactRequest = createAction('contacts/deleteContactRequest');
const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
const deleteContactError = createAction('contacts/deleteContactError');

const updateContactRequest = createAction('contacts/updateContactRequest');
const updateContactSuccess = createAction('contacts/updateContactSuccess');
const updateContactError = createAction('contacts/updateContactError');

const changeFilter = createAction('contscts/changeFilter');

const contactsActions = {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest, addContactSuccess,
  addContactError,
  deleteContactRequest, deleteContactSuccess,
  deleteContactError,
  updateContactRequest,
  updateContactSuccess,
  updateContactError,
  changeFilter
  };

export default contactsActions;