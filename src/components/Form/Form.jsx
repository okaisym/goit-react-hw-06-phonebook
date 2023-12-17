import { Label, Input, AddContactBtn, Form } from './Form.styled';
import { addContact, getContacts } from '../../redux/contactSlice';
import { Formik } from 'formik';
import { Notify } from 'notiflix';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  return (
    <div>
      <Formik
        initialValues={{
          nameInput: '',
          numberInput: '',
        }}
        onSubmit={(values, action) => {
          action.resetForm();
          if (contacts.some(contact => contact.name === values.nameInput)) {
            Notify.failure(`${values.nameInput} is already in the phonebook`);
            return;
          }
          Notify.success(`${values.nameInput} is added to your contacts`);
          dispatch(addContact({ ...values, id: nanoid() }));
        }}
      >
        {({ handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="nameInput">Name:</Label>
            <Input
              type="text"
              id="nameInput"
              name="nameInput"
              placeholder="Name"
              required
              value={values.nameInput}
              onChange={handleChange}
            />
            <Label htmlFor="numberInput">Number:</Label>
            <Input
              type="text"
              id="numberInput"
              name="numberInput"
              placeholder="Number"
              required
              value={values.numberInput}
              onChange={handleChange}
            />
            <AddContactBtn type="submit">Add contact</AddContactBtn>
          </Form>
        )}
      </Formik>
    </div>
  );
};