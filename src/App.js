import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/posts`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
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
            <a key={post.id} href={post.slug} className="blogCard">
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

function About() {
  return (
    <>
      <h3>About thing</h3>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
