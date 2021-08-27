import { createSelector } from "@reduxjs/toolkit";

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getTotalContacts = state => state.contacts.items.length;
export const getError = state => state.contacts.error;
export const getLoadingStatus = state => state.contacts.loading;

export const getFiltredContacts = createSelector(
    [getContacts, getFilter],
    (contacts, filter) => {
      const normalizedFilter = filter.toLowerCase();  
      return contacts.filter(contact => contact.name.includes(normalizedFilter),
      );
    },
  );

// export const getFiltredContacts = state => {
//     const contacts = getContacts(state);
//     const filter = getFilter(state);
//     const normalizedFilter = filter.toLowerCase();
   
//     return contacts.filter(contact => contact.name.includes(normalizedFilter))};

