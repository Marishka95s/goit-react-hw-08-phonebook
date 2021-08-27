import axios from 'axios';
import actions from './contacts-actions';
axios.defaults.baseURL = 'http://localhost:4040';

const { fetchContactRequest, fetchContactSuccess, fetchContactError, addContactRequest, addContactSuccess, addContactError, deleteContactRequest, deleteContactSuccess, deleteContactError, updateContactRequest, updateContactSuccess, updateContactError } = actions;

export const fetchContact = () => dispatch => {
    dispatch(fetchContactRequest());

    axios.get('/contacts').then(({ data }) => dispatch(fetchContactSuccess(data))).catch(error => dispatch(fetchContactError(error)));
};

export const addContact = (contacts, name, number) => dispatch => {
    // const isInContacts = contacts.some(contact => contact.name === name);
    //     if (isInContacts) { 
    //         let replaceAgreement = window.confirm(`${name} is already in contacts. Replace ${name} number?`);

    //         if (!replaceAgreement) {
    //             const update = { number };
    //             dispatch(updateContactRequest());

    //             axios
    //             .patch(`/contacts/${name}`, update)
    //             .then(({ data }) => dispatch(updateContactSuccess(data)))
    //             .catch(error => dispatch(updateContactError(error)));
    //         }
    const isInContacts = contacts.some(contact => contact.name === name);
        if (isInContacts) { 
            alert(`${name} is already in contacts`);
            return;
        }    
    const contact = {
        name, 
        number
    };

    dispatch(addContactRequest());

    axios.post('/contacts', contact).then(({ data }) => dispatch(addContactSuccess(data))).catch(error => dispatch(addContactError(error)));
// }
};

export const deleteContact = contactId => dispatch => {
    dispatch(deleteContactRequest());

    axios.delete(`/contacts/${contactId}`).then(() => dispatch(deleteContactSuccess(contactId))).catch(error => dispatch(deleteContactError(error)));
};

export const updateContact = (contactId, number) => dispatch => {
    const update = { number };
    dispatch(updateContactRequest());

    axios.patch(`/contacts/${contactId}`, update).then(({ data }) => dispatch(updateContactSuccess(data))).catch(error => dispatch(updateContactError(error)));
};

// const operations = { fetchContact, addContact, deleteContact, updateContact };
// export default operations;
