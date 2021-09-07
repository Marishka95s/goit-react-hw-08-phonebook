import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import changeFilter from '../../../redux/phonebook/contacts-actions';
import { ContactsSelectors } from '../../../redux/phonebook';
import styles from './Filter.module.css';

export default function Filter() {
    const filter = useSelector(ContactsSelectors.getFilter);
    const dispatch = useDispatch();
    const onChangeFilter = event =>{
        console.log(event.currentTarget.value)
        // dispatch(changeFilter(event.currentTarget.value))
};

    return(
    <form>
    <label className={styles.label}>
        Find contacts by name
        <input className={styles.input} type="text" required value={filter} onChange={onChangeFilter} placeholder="Enter name"
        pattern="^[a-zA-Zа-яА-ЯІіЇїҐґ]+(([' -][a-zA-Zа-яА-ЯІіЇїҐґ ])?[a-zA-Zа-яА-ЯІіЇїҐґ]*)*$"
        title="The name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan ..."/>
    </label>
    </form>
)};
Filter.propTypes = {
    value: PropTypes.string,
}
