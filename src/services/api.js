const BASE_URL =
  'https://64ca0febb2980cec85c2d1ec.mockapi.io/contacts/contacts';

export const fetchContacts = async () => {
  const res = await fetch(`${BASE_URL}`);
  const data = await res.json();
  return data;
};

export const deleteContact = async id => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  const data = await res.json();
  return data;
};

export const addContact = async newContact => {
  const res = await fetch(`${BASE_URL}/`, {
    method: 'POST',
    body: JSON.stringify(newContact),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
  const data = await res.json();
  return data;
};
