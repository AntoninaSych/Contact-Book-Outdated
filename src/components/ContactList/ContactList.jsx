import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);
    const dispatch = useDispatch();

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    if (filteredContacts.length === 0) {
        return null;
    }

    return (
        <ul className={styles.list}>
            {filteredContacts.map(({ id, name, number }) => (
                <Contact
                    key={id}
                    name={name}
                    number={number}
                    onDelete={() => dispatch(deleteContact(id))}
                />
            ))}
        </ul>
    );
};

export default ContactList;
