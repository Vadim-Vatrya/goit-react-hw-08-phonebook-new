import { createAction } from '@reduxjs/toolkit';


export const fetchContactsRequest = createAction('contacts/fetchContactRequest');
export const fetchContactsSuccess = createAction('contacts/fetchContactSuccess');
export const fetchContactsError = createAction('contacts/fetchContactsError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction('contacts/deleteContactRequest');
export const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
export const deleteContactError = createAction('contacts/deleteContactError');

export const changeFilter = createAction('contacts/changeFilter');

export const updateContactRequest = createAction(
  'contacts/updateContactRequest',
);
export const updateContactSuccess = createAction(
  'contacts/updateContactSuccess',
);
export const updateContactError = createAction('contacts/updateContactError');
