import { Input } from '../Form/Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/contactSlice';
import { selectFilter } from '../../redux/selectors';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  const handleFilterChange = value => {
    dispatch(filterContacts(value));
  };
  return (
    <Input
      type="text"
      name="name"
      value={filterValue}
      onChange={event => handleFilterChange(event.target.value)}
      placeholder="Find contacts by name"
      required
    />
  );
};