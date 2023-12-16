import ContactItem from '../ContactItem/ContactItem';
import { useContacts } from '../../hooks/useContacts';
import { useSelector } from 'react-redux';

const List = ({ contacts }) => {
  const { deleteContact } = useContacts();

  const filterValue = useSelector(state => state.contacts.filter);

  const filteredContacts = contacts.filter(contacts =>
    contacts.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onClick={deleteContact}
        />
      ))}
    </ul>
  );
};

export default List;