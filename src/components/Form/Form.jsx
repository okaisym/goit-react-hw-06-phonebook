import { Label, Input, AddContactBtn } from './Form.styled';
import { useContacts } from 'hooks/useContacts';
import { Formik } from 'formik';


const ContactForm = () => {
  const { addContact } = useContacts();

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={(values, resetForm) => {
          addContact(values);
          resetForm();
        }}
      >
        <form>
        <Label htmlFor="nameInput">Name:</Label>
        <Input
          type="text"
          id="nameInput"
          name="name"
          placeholder="Name"
          required
        />
        <Label htmlFor="numberInput">Number:</Label>
        <Input
          type="text"
          id="numberInput"
          name="number"
          placeholder="number"
          required
        />
        <AddContactBtn type="submit">Add contact</AddContactBtn>
      </form>
      </Formik>
    </div>
  );
};

export default ContactForm;
