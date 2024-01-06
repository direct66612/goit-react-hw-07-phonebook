import Container from "./Form.styled";
import { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../../Redux/contactsSlice";
import { addContactAction } from "../../Redux/api";
const Form = () => {
  const [data, setData] = useState({ name: "", phone: "" });
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const resetForm = (e) => {
    e.preventDefault();

    if (
      contacts.some(
        (contact) => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in contactcs!`);
      return;
    }

    const newContact = {
      id: nanoid(),
      ...data,
    };

    dispatch(addContactAction(newContact));
    setData({ name: "", phone: "" });
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
          type="number"
          name="phone"
          value={data.phone}
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
