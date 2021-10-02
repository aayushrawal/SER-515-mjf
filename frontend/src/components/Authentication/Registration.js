import React, { useState } from "react";
import axios from 'axios'

import { Link } from "react-router-dom";

const Registration = (props) => {
  const url = "/api/auth/signup"
  const [data, setData] = useState({
    firstName: "",
    lastName: '',
    roles: "",
    username: "",
    email: "",
    password: ""
  })
  
  const handle=(e)=>{
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
      setData(newdata)
      console.log(newdata)
  }

  
  const Signup = (e)=>{
    e.preventDefault();
    // (async () => {
    //   const rawResponse = await fetch("/api/auth/signup", {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });
    //   const content = await rawResponse.json();
    //   setData({
    //     reset: true,
    //   });
    //   console.log(content);
    // })();
    axios.post(url, {
      firstName: data.firstName,
      lastName: data.lastName,
      username: data.username,
      roles: [data.roles],
      email: data.email,
      password: data.password,
    },
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then(res => {
      console.log(res.data)
    })
  }

  return (
    <div className="container">
      <form onSubmit={Signup}>
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
          <input onChange={handle}
            type="text"
            className="form-control"
            id="lastName"
            value={data.lastName}
            placeholder="Enter Last Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">User Name</label>
          <input onChange={handle}
            type="text"
            className="form-control"
            id="username"
            value={data.username}
            placeholder="Enter User ID"
          />
        </div>
        <div className="form-group">
          <label htmlFor="roles">Register As</label>
          <select className="form-control" id="roles" value={data.roles} onChange={handle}>
            <option>Select One</option>
            <option>coach</option>
            <option>player</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input onChange={handle}
            type="email"
            className="form-control"
            id="email"
            value={data.email}
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input onChange={handle}
            type="password"
            className="form-control"
            id="password"
            value={data.password}
            placeholder="Enter Password"
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary" >
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
