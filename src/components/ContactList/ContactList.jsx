import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
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
                <li key={id} className={styles.item}>
                    <p>{name}: {number} </p>
                    <button
                        onClick={() => dispatch(deleteContact(id))}
                        className={styles.button}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default ContactList;
