import React from "react";
import Posts from "./components/Posts";
import PostDetail from "./components/PostDetail";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

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
          <Route path="/post/:slug" element={<PostDetail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
