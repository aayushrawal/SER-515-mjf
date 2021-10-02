import React, { useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const Registration = (props) => {
  const [data, setData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    role: "",
    email: "",
    password: "",
  });

  const handle = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  };

  const signup = (e) => {
    e.preventDefault();
    (async () => {
      const rawResponse = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (rawResponse.ok) {
        console.log("HELLO");
      }
      const content = await rawResponse.json();

      setData({
        reset: true,
      });
      console.log(content);
    })();
  };

  return (
    <div className="container">
      <form onSubmit={signup}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            onChange={handle}
            type="text"
            className="form-control"
            id="firstName"
            value={data.firstName}
            placeholder="Enter First Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            onChange={handle}
            type="text"
            className="form-control"
            id="lastName"
            value={data.lastName}
            placeholder="Enter Last Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="username"></label>
          <input
            onChange={handle}
            type="text"
            className="form-control"
            id="userId"
            value={data.username}
            placeholder="Enter username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Register As</label>
          <select
            className="form-control"
            id="role"
            value={data.role}
            onChange={handle}
          >
            <option>Select One</option>
            <option>Coach</option>
            <option>Player</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            onChange={handle}
            type="email"
            className="form-control"
            id="email"
            value={data.email}
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={handle}
            type="password"
            className="form-control"
            id="password"
            value={data.password}
            placeholder="Enter Password"
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <div>
          <Link to="/login">Back to login</Link>
        </div>
      </form>
    </div>
  );
};

export default Registration;
