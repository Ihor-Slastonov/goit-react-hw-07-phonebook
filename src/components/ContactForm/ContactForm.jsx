import PropTypes from 'prop-types';
import { useState } from 'react';

import { Form, Field, Input, SubmitBtn } from './ContactForm.styled';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    resetForm();
  };

  function resetForm() {
    setName('');
    setNumber('');
    return;
  }

  return (
    <Form onSubmit={onFormSubmit} autoComplete="off">
      <Field>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Jam Rapovich"
          onChange={onInputChange}
          value={name}
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
          onChange={onInputChange}
          value={number}
          required
        />
      </Field>

      <SubmitBtn type="submit">Add contact</SubmitBtn>
    </Form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};