import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { fetchContacts, addContact } from 'redux/operations';
import { selectorContacts, selectorFilter } from 'redux/selectors';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import { Container, Box } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();

  const { contacts, isLoading, error } = useSelector(selectorContacts);

  const filter = useSelector(selectorFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const addNewContact = (name, phone) => {
    const checkedContact = contactCheck(name);
    if (checkedContact !== undefined) {
      return toast.error(`${name} is already in the contact list`);
    }
    dispatch(addContact({ name, phone }));
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
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {contacts.length > 0 && <h2>Contacts</h2>}
      {contacts.length > 0 && (
        <Box>
          <Filter />
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
