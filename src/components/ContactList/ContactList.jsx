import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions';
import { List, Item, Button } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filterText = useSelector(state => state.filterText);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            {name}: {number}
            <Button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

export default ContactList;
