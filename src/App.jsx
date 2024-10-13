import React from 'react';
import ContactsForm from './components/ContactsForm/ContactsForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

const App = () => {
    return (
        <div style={{textAlign: 'center', padding: '20px', maxWidth: '800px', margin: '0 auto'}}>
            <h1>Contact Book</h1>
            <ContactsForm/>
            <SearchBox/>
            <ContactList/>
        </div>
    );
};

export default App;
