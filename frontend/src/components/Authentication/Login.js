import React from "react";
import "./Login.css";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label for="email">Enter email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter Password"
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <div>
          <Link to="/register">Register now</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
