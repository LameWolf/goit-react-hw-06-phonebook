export const ADD_CONTACT = 'ADD_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const SET_FILTER = 'SET_FILTER';

export const addContact = contact => {
  return { type: ADD_CONTACT, contact };
};

export const deleteContact = contactId => {
  return { type: DELETE_CONTACT, contactId };
};

export const setFilter = filterText => {
  return { type: SET_FILTER, filterText };
};
