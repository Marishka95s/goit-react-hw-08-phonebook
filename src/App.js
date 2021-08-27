import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { useSelector } from 'react-redux';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';
import { getTotalContacts } from './redux/phonebook/contacts-selectors'

export default function App() {
  const totalContacts = useSelector(getTotalContacts);

   return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts (total: {totalContacts}) </h2>
      <Filter />
      <ContactList />
    </div>        
  ); 
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.any.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
  ),
  totalContacts: PropTypes.number,
};


