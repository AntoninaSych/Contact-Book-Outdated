import React from 'react';
import styles from './Contact.module.css';

const Contact = ({ name, number, onDelete }) => {
    return (
        <li className={styles.item}>
            <p>{name}: {number}</p>
            <button onClick={onDelete} className={styles.button}>
                Delete
            </button>
        </li>
    );
};

export default Contact;
