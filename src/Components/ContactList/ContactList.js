import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFiltredContacts, getError, getLoadingStatus } from '../../redux/phonebook/contacts-selectors';
import { fetchContact, deleteContact } from '../../redux/phonebook/contacts-operations';
import styles from './ContactList.module.css';
import { useEffect } from 'react';

export default function ContactList() { 
    const error = useSelector(getError);
    const loading = useSelector(getLoadingStatus);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContact());
    }, [dispatch]);
    const contacts = useSelector(getFiltredContacts);     

    return(
    <>
    {loading && <h2 className={styles.loading}>Loading...</h2>}
    {error && <h2 className={styles.error}>{error}</h2>}
    <ul className={styles.list}>
        {contacts.map( ({ id, name, number }) => (
            <li key={id} className={styles.item}>
                <p className={styles.name}>{name}: <span>{number}</span></p>
                <button type="button" className={styles.btn} onClick={() => dispatch(deleteContact(id))}>Delete</button>
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


