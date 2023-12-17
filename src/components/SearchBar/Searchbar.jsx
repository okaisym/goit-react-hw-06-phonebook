import { Input } from './SearchBar.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, getFilter } from '../../redux/filterSlice';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilter);

  return (
    <Input
      type="text"
      name="name"
      value={filterValue}
      onChange={event => dispatch(changeFilter(event.target.value))}
      placeholder="Find contacts by name"
      required
    />
  );
};