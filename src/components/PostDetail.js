import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PostDetail() {
  const params = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/post/${params.slug}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error(
          "There was a problem with the fetch operation:",
          error.message
        );
      }
    };

    fetchData();
  }, [params.slug]);
  return (
    <div className="blogContent">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export default PostDetail;
