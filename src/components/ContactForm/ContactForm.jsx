import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { Form, Field, Input, SubmitBtn } from './ContactForm.styled';

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    onSubmit(nanoid(), name.value, number.value);
    e.currentTarget.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Field>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Jam Rapovich"
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
