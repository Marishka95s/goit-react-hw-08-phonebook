import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { ContactsSelectors, ContactsActions } from '../../../redux/phonebook';
import styles from './Filter.module.css';

const Filter = () => {
    const filter = useSelector(ContactsSelectors.getFilter);
    const dispatch = useDispatch();
    const onChangeFilter = event =>{
        dispatch(ContactsActions.changeFilter(event.currentTarget.value))
    };

    return(
    <form className={styles.form}>
    <label className={styles.label}>
        Find contacts by name
        <input className={styles.input} 
        type="text" 
        placeholder="Enter name"  
        name="filter" 
        required onChange={onChangeFilter} 
        value={filter}/>
    </label>
    </form>
)};
Filter.propTypes = {
    filter: PropTypes.string,
}

export default Filter;
