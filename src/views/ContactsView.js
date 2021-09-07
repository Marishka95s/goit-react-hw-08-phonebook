import { useSelector } from 'react-redux';
import ContactForm from '../Components/Contacts/ContactForm';
import Filter from '../Components/Contacts/Filter';
import ContactList from '../Components/Contacts/ContactList';
import { ContactsSelectors } from '../redux/phonebook';
import styles from './ContactsView.module.css';

function ContactsView() {
    const totalContacts = useSelector(ContactsSelectors.getTotalContacts);
  return (
    <div className={styles.contacts}>
      <h2>Expand your contacts </h2>
      <ContactForm />
      <h2>Your contacts (total: {totalContacts}) </h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default ContactsView;