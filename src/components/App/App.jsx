import { useState, useEffect } from 'react';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

import { Container, Box } from './App.styled';
import toast, { Toaster } from 'react-hot-toast';


export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const addNewContact = (name, number) => {
    const checkedContact = contactCheck(name);
    if (checkedContact !== undefined) {
      return toast.error(`${name} is already in the contact list`);
    }
    dispatch(addContact(name, number));
    toast.success('You have added a new contact');
  };

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  function contactCheck(value) {
    return contacts.find(
      contact => contact.name.toLowerCase() === value.toLowerCase()
    );
  }



  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addNewContact} />

      {contacts.length > 0 && <h2>Contacts</h2>}
      {contacts.length > 0 && (
        <Box>
          <Filter/>

          <ContactList contacts={filteredContacts()} />
        </Box>
      )}
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
