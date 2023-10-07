import React, { useState, useEffect } from "react";

function Header() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/contacts/");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        setContacts(data);
      } catch (error) {
        console.error(
          "There was a problem with the fetch operation:",
          error.message
        );
      }
    };

    fetchData();
  }, []);
  return (
    <header>
      <h1>Nature Blog</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        {contacts.length > 0 &&
          contacts.map((contact) => (
            <a key={contact.key} href={contact.url}>
              {contact.name}
            </a>
          ))}
      </nav>
    </header>
  );
}

export default Header;
