import { Component } from 'react';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import { Container, Box } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

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
            <Filter onChange={this.changeFilterValue} />

            <ContactList
              contacts={filteredContacts}
              onDelete={this.deleteContact}
            />
          </Box>
        )}
      </Container>
    );
  }
}
