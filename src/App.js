import React, { useState, useEffect } from "react";
import "./App.css";

function Header() {
  return (
    <header>
      <h1>Nature Blog</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Define an async function
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

    // Call the async function
    fetchData();
  }, []); // Empty dependency array means this useEffect runs once when the component mounts

  return (
    <>
      <h2>Blog Posts</h2>

      <div className="cardContainer">
        {posts.length === 0 ? (
          <h2>No blog posts have been posted yet.</h2>
        ) : (
          posts.map((post) => (
            <a href="{post.slug}" className="blogCard">
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
