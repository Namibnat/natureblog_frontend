import React from "react";
import Posts from "./components/Posts";
import PostDetail from "./components/PostDetail";
import About from "./components/About";
import Footer from "./components/Footer";
import Login from "./components/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="UpperContainer">
          <Header />
          <div className="Container">
            <Routes>
              <Route path="/" element={<Posts />} />
              <Route path="/post/:slug" element={<PostDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
