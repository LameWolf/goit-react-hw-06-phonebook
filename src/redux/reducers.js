import { ADD_CONTACT, DELETE_CONTACT, SET_FILTER } from './actions';

const initialState = {
  contacts: [],
  filterText: '',
};

export const contactsReducer = (state = initialState.contacts, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      const isExist = state.find(
        contact => contact.name === action.contact.name
      );

      if (isExist) {
        return state;
      }

      return [...state, action.contact];

    case DELETE_CONTACT:
      return state.filter(contact => contact.id !== action.contactId);

    default:
      return state;
  }
};

export const filterReducer = (state = initialState.filterText, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filterText;
    default:
      return state;
  }
};
