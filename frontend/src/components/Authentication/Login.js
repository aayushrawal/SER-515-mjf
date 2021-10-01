import React from "react";
import "./Login.css";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h2>Login page</h2>
      <Link to="/register">Link to Register page</Link>
    </div>
  );
};

export default Login;
