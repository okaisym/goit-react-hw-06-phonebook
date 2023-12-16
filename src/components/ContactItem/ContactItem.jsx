import React from 'react';
import {DeleteBtn, ListItem} from './ContactItem.styled'



const ContactItem = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <ListItem key={contact.id}>
          {contact.name}: {contact.number}
          <DeleteBtn onClick={() => deleteContact(contact.id)}>Delete</DeleteBtn>
        </ListItem>
      ))}
    </ul>
  );
};

export default ContactItem;