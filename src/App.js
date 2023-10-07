import React, { useState, useEffect } from "react";
import "./App.css";

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
        <a href="/?route=home">Home</a>
        <a href="/?route=about">About</a>
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

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the list of posts from the backend
        const response = await fetch("http://localhost:8000/api/posts");

        // Check if the response is ok (status code in the range 200-299)
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        // Parse the response body as JSON
        const data = await response.json();

        // Update the state with the fetched posts
        setPosts(data);
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
    <>
      <h2>Blog Posts</h2>

      <div className="cardContainer">
        {posts.length === 0 ? (
          <h2>No blog posts have been posted yet.</h2>
        ) : (
          posts.map((post) => (
            <a href={post.slug} className="blogCard">
              <div className="blogContent">
                <h3>Title: {post.title}</h3>
                <p>{post.body}</p>
              </div>
            </a>
          ))
        )}
      </div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <Posts />
    </div>
  );
}

export default App;
