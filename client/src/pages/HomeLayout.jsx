import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function HomeLayout() {
  const [error, setError] = useState(null);
  const [user, setUser] = useState({});
  const username = localStorage.getItem("currentUser");

  return (
    <>
      <NavBar />
      {error != null && <p>{error}</p>}
      <h2>Hello {username}!</h2>
      <div className="home-body">
        <Outlet />
      </div>
    </>
  );
}
