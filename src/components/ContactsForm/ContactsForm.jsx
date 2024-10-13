import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, selectContacts } from '../../redux/contactsSlice';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './ContactsForm.module.css';

const ContactsForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const formik = useFormik({
        initialValues: {
            name: '',
            number: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, 'Must be at least 2 characters')
                .required('Name is required'),
            number: Yup.string()
                .matches(/^[0-9]+$/, 'Phone number must be digits')
                .min(7, 'Phone number must be at least 7 digits')
                .required('Phone number is required'),
        }),
        onSubmit: (values, { resetForm }) => {
            const newContact = { id: Date.now(), ...values };

            if (contacts.some(contact => contact.name === values.name)) {
                alert(`${values.name} is already in contacts.`);
                return;
            }

            dispatch(addContact(newContact));
            resetForm(); // Clear form after submission
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className={styles.form}>
            <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                className={styles.input}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
                <div className={styles.error}>{formik.errors.name}</div>
            ) : null}

            <input
                id="number"
                name="number"
                type="tel"
                placeholder="Phone Number"
                className={styles.input}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.number}
            />
            {formik.touched.number && formik.errors.number ? (
                <div className={styles.error}>{formik.errors.number}</div>
            ) : null}

            <button type="submit" className={styles.button}>
                Add Contact
            </button>
        </form>
    );
};

export default ContactsForm;
