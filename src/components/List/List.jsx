import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../Redux/contactsSlice';
import Container from './List.styled';
import { selectorContacts } from '../../Redux/selectors';
import { selectorFilter } from '../../Redux/selectors';
const List = () => {
  const contacts = useSelector(selectorContacts);
  const filter = useSelector(selectorFilter);
  const getContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const contactsIsFiltered = getContacts(contacts, filter);
  const dispatch = useDispatch();
  return (
    <Container>
      {contactsIsFiltered.map(({ id, name, number }) => (
        <li key={id} className="contact__item">
          <p>
            {name}: {number}
          </p>
          <button
            type="button"
            onClick={() => dispatch(deleteContact(id))}
            className="contact__btn"
          >
            Delete
          </button>
        </li>
      ))}
    </Container>
  );
};
export default List;
