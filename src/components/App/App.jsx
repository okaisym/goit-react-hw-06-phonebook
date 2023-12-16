import { SearchBar } from '../SearchBar/Searchbar';
import List from '../ContactList/ContactList';
import ContactForm from '../Form/Form';
import { useContacts } from 'hooks/useContacts';
import {Title} from './App.styled'


export const App = () => {
  const { contacts } = useContacts();
  return (
    <div>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <SearchBar />
      {contacts.length > 0 ? (
        <List contacts={contacts} />
      ) : (
        <p>No contacts available</p>
      )}
    </div>
  );
};
