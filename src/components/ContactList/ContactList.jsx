import PropTypes from 'prop-types';
import { Contact } from './Contact/Contact';

import { Contacts } from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  return (
    <Contacts>
      {contacts.map(contact => {
        const { id, name, phone } = contact;
        return <Contact key={id} name={name} phone={phone} id={id} />;
      })}
    </Contacts>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }).isRequired
  ),
};
