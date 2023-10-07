import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/contacts`
        );

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
      <h1>
        <Link to="/">
          Nature <span className="headerHighlight">Blog</span>
        </Link>
      </h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {contacts.length > 0 &&
          contacts.map((contact) => (
            <Link key={contact.key} to={contact.url}>
              {contact.name}
            </Link>
          ))}
      </nav>
    </header>
  );
}

export default Header;
