import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Component } from 'react';

import { Form, Field, Input, SubmitBtn } from './ContactForm.styled';

export class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  onInputChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  onFormSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();
    this.props.onSubmit(nanoid(), name, number);
    this.resetForm();
  };

  resetForm() {
    this.setState({
      name: '',
      number: '',
    });
  }

  render() {
    return (
      <Form onSubmit={this.onFormSubmit} autoComplete="off">
        <Field>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Jam Rapovich"
            onChange={this.onInputChange}
            value={this.state.name}
            required
          />
        </Field>
        <Field>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="000-00-00"
            onChange={this.onInputChange}
            value={this.state.number}
            required
          />
        </Field>

        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </Form>
    );
  }
}
