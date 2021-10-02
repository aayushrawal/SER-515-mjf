import React, { useState } from "react";
import axios from 'axios'

import { Link } from "react-router-dom";

const Registration = (props) => {
  const url = "api/auth/signup"
  const [data, setData] = useState({
    Firstname: "",
    Lastname: '',
    Role: "",
    Email: "",
    Password: ""
  })
  
  const handle=(e)=>{
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
      setData(newdata)
      console.log(newdata)
  }

  const Signup = (e)=>{
    e.preventDefault();
    axios.post(url, {
      Firstname: data.Firstname,
      Lastname: data.Lastname,
      UserID: data.UserID,
      Role: data.Role,
      Email: data.Email,
      Password: data.Password
    })
    .then(res => {
      console.log(res.data)
    })
  }

  return (
    <div className="container">
      <form onSubmit={Signup}>
        <div className="form-group">
          <label htmlFor="Firstname">First Name</label>
          <input
            onChange={handle}
            type="text"
            className="form-control"
            id="Firstname"
            value={data.Firstname}
            placeholder="Enter First Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Lastname">Last Name</label>
          <input onChange={handle}
            type="text"
            className="form-control"
            id="Lastname"
            value={data.Lastname}
            placeholder="Enter Last Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="UserID">User ID</label>
          <input onChange={handle}
            type="text"
            className="form-control"
            id="UserID"
            value={data.UserID}
            placeholder="Enter User ID"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Role">Register As</label>
          <select className="form-control" id="Role" value={data.Role} onChange={(e) => handle(e)}>
            <option>Select One</option>
            <option>Coach</option>
            <option>Player</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="Email">Email address</label>
          <input onChange={handle}
            type="email"
            className="form-control"
            id="Email"
            value={data.Email}
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Password">Password</label>
          <input onChange={handle}
            type="password"
            className="form-control"
            id="Password"
            value={data.Password}
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
