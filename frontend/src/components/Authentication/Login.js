import React, { useState, useReducer } from "react";
import "./Login.css";

import { Link, useHistory } from "react-router-dom";

const formReducer = (state, event) => {
  if (event.reset) {
    return {
      username: "",
      password: "",
    };
  }

  return {
    ...state,
    [event.name]: event.value,
  };
};

const Login = (props) => {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submit, setSubmit] = useState(false);
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmit(true);
    const rawResponse = await fetch("/api/auth/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await rawResponse.json();
    if (data.isUser) {
      history.push("/home");
    } else {
      console.log(data.message);
    }
    setSubmit(false);
    setFormData({
      reset: true,
    });
  };

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <div className="container-fluid">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Enter username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              id="username"
              name="username"
              onChange={handleChange}
              value={formData.username || ""}
              disabled={submit}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter Password"
              onChange={handleChange}
              value={formData.password || ""}
              disabled={submit}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary" disabled={submit}>
            Submit
          </button>
        </form>
        <div>
          <Link to="/register">Register now</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
