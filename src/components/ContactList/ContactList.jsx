import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactList.module.css';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoadingStatus,
} from 'redux/selectors';
import { useEffect } from 'react';
import {
  fetchContactsThunk,
  deleteContactThunk,
} from 'redux/contactFormOperations';
import { Loader } from 'components/Loader/Loader';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoadingStatus);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  return (
    <>
      {error && <p>{error}</p>}
      {isLoading && <Loader />}
      {contacts.length > 0 && (
        <ul className={styles.contactList}>
          {filteredContacts().map(contact => {
            const { id, name, phone } = contact;
            return (
              <li className={styles.contactListItem} key={id}>
                <p>
                  {name}: {phone}
                </p>
                <button
                  type="button"
                  className={styles.contactListBtn}
                  onClick={() => dispatch(deleteContactThunk(id))}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
