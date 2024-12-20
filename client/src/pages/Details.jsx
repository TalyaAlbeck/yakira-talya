import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postRequest } from "../functions/postRequest";

export default function Details() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (email !== "" && phone !== "") {
      const username = localStorage.getItem("currentUser");
      // const result = postRequest({ username, email, phone }, "register/info");

      let fetchedUser = await postRequest(
        { username, email, phone },
        "register/info"
      );
      console.log("fetchedUser: ", fetchedUser);
      if (fetchedUser.status === 200) {
        console.log("username: ", username);
        navigate(`/home/${username}`);
      } else if (fetchedUser.status === 450) {
        setError(fetchedUser.text);
      }
      //   const url = `${API_URL}/users/${userId}`;
      //   const updateOption = {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       name: name,
      //       email: email,
      //       address: {
      //         street: address.street,
      //         suite: address.suite,
      //         city: address.city,
      //       },
      //       phone: phone,
      //     }),
      //   };
      //   const result = await apiRequest(url, updateOption);
      //   setError(result.errMsg);
      //   if (result.errMsg === null) {
      //     navigate(`/home/${userId}`, { replace: true });
      //   }
    }
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <p>{error}</p>
      <h1>Details</h1>
      <label>email:</label>
      <input
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label>phone:</label>
      <input
        value={phone}
        type="tel"
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      <button>Submit</button>
    </form>
  );
}
