import { useState, useEffect } from 'react';

function App() {
  const [contacts, setContacts] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/contacts")
      .then((r) => r.json())
      .then((json) => {
        setContacts(json);
        setLoading(false);
      })
      .catch((e) => {
        setMessage("Could not fetch API: " + e.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading contacts...</div>;
  if (message) return <div>{message}</div>;

  return (
    <div>
      <h1>Contacts</h1>
      {contacts.length === 0 ? (
        <p>No contacts found</p>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <li key={contact._id}>
              <strong>{contact.name}</strong> - {contact.email}
              <br />
              {contact.phone} | {contact.company}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;