import React, { useState, useEffect } from "react";
import BlogPostDate from "./BlogPostDate";

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
            <a key={post.id} href={`post/${post.slug}`} className="blogCard">
              <div className="blogContent">
                <h3>Title: {post.title}</h3>
                <BlogPostDate date_created={post.date_created} />
                <p>{post.body}</p>
              </div>
            </a>
          ))
        )}
      </div>
    </>
  );
}

export default Posts;
