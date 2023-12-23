import { changeFilter } from '../../Redux/filterSlice';
import { useDispatch } from 'react-redux';
import Container from './Filter.styled';
export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };
  return (
    <Container>
      <h3>Find contacts by name</h3>
      <input
        className="input__filter"
        type="text"
        name="contact_name"
        placeholder="Search..."
        onChange={handleFilter}
      />
    </Container>
  );
};
