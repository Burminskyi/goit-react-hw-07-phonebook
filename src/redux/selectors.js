export const selectContacts = state => state.contactForm.contacts.items;
export const selectIsLoadingStatus = state => state.contactForm.contacts.isLoading;
export const selectError = state => state.contactForm.contacts.error;
export const selectFilter = state => state.contactForm.filter;
