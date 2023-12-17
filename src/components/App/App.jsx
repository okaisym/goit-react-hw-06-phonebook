import { SearchBar } from '../SearchBar/Searchbar';
import { List } from '../ContactList/ContactList';
import { ContactForm } from '../Form/Form';
import {Title, TextItem} from './App.styled';
import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/contactSlice';


export const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <div>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <SearchBar />
      {contacts.length > 0 ? 
        <List />
       : 
        <TextItem>No contacts available</TextItem>
      }
    </div>
  );
};
