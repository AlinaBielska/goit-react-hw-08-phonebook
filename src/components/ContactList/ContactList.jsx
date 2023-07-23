import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter, selectIsLoading } from '../../redux/selectors';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { deleteContact } from '../../redux/contacts/operations';
import { ContactsListItem } from '../ContactsListItem/ContactsListItem';

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const isLoading = useSelector(selectIsLoading);

    const deleteContactFromLS = e => {
        e.preventDefault();
        const { id } = e.target;
        dispatch(deleteContact(id));
    };

    const getFilteredContacts = () => {
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    };
    const sortedContacts = getFilteredContacts().sort((a, b) => a.name.localeCompare(b.name));

    const handleDeleteContact = id => {
        dispatch(deleteContact(id));
    };

    const list = sortedContacts.map(contact => (
        <ContactsListItem
            key={contact.id}
            contact={contact}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onContactRemove={handleDeleteContact}
            filter={filter}
        />
    ));

    return (
        // <ul className={css.contactList} >
        //     {contacts
        //         .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
        //         .map(({id, name, phone}) => {
        //             return (
        //                 <li className={css.contactItem} key={id}>
        //                     <span>{name}: {phone}</span>
        //                     <button
        //                         className={css.contactButton}
        //                         type="button"
        //                         id={id}
        //                         onClick={deleteContactFromLS}>
        //                         X
        //                     </button>
        //                 </li>
        //             );
        //         })}
        // </ul>
        <>
            {contacts.length > 0 && <ul className={css.contactsList}>{list}</ul>}
            {isLoading || contacts.length === 0 && <h4 className={css.empty}>You did not add any Contact yet...</h4>}
        </>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }))
};

export default ContactList;