import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error("Login failed!");
      }

      const data = await response.json();
      // Handle the response data (e.g., save the token, navigate to another page, etc.)
    } catch (error) {
      console.error(
        "There was a problem with the login request:",
        error.message
      );
      // Handle the error (e.g., show an error message to the user)
    }
  };

  return (
    <div className="loginContainer">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputGroup">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="loginButton">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
