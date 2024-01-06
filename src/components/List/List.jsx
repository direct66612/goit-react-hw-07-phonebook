import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Container from "./List.styled";
import { getContacts } from "../../Redux/contactsSlice";
import { deleteContactAction } from "../../Redux/api";
import { getFilter } from "../../Redux/filterSlice";
const List = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const contactsIsFiltered = filteredContacts(contacts, filter);
  const dispatch = useDispatch();
  const onDeleteContact = (idEl) => {
    dispatch(deleteContactAction(idEl));
  };
  return (
    <Container>
      {contactsIsFiltered.map(({ id, name, phone }) => (
        <li key={id} className="contact__item">
          <p>
            {name}: {phone}
          </p>
          <button
            type="button"
            onClick={() => onDeleteContact(id)}
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
