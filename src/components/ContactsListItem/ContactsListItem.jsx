import { useDispatch } from 'react-redux';
import css from './ContactListItem.module.css';
import { setOpenedContactAction, showHideModalAction } from '../../redux/modal/modalSlice';
import PropTypes from 'prop-types';

export const ContactsListItem = ({ contact, id, name, number, onContactRemove }) => {
  
    const dispatch = useDispatch();

  const handleEditContact = contact => {
    dispatch(showHideModalAction());
    dispatch(setOpenedContactAction(contact));
  };
  return (
    <li
      key={id}
      className={css.item}
      label={`${name}: ${number}`}
      variant="outlined"
      onClick={() => handleEditContact(contact)}
      onDelete={() => onContactRemove(id)}
      >
    </li>
  );
};

ContactsListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  number: PropTypes.string,
  onContactRemove: PropTypes.func,
};