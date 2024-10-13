import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, selectContacts } from '../../redux/contactsSlice';
import styles from './ContactsForm.module.css';

const ContactsForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const handleSubmit = e => {
        e.preventDefault();
        const newContact = { id: Date.now(), name, number };

        // Prevent adding duplicate contacts
        if (contacts.some(contact => contact.name === name)) {
            alert(`${name} is already in contacts.`);
            return;
        }

        dispatch(addContact(newContact));
        setName(''); // Clear input fields after submission
        setNumber('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Name"
                className={styles.input}
                required
            />
            <input
                type="tel"
                value={number}
                onChange={e => setNumber(e.target.value)}
                placeholder="Phone Number"
                className={styles.input}
                required
            />
            <button type="submit" className={styles.button}>
                Add Contact
            </button>
        </form>
    );
};

export default ContactsForm;
