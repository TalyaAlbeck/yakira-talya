import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { postRequest } from "../functions/postRequest";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [usersData, setUsersData] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== verifyPassword) {
      setError("Verified password does not equal to password");
    } else {
      let fetchedUser = await postRequest({ username, password }, "register");
      if (fetchedUser.status === 200) {
        localStorage.setItem("currentUser", username);
        navigate(`/details`);
      } else if (fetchedUser.status === 450) {
        setError(fetchedUser.text);
      }
    }
  }

  // async function isExist() {
  //   if (password !== verifyPassword) {
  //     setError("Verified password does not equal to password");
  //     return false;
  //   } else {
  //     const currentUser = usersData.filter(
  //       (user) => user.username === username
  //     );
  //     if (currentUser.length === 0) {
  //       const newUser = {
  //         id: randomNum.toString(),
  //         username: username,
  //         website: password,
  //       };

  //       const postOption = {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(newUser),
  //       };
  //       const result = await apiRequest(`${API_URL}/users`, postOption);
  //       setError(result.errMsg);
  //       if (result.data) {
  //         localStorage.setItem(
  //           "currentUserId",
  //           JSON.stringify(result.data.id.toString())
  //         );
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     } else {
  //       setError("this username exists");
  //       return null;
  //     }
  //   }
  // }

  // const randomNum = Math.floor(Math.random() * 5000);

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <label>Username:</label>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <br />
      <label>Password:</label>
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <label>Verify Password:</label>
      <input
        value={verifyPassword}
        onChange={(e) => setVerifyPassword(e.target.value)}
      />
      <br />
      <button>Submit</button>
      <br />
      <Link to="/">Login</Link>
      <p>{error}</p>
    </form>
  );
}
