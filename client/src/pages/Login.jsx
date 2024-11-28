import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postRequest } from "../functions/postRequest";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const fetchedUser = await postRequest({ username, password }, "login");
    if (fetchedUser.status === 200) {
      localStorage.setItem("currentUser", username);
      localStorage.setItem("userId", fetchedUser.id);
      navigate(`/home/${username}`);
    } else if (fetchedUser.status === 404) {
      setError(fetchedUser.text);
    }
  }

  useEffect(() => {
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = function () {
      window.history.pushState(null, "", window.location.href);
    };
  }, []);

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1 className="inside-form">Login</h1>
      <label className="inside-form">Username:</label>
      <input
        className="inside-form"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <label className="inside-form">Password:</label>
      <input
        className="inside-form"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button className="inside-form">Submit</button>
      <br />
      <Link className="inside-form" to="/register">
        Sign Up
      </Link>
      <p className="inside-form">{error}</p>
    </form>
  );
}
