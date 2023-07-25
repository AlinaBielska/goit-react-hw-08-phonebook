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
    <li className={css.contactItem} key={id} label={`${name}: ${number}`} onClick={() => handleEditContact(contact)}>
    <span>{name}: {number}</span>
    <button
        className={css.contactButton}
        type="button"
        id={id}
        onClick={() => onContactRemove(id)}>
        X
    </button>
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