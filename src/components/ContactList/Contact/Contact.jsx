import PropTypes from 'prop-types';
import toast  from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { Item, ContactInfo, DeleteBtn } from './Contact.styled';

export const Contact = ({ id, name, number}) => {
  const dispatch = useDispatch()
  function handleDeleteContact(){
    dispatch(deleteContact(id));
    toast.error('Contact deleted')
  }
  return (
    <Item>
      <ContactInfo>
        {name}: {number}
      </ContactInfo>
      <DeleteBtn type="button" onClick={handleDeleteContact}>
        X
      </DeleteBtn>
    </Item>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
