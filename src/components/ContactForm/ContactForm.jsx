import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/selectors';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import { useState } from 'react';

export const ContactForm = () => {

    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();
    const [nameValue, setNameValue] = useState('');
    const [numberValue, setNumberValue] = useState('');

    const onSubmitCheckAndAdd = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = form.elements.name.value;
        const phone = form.elements.number.value;
        const newContact = {
            name,
            phone,
        };

        contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
            ? window.alert(`${name} is already in contacts`)
            : dispatch(addContact(newContact));
        
        setNameValue('');
        setNumberValue('');
    };
    
    return (
        <form className={css.form} onSubmit={onSubmitCheckAndAdd}>
            <label className={css.formLabel}>Name</label>
            <input
                className={css.formInput}
                type="text"
                name="name"
                autoComplete="off"
                value={nameValue}
                onChange={e => setNameValue(e.target.value)}
                label="Name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <label className={css.formLabel}>Number</label>
            <input
                className={css.formInput}
                type="tel"
                name="number"
                autoComplete="off"
                value={numberValue}
                onChange={e => setNumberValue(e.target.value)}
                label="Number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            <button className={css.formButton} type="submit">Add contact</button>
        </form>
    );
};

ContactForm.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        formName: PropTypes.string.isRequired,
        formNumber: PropTypes.string.isRequired,
    }))
};

// export default ContactForm;