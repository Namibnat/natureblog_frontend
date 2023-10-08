import { Link } from "react-router-dom";
import React from "react";

import "./Header.css";

function Footer() {
  return (
    <footer>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </footer>
  );
}

export default Footer;
