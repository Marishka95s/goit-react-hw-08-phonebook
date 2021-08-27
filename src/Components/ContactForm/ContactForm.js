import React, { useState } from 'react';
// import useLocalStorage from '../../hooks/useLocalStorage';
import PropTypes from 'prop-types';
import { useDispatch, useSelector  } from 'react-redux';
import { getFiltredContacts } from '../../redux/phonebook/contacts-selectors';
import { addContact } from '../../redux/phonebook/contacts-operations';
import styles from './ContactForm.module.css';

export default function ContactForm() {
    const dispatch = useDispatch();
    const contacts = useSelector(getFiltredContacts);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');  

    const handleChange = event => {
        const { name, value } = event.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(addContact(contacts, name, number));
        setName('');
        setNumber('');
    }

    return(
        <form className={styles.form} method="post" onSubmit={handleSubmit}>
            <label className={styles.label}>Name: 
            <input className={styles.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-ЯІіЇїҐґ]+(([' -][a-zA-Zа-яА-ЯІіЇїҐґ ])?[a-zA-Zа-яА-ЯІіЇїҐґ]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={handleChange}
            value={name}
          />
            </label>
            <label className={styles.label}>Number: 
                <input type="tel" name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +" 
                className={styles.input} value={number} onChange={handleChange} required />
            </label>
            <button type="submit" 
            className={styles.btn}>
                Add contact
            </button>
        </form>
    )
}
ContactForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number,
};

