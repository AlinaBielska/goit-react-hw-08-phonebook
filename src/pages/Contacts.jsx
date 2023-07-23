import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { selectError, selectIsLoading } from '../redux/selectors';
import { Loader } from '../components/Loader/Loader';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
    
  return (
    <>
      {isLoading && !error && <Loader />}
      <div>
        <ContactForm />
        <ContactsList />
      </div>
    </>
  );
};

export default Contacts;