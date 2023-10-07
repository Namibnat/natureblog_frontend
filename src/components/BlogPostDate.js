import React from "react";
import "./BlogPostDate.css";

function BlogPostDate({ date_created }) {
  const date = new Date(date_created);

  // Use the US date format if the language is set as US, otherwise use a more international format.
  const isUSLocale = navigator.language === "en-US";

  const formattedDate = isUSLocale
    ? `${date.toLocaleString("default", {
        month: "long",
      })} ${date.getDate()}, ${date.getFullYear()}`
    : `${date.getDate()} ${date.toLocaleString("default", {
        month: "long",
      })} ${date.getFullYear()}`;

  return <p className="dateLine">Created: {formattedDate}</p>;
}

export default BlogPostDate;
