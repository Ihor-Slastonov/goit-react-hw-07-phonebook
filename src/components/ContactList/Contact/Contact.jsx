import PropTypes from 'prop-types';

import { Item, ContactInfo, DeleteBtn } from './Contact.styled';

export const Contact = ({ id, name, number, onDelete }) => {
  return (
    <Item>
      <ContactInfo>
        {name}: {number}
      </ContactInfo>
      <DeleteBtn type="button" onClick={() => onDelete(id)}>
        X
      </DeleteBtn>
    </Item>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
};
