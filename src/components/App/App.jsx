// import { useState, useEffect } from 'react';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import { Container, Box } from './App.styled';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (savedContacts === null) {
  //     return [];
  //   }
  //   return savedContacts;
  // });
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   if (contacts === []) {
  //     return;
  //   }
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = (id, name, number) => {
  //   const checkedContact = contactCheck(name);
  //   if (checkedContact !== undefined) {
  //     return toast.error(`${name} is already in the contact list`);
  //   }
  //   setContacts(prevContacts => [...prevContacts, { id, name, number }]);
  //   toast.success('You have added a new contact');
  // };

  // const filteredContacts = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter)
  //   );
  // };
  // const deleteContact = contactId => {
  //   setContacts(prevContacts =>
  //     prevContacts.filter(contact => contact.id !== contactId)
  //   );
  //   toast.error('You have deleted a contact');
  // };

  // function contactCheck(value) {
  //   return contacts.find(
  //     contact => contact.name.toLowerCase() === value.toLowerCase()
  //   );
  // }

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Box>
        <Filter />
        <ContactList />
      </Box>

      <Toaster
        toastOptions={{
          success: {
            style: {
              background: 'green',
              color: 'white',
            },
          },
          error: {
            style: {
              background: 'red',
              color: 'white',
            },
          },
        }}
      />
    </Container>
  );
};
