import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
// import { getFiltredContacts, getError, getLoadingStatus } from '../../../redux/phonebook/contacts-selectors';
// import { fetchContact, deleteContact } from '../../../redux/phonebook/contacts-operations';
import styles from './ContactList.module.css';
import { useEffect } from 'react';

import { ContactsSelectors, ContactsOperations } from '../../../redux/phonebook';

export default function ContactList() { 
    const error = useSelector(ContactsSelectors.getError);
    const loading = useSelector(ContactsSelectors.getLoadingStatus);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(ContactsOperations.fetchContact());
    }, [dispatch]);
    const contacts = useSelector(ContactsSelectors.getFiltredContacts);     

    return(
    <>
    {loading && <h2 className={styles.loading}>Loading...</h2>}
    {error && <h2 className={styles.error}>{error}</h2>}
    <ul className={styles.list}>
        {contacts.map( ({ id, name, number }) => (
            <li key={id} className={styles.item}>
                <p className={styles.name}>{name}: <span>{number}</span></p>
                <button type="button" className={styles.btn} onClick={() => dispatch(ContactsOperations.deleteContact(id))}>Delete</button>
            </li>
        ) )
        }
    </ul>
    </>
)};
ContactList.propTypes = {
    id: PropTypes.any,
    name: PropTypes.string,
    number: PropTypes.string,
}


