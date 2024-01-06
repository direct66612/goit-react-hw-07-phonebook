import Form from "./Form/Form";
import Title from "./Title/Title";
import { Filter } from "./Filter/Filter";
import List from "./List/List";
import { getContacts, getIsLoading } from "../Redux/contactsSlice";
import { fetchContactsAction } from "../Redux/api";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const App = () => {
  const contacts = useSelector(getContacts);

  const isLoading = useSelector(getIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsAction());
  }, [dispatch]);
  return (
    <>
      <Title title="Phonebook"></Title>
      <Form />
      <Title title="Contacts"></Title>
      <Filter />
      {isLoading ? (
        <p>...loading</p>
      ) : contacts.length > 0 ? (
        <List />
      ) : (
        <p>No contacts</p>
      )}
    </>
  );
};
export default App;
