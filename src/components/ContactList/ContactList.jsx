import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/filterSlice';
import { Notify } from 'notiflix';
import { getContacts, deleteContact } from '../../redux/contactSlice';
import { DeleteBtn } from './ContactList.styled';

export const List = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const filteredContacts = contacts.filter(
    contact =>
      contact &&
      contact.name &&
      contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <p>
            {contact && contact.name}: <span>{contact && contact.number}</span>
          </p>
          <DeleteBtn
            onClick={() => {
              Notify.info(`${contact.name} is deleted from your phone book`);
              dispatch(deleteContact({ id: contact.id, name: contact.name }));
            }}
          >
            Delete
          </DeleteBtn>
        </li>
      ))}
    </ul>
  );
};
