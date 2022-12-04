import { Component } from 'react';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import { Container, Box } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (id, name, number) => {
    const checkedContact = this.contactCheck(name);
    if (checkedContact !== undefined) {
      alert(`${name} is already in the contact list`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id, name, number }],
    }));
  };

  contactCheck = value => {
    return this.state.contacts.find(
      contact => contact.name.toLowerCase() === value.toLowerCase()
    );
  };

  changeFilterValue = value => {
    this.setState({
      filter: value,
    });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts } = this.state;
    const filteredContacts = this.filteredContacts();

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        {contacts.length > 0 && <h2>Contacts</h2>}
        {contacts.length > 0 && (
          <Box>
            {contacts.length > 0 && (
              <Filter onChange={this.changeFilterValue} />
            )}
            {contacts.length > 0 && (
              <ContactList
                contacts={filteredContacts}
                onDelete={this.deleteContact}
              />
            )}
          </Box>
        )}
      </Container>
    );
  }
}
