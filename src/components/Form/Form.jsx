import Container from './Form.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../Redux/contactsSlice';
import { selectorContacts } from '../../Redux/selectors';
const Form = () => {
  const [data, setData] = useState({ name: '', number: '' });
  const dispatch = useDispatch();
  const contacts = useSelector(selectorContacts);
  const handleChange = e => {
    let { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };
  const resetForm = e => {
    e.preventDefault();

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in contactcs!`);
      return;
    }

    dispatch(addContact(data));
    setData({ name: '', number: '' });
  };
  return (
    <Container>
      <form onSubmit={resetForm} className="form">
        <p className="input__text">Name</p>
        <input
          className="input__name"
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
        <input
          className="input__tel"
          type="tel"
          name="number"
          value={data.number}
          onChange={handleChange}
          required
        />
        <button className="input__btn" type="submit">
          Add Contact
        </button>
      </form>
    </Container>
  );
};
export default Form;
