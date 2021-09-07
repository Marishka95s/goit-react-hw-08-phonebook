import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import changeFilter from '../../../redux/phonebook/contacts-actions';
import { ContactsSelectors } from '../../../redux/phonebook';
import styles from './Filter.module.css';

export default function Filter() {
    const value = useSelector(ContactsSelectors.getFilter);
    const dispatch = useDispatch();

    return(
    <label className={styles.label}>
        Find contacts by name
        <input className={styles.input} type="text" value={value} onChange={e => dispatch(changeFilter(e.target.value))}/>
    </label>
)};
Filter.propTypes = {
    value: PropTypes.string,
}
