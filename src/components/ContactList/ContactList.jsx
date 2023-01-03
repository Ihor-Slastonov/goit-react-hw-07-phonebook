import PropTypes from 'prop-types';
import { Contact } from './Contact/Contact';

import { Contacts } from './ContactList.styled';

export const ContactList = ({ contacts}) => {
  return (
    <Contacts>
      {contacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
          />
        );
      })}
    </Contacts>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};