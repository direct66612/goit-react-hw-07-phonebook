import Form from './Form/Form';
import Title from './Title/Title';
import { Filter } from './Filter/Filter';
import List from './List/List';
const App = () => {
  return (
    <>
      <Title title="Phonebook"></Title>
      <Form />
      <Title title="Contacts"></Title>
      <Filter />
      <List></List>
    </>
  );
};
export default App;
