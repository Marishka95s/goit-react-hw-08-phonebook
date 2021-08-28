// import { useState, useEffect } from "react";
// import { NavLink, useRouteMatch, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getTotalContacts } from '../redux/phonebook/contacts-selectors'

import ContactForm from '../Components/Contacts/ContactForm';
import ContactList from '../Components/Contacts/ContactList';
import Filter from '../Components/Contacts/Filter';
import styles from './ContactsView.module.css';

export default function ContactsView() {
    const totalContacts = useSelector(getTotalContacts);
    // const { url } = useRouteMatch();
    // const location = useLocation();
    // const [movies, setMovies] = useState(null);

    // useEffect(() => {
    //     moviesFetchAPI.fetchTrendingMovies().then(data => setMovies(data.results));
    // }, [])
    
    return(
        <div className={styles.contacts}>
            <ContactForm />
            <h2>Contacts (total: {totalContacts}) </h2>
            <Filter />
            <ContactList />
        </div>
    )
}