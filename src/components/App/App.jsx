import { useState } from 'react';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import { Container, Box } from './App.styled';
import toast, { Toaster } from 'react-hot-toast';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = (id, name, number) => {
    const checkedContact = contactCheck(name);
    if (checkedContact !== undefined) {
      return toast.error(`${name} is already in the contact list`);
    }
    setContacts(prevContacts => [...prevContacts, { id, name, number }]);
    toast.success('You have added a new contact');
  };

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };
  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
    toast.error('You have deleted a contact')
  };

  function contactCheck(value) {
    return contacts.find(
      contact => contact.name.toLowerCase() === value.toLowerCase()
    );
  }

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      {contacts.length > 0 && <h2>Contacts</h2>}
      {contacts.length > 0 && (
        <Box>
          <Filter onChange={setFilter} />

          <ContactList contacts={filteredContacts()} onDelete={deleteContact} />
        </Box>
      )}
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: 'green',
              color: 'white'
            },
          },
          error: {
            style: {
              background: 'red',
              color: 'white'
            },
          },
        }}
      />
    </Container>
  );
};

//   componentDidMount() {
//     const savedContacts = localStorage.getItem('contacts');
//     if (savedContacts !== null) {
//      return this.setState({
//         contacts: JSON.parse(savedContacts),
//       });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

